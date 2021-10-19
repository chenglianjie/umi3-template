import type { RequestConfig } from 'umi';

// 请求拦截器
const requestInterceptor = (url, options) => {
  let token = localStorage.getItem('token') || '';
  const authHeader = { Authorization: `Bearer ${token}` };
  return {
    url,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};

export const request: RequestConfig = {
  // 超时时间
  timeout: 60000,
  // 错误配置
  errorConfig: {
    adaptor: (resData) => {
      console.log('resData', resData);
      return {
        ...resData,
        success: resData.code === 1 ? true : false,
        errorMessage: resData.msg,
        showType: 2,
      };
    },
  },
  middlewares: [],
  requestInterceptors: [requestInterceptor],
  responseInterceptors: [],
};
