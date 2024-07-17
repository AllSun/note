import { useState, useEffect } from "react";
import { get } from "../../utils";
import { useNavigate } from 'react-router-dom';
import { Card, } from 'antd-mobile';
import {RightOutline} from 'antd-mobile-icons'


import s from "./style.module.less";

const User = () => {
  const [user, setUser] = useState({});
  const navigateTo = useNavigate();

  // 获取用户信息
  const getUserInfo = async () => {
    const { data } = await get("/api/user/get_userinfo");
    setUser(data);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className={s.user}>
      <div className={s.head}>
        <div className={s.info}>
          <span>昵称：{user.username || "--"}</span>
          <span>
            <img
              style={{ width: 30, height: 30, verticalAlign: "-10px" }}
              src="//s.yezgea02.com/1615973630132/geqian.png"
              alt=""
            />
            <b>{user.signature || "暂无个签"}</b>
          </span>
        </div>
        <img
          className={s.avatar}
          style={{ width: 60, height: 60, borderRadius: 8 }}
          src={user.avatar || ""}
          alt=""
        />
      </div>
      <div className={s.content}>
      <Card
        title="用户信息修改"
        onClick={() => navigateTo('/userinfo')}
        extra={<RightOutline/>}
      />
      <Card
        title="重制密码"
        onClick={() => navigateTo('/account')}
        extra={<RightOutline/>}
      />
      <Card
        title="关于我们"
        onClick={() => navigateTo('/about')}
        extra={<RightOutline/>}
      />
    </div>
    </div>
  );
};

export default User;
