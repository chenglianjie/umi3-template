import { Redirect } from 'umi';

export default (props) => {
  const login = localStorage.getItem('token');
  console.log('权限路由里面的判断', login);
  if (login) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
