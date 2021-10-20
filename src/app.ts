import type { RequestConfig } from 'umi';

// 请求拦截器 增加token功能
const requestInterceptor = (url, options) => {
  // 给每个请求带上token
  let token = localStorage.getItem('token') || '';
  const authHeader = { Authorization: `Bearer ${token}` };
  return {
    url,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};
// 响应拦截器 增加token功能
const responseInterceptor = (response, options) => {
  console.log('响应拦截器', response, options);
  return response;
};
export const request: RequestConfig = {
  // 超时时间
  timeout: 60000,
  // 错误配置
  //   errorConfig: {
  //     adaptor: (resData) => {
  //       console.log('resData', resData);
  //       return {
  //         ...resData,
  //         success: resData.code === 1 ? true : false,
  //         errorMessage: resData.msg,
  //         showType: 2,
  //       };
  //     },
  //   },
  // 请求拦截器
  requestInterceptors: [requestInterceptor],
  // 响应拦截器
  responseInterceptors: [responseInterceptor],
};
