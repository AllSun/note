import { Form, Input, Button,Toast } from 'antd-mobile'
import { useEffect, useState } from 'react'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import styles from './index.less'
import { loadCaptchaEnginge, LoadCanvasTemplate ,validateCaptcha} from 'react-simple-captcha';
import axios from 'axios'

const Login = () => {
  const [visible, setVisible] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [verify, setVerify] = useState('')
  useEffect(()=>{
    loadCaptchaEnginge(4);
  },[])

  const onSubmit = async()=>{
    if (!username) {
      Toast.show({content:'请输入用户名'})
      return
    }
    if (!password) {
      Toast.show({content:'请输入密码'})
      return
    }
    if (!verify) {
      Toast.show({content:'请输入验证码'})
      return
    };
    if (!validateCaptcha(verify)) {
      Toast.show('验证码错误')
      return
    };
    try{
      const { data } = await axios.post('http://127.0.0.1:7001/api/user/register', {
        username,
        password
      });
      console.log(data)
      Toast.show({content:'注册成功'});
    }catch(err){
      Toast.show({content:err.msg})
      console.log(err.msg)
    }

  }

  return (
    <>
      <Form layout='horizontal'>
        <Form.Item label='用户名' name='username'>
          <Input placeholder='请输入用户名' clearable onChange={(value) => setUsername(value)} />
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
            onChange={(value) => setPassword(value)}
          />
        </Form.Item>
        <Form.Item label='验证码' name='vertify' extra={< LoadCanvasTemplate reloadText="重新生成"/>}>
          <Input placeholder='请输入验证码' clearable onChange={(value) => setVerify(value)}/>
        </Form.Item>
      </Form>
      <Button block color='primary' size='small' onClick={onSubmit}> 
        注册
      </Button>
        
    </>
  )
}

export default Login