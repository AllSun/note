
import { useState } from 'react';
import { TabBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import {
    BillOutline,
    PieOutline,
    UserOutline
} from 'antd-mobile-icons'
import classNames  from 'classnames';
import s from './style.module.less'

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
        <div className={s.container}></div>
        <div className={classNames(s.footer,!showNav && s.notosee)} >
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
