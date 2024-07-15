import { useState, useEffect, useRef } from "react";
import { DownOutline,EditSOutline } from "antd-mobile-icons";
import { PullToRefresh, InfiniteScroll } from "antd-mobile";
import dayjs from "dayjs";

import { sleep } from "antd-mobile/es/utils/sleep";
import BillItem from "../../components/BillItem";
import { get } from "../../utils";
import s from "./style.module.less";

import PopupType from "../../components/PopupType"; 
import PopupDate from "../../components/PopupDate";
import PopupAddBill from "../../components/PopupBillAdd";

const Home = () => {
  const typeRef = useRef(); // 账单类型 ref
  const [currentTime, setCurrentTime] = useState(dayjs().format("YYYY-MM")); // 当前筛选时间
  const monthRef = useRef(); // 月份筛选 ref
  const addRef = useRef(); // 添加账单 ref
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1); // 分页
  const [list, setList] = useState([]); // 账单列表
  // eslint-disable-next-line no-unused-vars
  const [totalPage, setTotalPage] = useState(0); // 分页总数
  // eslint-disable-next-line no-unused-vars
  const [hasMore, setHasMore] = useState(false);
  const [currentSelect, setCurrentSelect] = useState({}); // 当前筛选类型
  const [totalExpense, setTotalExpense] = useState(0); // 总支出
  const [totalIncome, setTotalIncome] = useState(0); // 总收入

  // 获取账单方法
  const getBillList = async () => {
    const { data } = await get(
      `/api/bill/list?page=${page}&page_size=5&date=${currentTime}&type_id=${currentSelect.id || 'all'}`
    );
    // console.log(
    //   `/api/bill/list?page=${page}&page_size=5&date=2023-07&type_id=${currentSelect.id || 'all'}`
    // );
    // /api/bill/list?page=1&page_size=5&date=2024-07&type_id=all

    // 下拉刷新，重制数据
    if (page === 1) {
      setList(data.list);
    } else {
      setList(list.concat(data.list));
    }
    setTotalExpense(data.totalExpense.toFixed(2));
    setTotalIncome(data.totalIncome.toFixed(2));
    setTotalPage(data.totalPage);
  };

  const statusRecord = {
    pulling: "用力拉",
    canRelease: "松开吧",
    refreshing: "玩命加载中...",
    complete: "好啦",
  };

  useEffect(() => {
    getBillList(); // 初始化
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page,currentSelect,currentTime]);

  // 请求列表数据
  const refreshData = () => {
    if (page != 1) {
      setPage(1);
    } else {
      getBillList();
    }
  };

  const loadData = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };
  const loadMore = async () => {
    loadData();
  };

  // 添加账单弹窗
  const toggle = () => {
    typeRef.current && typeRef.current.show();
  };

  // 筛选类型
  const select = (item) => {
    setPage(1);
    setCurrentSelect(item)
  }

  // 筛选月份
  const selectMonth = (item) => {
    setPage(1);
    setCurrentTime(item)
  }

  // 选择月份弹窗
  const monthToggle = () => {
    monthRef.current && monthRef.current.show()
  };

  // 添加账单弹窗
  const addToggle = () => {
    addRef.current && addRef.current.show()
  }

  
  return (
    <div className={s.home}>
      <div className={s.header}>
        <div className={s.dataWrap}>
          <span className={s.expense}>
            总支出：<b>¥ {totalExpense}</b>
          </span>
          <span className={s.income}>
            总收入：<b>¥ {totalIncome}</b>
          </span>
        </div>
        <div className={s.typeWrap}>
        <div className={s.left} onClick={toggle}>
          <span className={s.title}>{ currentSelect.name || '全部类型' } <DownOutline className={s.arrow}  /></span>
        </div>
        <div className={s.right} onClick={monthToggle}>
          <span className={s.time} >{ currentTime }<DownOutline className={s.arrow}  /></span>
        </div>
        </div>
      </div>
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000);
          refreshData();
        }}
        renderText={(status) => {
          return <div>{statusRecord[status]}</div>;
        }}
      >
        <div className="contentWrap">
          {list.map((item, index) => (
            <BillItem bill={item} key={index} />
          ))}
        </div>
      </PullToRefresh>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      <PopupType ref={typeRef} onSelect={select} />
      <PopupDate ref={monthRef} mode="month" onSelect={selectMonth} />
      <div className={s.add} onClick={addToggle}><EditSOutline  /></div>
      <PopupAddBill ref={addRef} onReload={refreshData}/>
    </div>
  );
};

export default Home;
