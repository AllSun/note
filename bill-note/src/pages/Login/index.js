import { Form, Input, Button } from 'antd-mobile'
import { useState } from 'react'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import styles from './index.less'

const Login = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Form layout='horizontal'>
        <Form.Item label='用户名' name='username'>
          <Input placeholder='请输入用户名' clearable />
        </Form.Item>
        <Form.Item
          label='密码'
          name='password'
          extra={
            <div className={styles.eye}>
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
          />
        </Form.Item>
      </Form>
      <Button block color='primary' size='middle'>
        登录
      </Button>
    </>
  )
}

export default Login