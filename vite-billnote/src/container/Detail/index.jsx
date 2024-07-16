import Header from "../../components/Header";
import PopupBillAdd from "../../components/PopupAddBill"
import { useEffect, useState ,useRef} from "react";
import s from "./style.module.less";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";
import { get,post } from "../../utils";
import dayjs from "dayjs";
import cx from "classnames";
import { DeleteOutline, EditSOutline } from "antd-mobile-icons";
import { Modal, Toast } from "antd-mobile";



const Detail = () => {
  const navigateTo = useNavigate();
  const editRef = useRef();
  const location = useLocation(); // 获取 locaton 实例，我们可以通过打印查看内部都有些什么内容。
  const { id } = qs.parse(location.search);
  const [detail, setDetail] = useState({});

  const getDetail = async () => {
    const { data } = await get(`/api/bill/detail?id=${id}`);
    setDetail(data);
  };

  // 删除方法
  const deleteDetail = () => {
    Modal.confirm({
      title: "删除",
      content: "确认删除账单？",
      onConfirm: async () => {
        const { data } = await post("/api/bill/delete", { id });
        Toast.show("删除成功");
        navigateTo(-1);
      },
    });
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <div className={s.detail}>
      <Header title="账单详情" />
      <div className={s.card}>
        <div className={s.type}>
          {/* 通过 pay_type 属性，判断是收入或指出，给出不同的颜色*/}
          <span
            className={cx({
              [s.expense]: detail.pay_type == 1,
              [s.income]: detail.pay_type == 2,
            })}
          >
            {/* typeMap 是我们事先约定好的 icon 列表 */}
            {/* <CustomIcon className={s.iconfont} type={detail.type_id ? typeMap[detail.type_id].icon : 1} /> */}
          </span>
          <span>{detail.type_name || ""}</span>
        </div>
        {detail.pay_type == 1 ? (
          <div className={cx(s.amount, s.expense)}>-{detail.amount}</div>
        ) : (
          <div className={cx(s.amount, s.incom)}>+{detail.amount}</div>
        )}
        <div className={s.info}>
          <div className={s.time}>
            <span>记录时间</span>
            <span>{dayjs(Number(detail.date)).format("YYYY-MM-DD HH:mm")}</span>
          </div>
          <div className={s.remark}>
            <span>备注</span>
            <span>{detail.remark || "-"}</span>
          </div>
        </div>
        <div className={s.operation}>
          <span >
            <DeleteOutline  onClick={deleteDetail}/>
            删除
          </span>
          <span onClick={() => editRef.current && editRef.current.show()}>
            <EditSOutline />
            编辑
          </span>
        </div>
      </div>
    </div>
    <PopupBillAdd ref={editRef} detail={detail} onReload={getDetail} />
    </>
  );
};

export default Detail;
