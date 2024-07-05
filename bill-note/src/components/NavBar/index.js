
import React, { useState } from 'react';
import s from './style.module.less'
import { TabBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import {
    BillOutline,
    PieOutline,
    UserOutline
} from 'antd-mobile-icons'

const NavBar = ({ showNav }) => {
    const [activeKey, setActiveKey] = useState('/');

    const navigateTo = useNavigate()

    const changeTab = (path) => {
        setActiveKey(path)
        navigateTo(path)
    }
    const tabs = [
        {
            key: '/',
            title: '账单',
            icon: <BillOutline />
        },
        {
            key: '/data',
            title: '统计',
            icon: <PieOutline />
        },

        {
            key: '/user',
            title: '我的',
            icon: <UserOutline />
        }
    ]
    return (
        <>
        <div className={s.container}></div>
        <div className={s.footer} >
            <TabBar activeKey={activeKey} onChange={changeTab}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
        </>
    )


};



export default NavBar;
