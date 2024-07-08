
import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import  './index.css'
import { useNavigate } from 'react-router-dom';
import {
    BillOutline,
    PieOutline,
    UserOutline
} from 'antd-mobile-icons'
import classNames  from 'classnames';

const NavBar = ( {showNav} ) => {
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
        <div className={'container'}></div>
        <div className={classNames('footer',!showNav && 'notosee')} >
            <TabBar activeKey={activeKey} onChange={changeTab} className='tab'>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
        </>
    )


};



export default NavBar;
