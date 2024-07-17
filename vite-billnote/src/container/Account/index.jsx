import React from 'react';
import { Card, Input, Button, Toast } from 'antd-mobile';
import { createForm  } from 'rc-form';
import Header from '../../components/Header'
import { post } from '../../utils'

import s from './style.module.less'

const Account = (props) => {

  return <>
    <Header title="重制密码" />
    <div className={s.account}>
      <div className={s.form}>
        <Card title="原密码">
          <Input
            clearable
            type="text"
            placeholder="请输入原密码"
            // {...getFieldProps('oldpass', { rules: [{ required: true }] })}
          />
        </Card>
        <Card title="新密码">
          <Input
            clearable
            type="text"
            placeholder="请输入新密码"
            // {...getFieldProps('newpass', { rules: [{ required: true }] })}
          />
        </Card>
        <Card title="确认密码">
          <Input
            clearable
            type="text"
            placeholder="请再此输入新密码确认"
            // {...getFieldProps('newpass2', { rules: [{ required: true }] })}
          />
        </Card>
      </div>
      {/* <Button className={s.btn} block theme="primary" onClick={}>提交</Button> */}
    </div>
  </>
};

export default createForm()(Account);

