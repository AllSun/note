import React, { useState,useEffect } from 'react'
import { DownOutline } from 'antd-mobile-icons'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { PullStatus } from 'antd-mobile/es/components/pull-to-refresh'
import {PullToRefresh} from 'antd-mobile'
import BillItem from '@/components/BillItem'
import {post,get} from '@/utils' 
import './index.css'
import dayjs from 'dayjs'

const Home = () => {
  const statusRecord = {
    pulling: '用力拉',
    canRelease: '松开吧',
    refreshing: '玩命加载中...',
    complete: '好啦',
};

  const [currentTime, setCurrentTime] = useState(dayjs().format('YYYY-MM')); // 当前筛选时间
  const [page, setPage] = useState(1); // 分页
  const [list, setList] = useState([]); // 账单列表
  const [totalPage, setTotalPage] = useState(0); // 分页总数
  const [refreshing, setRefreshing] = useState(statusRecord.pulling); // 下拉刷新状态




  useEffect(() => {
    getBillList() // 初始化
  }, [page])

  // 获取账单方法
  const getBillList = async () => {
    const { data } = await get(`/api/bill/list?page=${page}&page_size=5&date=${currentTime}`);
    // 下拉刷新，重制数据
    if (page === 1) {
      setList(data.list);
    } else {
      setList(list.concat(data.list));
    }
    setTotalPage(data.totalPage);
    // 上滑加载状态
    setRefreshing(statusRecord.canRelease);
  }

  // 请求列表数据
  const refreshData = () => {
    setRefreshing(setRefreshing.refreshing);
    if (page !== 1) {
      setPage(1);
    } else {
      getBillList();
    };
  };


  const loadData = () => {
    if (page < totalPage) {
      setRefreshing(setRefreshing.refreshing);
      setPage(page + 1);
    }
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
            <div className='left'>
              <span className='title'>类型 <DownOutline className='arrow'/></span>
            </div>
            <div className='right'>
              <span className='time'>2022-06<DownOutline className='arrow' /></span>
            </div>
          </div>
        </div>
      </div>
      <div className='contentWrap'>
        {
          list.map((item, index) => <BillItem bill={item} key={index} />)
        }
      </div>
    </>

  )
}

export default Home
