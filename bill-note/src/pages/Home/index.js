import React, { useState, useEffect, useRef } from 'react'
import { DownOutline } from 'antd-mobile-icons'
import { PullToRefresh } from 'antd-mobile';

import { sleep } from 'antd-mobile/es/utils/sleep'
import { InfiniteScroll } from 'antd-mobile'
import BillItem from '@/components/BillItem'
import './index.css'
import dayjs from 'dayjs'
import { get } from '@/utils'

import PopupType from '@/components/PopupType';

const Home = () => {
  const typeRef = useRef(); // 账单类型 ref

  // eslint-disable-next-line no-unused-vars
  const [currentTime, setCurrentTime] = useState(dayjs().format('YYYY-MM')); // 当前筛选时间
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1); // 分页
  const [list, setList] = useState([]); // 账单列表
  // eslint-disable-next-line no-unused-vars
  const [totalPage, setTotalPage] = useState(0); // 分页总数
  // eslint-disable-next-line no-unused-vars
  const [hasMore, setHasMore] = useState(false)
  const [currentSelect, setCurrentSelect] = useState({}); // 当前筛选类型


  const statusRecord = {
    pulling: '用力拉',
    canRelease: '松开吧',
    refreshing: '玩命加载中...',
    complete: '好啦',
  };
  // 获取账单方法
  const getBillList = async () => {
    const { data } = await get(`/api/bill/list?page=${page}&page_size=5&date=2023-07`);
    // 下拉刷新，重制数据
    if (page === 1) {
      setList(data.list);
    } else {
      setList(list.concat(data.list));
    }
    setTotalPage(data.totalPage);
  }

  useEffect(() => {
    getBillList() // 初始化
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const loadMore = async () => {

  }

  // 添加账单弹窗
  const toggle = () => {
    typeRef.current && typeRef.current.show()
  };

  // 筛选类型
  const select = (item) => {
    setPage(1);
    setCurrentSelect(item)
  }
  return (
    <>
      <div className='home'>
        <div className='header'>
          <div className='dataWrap'>
            <span className='expense'>总支出：<b>¥ 200</b></span>
            <span className='income'>总收入：<b>¥ 500</b></span>
          </div>
          <div className='typeWrap'>
            <div className='left' onClick={toggle}>
              <span className='title'>{currentSelect.name || '全部类型'} <DownOutline className='arrow' /></span>
            </div>
            <div className='right'>
              <span className='time' >2021-05<DownOutline className='arrow' /></span>
            </div>
          </div>
        </div>
      </div>

      <PullToRefresh onRefresh={async () => {
        await sleep(1000);
        getBillList();
      }} renderText={status => {
        return <div>{statusRecord[status]}</div>;
      }}>

        <div className='contentWrap'>
          {console.log(list)}
          {

            list.map((item, index) => <BillItem bill={item} key={index} />)
          }
        </div>
      </PullToRefresh>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      <PopupType ref={typeRef} onSelect={select} />
    </>

  )
}

export default Home
