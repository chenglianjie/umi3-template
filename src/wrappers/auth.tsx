import { Redirect } from 'umi';

// 权限路由判断
export default (props) => {
  const login = localStorage.getItem('token');
  if (login) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
