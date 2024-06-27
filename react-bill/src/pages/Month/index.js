import { NavBar, DatePicker } from 'antd-mobile'
import { useState, useMemo, useEffect } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import _ from 'loadsh'
import './index.scss'
import { useSelector } from 'react-redux'
import DailyBill from './components/Daily'
const Month = () => {

    //按月统计数据,reçdux管理
    const billList = useSelector(state => state.bill.billList)
    //获取账单月同一月份账单数组
    const [currentMonthList, setMonthList] = useState([])
    const monthResult = useMemo(() => {
        //对当月支出、收入、结余累加， a为和，c为当前项
        const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
        const income = currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
        return {
            pay,
            income,
            total: pay + income
        }

    }, [currentMonthList])

    const monthGroup = useMemo(() => {
        return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
    }, [billList])
    //初始化，当前月的统计数据显示出来
    useEffect(() => {
        const nowDate = dayjs(new Date()).format('YYYY-MM')
        if (monthGroup[nowDate]) {
            setMonthList(monthGroup[nowDate])
        }
    }, [monthGroup])


    //console.log(monthGroup)
    //控制弹窗的打开、关闭
    const [dateVisible, setDateVisible] = useState(false)
    //控制时间显示
    const [currentDate, setCurrentDate] = useState(() => {
        return dayjs(new Date()).format('YYYY-MM')
    })


    // 当前月按照日来做分组
    const dayGroup = useMemo(() => {
        // return出去计算之后的值
        const groupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY-MM-DD'))
        const keys = Object.keys(groupData)
        return {
            groupData,
            keys
        }
    }, [currentMonthList])
    const onConfirm = (date) => {
        setDateVisible(false)
        //可以补充其他逻辑
        const formatDate = dayjs(date).format('YYYY-MM')
        console.log(formatDate)
        setMonthList(monthGroup[formatDate])
        console.log('取的月份：' + monthGroup[formatDate])
        setCurrentDate(formatDate)
    }
    return (
        <div className="monthlyBill">
            <NavBar className="nav" backArrow={false}>
                月度收支
            </NavBar>
            <div className="content">
                <div className="header">
                    {/* 时间切换区域 */}
                    <div className="date" onClick={() => setDateVisible(true)}>
                        <span className="text">
                            {/* 不能直接渲染对象*/}
                            {currentDate}月账单
                        </span>
                        {/* 思路：根据当前弹框打开的状态控制expand类名是否存在 */}
                        <span className={classNames('arrow', dateVisible && 'expand')}></span>
                    </div>
                    {/* 统计区域 */}
                    <div className='twoLineOverview'>
                        <div className="item">
                            <span className="money">{monthResult.pay.toFixed(2)}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.income.toFixed(2)}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.total.toFixed(2)}</span>
                            <span className="type">结余</span>
                        </div>
                    </div>
                    {/* 时间选择器 */}
                    <DatePicker
                        className="kaDate"
                        title="记账日期"
                        precision="month"
                        visible={dateVisible}
                        //取消事件
                        onCancel={() => setDateVisible(false)}
                        //点确定按钮,会注入date参数
                        onConfirm={onConfirm}
                        max={new Date()}
                    />
                    {/* 单日列表统计 */}
                    {
                        dayGroup.keys.map(key => {
                            return <DailyBill key={key} date={key} billList={dayGroup.groupData[key]} />
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Month