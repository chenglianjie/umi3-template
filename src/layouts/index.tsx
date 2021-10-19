import { history } from 'umi';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './index.less';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default (props: any) => {
  const LoginOut = () => {
    history.push('/login');
    localStorage.clear();
  };
  return (
    <Layout>
      <Header className="header">
        <div className="menu-box">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">店铺</Menu.Item>
            <Menu.Item key="3">报表</Menu.Item>
          </Menu>
        </div>
        <div className="login-out">
          <Button onClick={LoginOut} type="primary">
            退出登录
          </Button>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background sider">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={({ key }) => {
              // console.log('点击menu', key, keyPath);
              history.push(key);
            }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="list">list组件</Menu.Item>
              <Menu.Item key="lll">请求练习</Menu.Item>
              <Menu.Item key="private">隐私</Menu.Item>
              <Menu.Item key="admin">后台组件</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
