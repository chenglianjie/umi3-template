/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useHistory, Redirect } from 'umi';
import { Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from '@/request/umi-request';
import './login.less';
// import requestss from '../../request/umi-request';
// import { request } from 'umi';
function Login() {
  const [userName, setUserName] = useState<string>(''); // 账号
  const [password, setPassword] = useState<string>(''); // 密码
  const history = useHistory();
  const request = async () => {
    const data = await axios.get('error');
    console.log('data', data);
    // try {
    //   const data = axios.get('http://120.55.193.14:3030/shoppingCat', {
    //     filter: 'normal',
    //     size: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
    //   });
    //   console.log('data', data);
    // } catch (error) {
    //   console.error(error);
    // }
  };
  // 确认登录
  const login = async () => {
    try {
      if (!userName || !password) {
        message.warning('账号密码不能为空');
        return;
      }
      localStorage.setItem('token', 'logining');
      history.push('/list');
    } catch (error: any) {
      let msg = error?.response?.data?.msg;
      message.error(msg);
    }
  };
  // 如果已经登录,跳转到list路由
  const islogin = localStorage.getItem('token');
  if (islogin) {
    return <Redirect to="/list" />;
  }
  return (
    <div className="login-module">
      <div className="head-title">
        <div className="logo-title">
          <img src={require('@/assets/logo/loginLogo.png')} alt="几维安全logo" />
          <span>测试企业</span>
        </div>
        <div className="small-title">泛兮科技后台管理平台</div>
        <div className="titles">账号密码登录</div>
        <div className="input-box">
          <Input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            allowClear={true}
            size="large"
            style={{ width: 324 }}
            placeholder="请输入账号"
            prefix={<UserOutlined style={{ color: '#0084ff' }} />}
          />
        </div>
        <div className="input-box">
          <Input.Password
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            size="large"
            style={{ width: 324 }}
            placeholder="请输入密码"
            prefix={<LockOutlined style={{ color: '#0084ff' }} />}
          />
        </div>
        <div className="submit">
          <Button
            onClick={() => {
              login();
            }}
            style={{ width: 324 }}
            type="primary"
          >
            登录
          </Button>
          <Button
            onClick={() => {
              request();
            }}
            style={{ width: 324 }}
            type="primary"
          >
            测试请求
          </Button>
        </div>
        <footer className="footers">
          <a target="_blank" className="web-title" href="https://www.kiwisec.com/">
            几维安全官网
          </a>
          <span className="icons">&</span>
          <a href="https://cloud.kiwisec.com" target="_blank">
            cloud平台
          </a>
          <div className="word"> &copy2021 几维安全技术部出品</div>
        </footer>
      </div>
    </div>
  );
}
export default Login;
