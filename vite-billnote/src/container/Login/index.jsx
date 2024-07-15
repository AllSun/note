import { Form, Input, Button, Toast } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import  s from './style.module.less'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import {post} from '@/utils'
import cx from 'classnames'


const Login = () => {
  const [visible, setVisible] = useState(false)
  const [type, setType] = useState('register'); // 登录注册类型

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [verify, setVerify] = useState('')
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, [])
  useEffect(() => {
    document.title = type === 'login' ? '登录' : '注册';
  }, [type])

  const onSubmit = async () => {
    if (!username) {
      Toast.show({ content: '请输入用户名' })
      return
    }
    if (!password) {
      Toast.show({ content: '请输入密码' })
      return
    }
    try {
      if (type === 'login') {
        const { data } = await post('/api/user/login', {
          username,
          password
        });
        /*调用浏览器的方法存储token及重定向*/
        localStorage.setItem('token', data.token);
        Toast.show({ content: '登录成功' })
        window.location.href = '/';
      } else {
        if (!verify) {
          Toast.show({ content: '请输入验证码' })
          return
        };
        if (!validateCaptcha(verify)) {
          Toast.show({ content: '验证码错误' })
          return
        };
        await post('/api/user/register', {
          username,
          password
        });
        Toast.show({content:'注册成功'});
        setType('login');
      }
    } catch (err) {
      Toast.show({ content: err.msg })
      console.log(err.msg)
    }

  }

  return (

    <div className={s.auth}>
      <span className={cx({ [s.avtive]: type === 'login' })} onClick={() => setType('login')}>登录</span>
      <span>|</span>
      <span className={cx({ [s.avtive]: type === 'register' })} onClick={() => setType('register')}>注册</span>
      <Form layout='horizontal'>
        <Form.Item label='用户名' name='username'>
          <Input placeholder='请输入用户名' clearable onChange={(value) => setUsername(value)} />
        </Form.Item>
        <Form.Item
          label='密码'
          name='password'
          extra={
            <div className={s.eye}>
              {!visible ? (
                <EyeInvisibleOutline onClick={() => setVisible(true)} />
              ) : (
                <EyeOutline onClick={() => setVisible(false)} />
              )}
            </div>
          }
        >
          <Input
            placeholder='请输入密码'
            clearable
            type={visible ? 'text' : 'password'}
            onChange={(value) => setPassword(value)}
          />
        </Form.Item>
      </Form>
      {
        type === 'register' ? (<Form layout='horizontal'>
          <Form.Item label='验证码' name='vertify' extra={< LoadCanvasTemplate reloadText="重新生成" />}>
            <Input placeholder='请输入验证码' clearable onChange={(value) => setVerify(value)} />
          </Form.Item>
        </Form>) : null
      }
      <Button block color='primary' size='small' onClick={onSubmit}>
        {type === 'login' ? '登录' : '注册'}
      </Button>
    </div>

  )
}

export default Login