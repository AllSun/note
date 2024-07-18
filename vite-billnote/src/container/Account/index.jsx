import React, { useState } from 'react';
import { Form, Input, Button, Toast } from 'antd-mobile';
import { LockOutline } from 'antd-mobile-icons';
import Header from '../../components/Header';
import { get,post } from "../../utils";


const ResetPassword = () => {
  const [form] = Form.useForm();


  const handleSubmit = async(values) => {
    const {currentPassword,newPassword,confirmPassword} =values;
    if (newPassword !== confirmPassword) {
      Toast.show({
        icon: 'fail',
        content: '新密码和确认密码不匹配',
      });
      return;
    }
    // 这里处理密码重置逻辑，比如发送请求到后端API

    await post('/api/user/modify_pass', {
      old_pass: currentPassword,
      new_pass: newPassword,
      new_pass2: confirmPassword,
    })
    Toast.show({
      icon: 'success',
      content: '密码重置成功',
    });
  };

  return (
    <>
    <Header title={'重置密码'}/>
    <div style={{ padding: '20px' }}>
      <Form
        form={form}
        layout='horizontal'
        footer={
          <Button block type='submit' color='primary' size='large'>
            重置密码
          </Button>
        }
        onFinish={handleSubmit}
        onValuesChange={(a,b)=>{console.log(b)}}
      >
        <Form.Item
          name='currentPassword'
          label='原密码'
          rules={[{ required: true, message: '请输入原密码' }]}
        >
          <Input
            prefix={<LockOutline />}
            type='password'
            placeholder='请输入原密码'
          />
        </Form.Item>
        <Form.Item
          name='newPassword'
          label='新密码'
          rules={[{ required: true, message: '请输入新密码' }]}
        >
          <Input
            prefix={<LockOutline />}
            type='password'
            placeholder='请输入新密码'
          />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          label='确认密码'
          rules={[{ required: true, message: '请确认新密码' }]}
        >
          <Input
            prefix={<LockOutline />}
            type='password'
            placeholder='请确认新密码'
          />
        </Form.Item>
      </Form>
    </div>
    </>
  );
};

export default ResetPassword;
