// import type { RequestConfig } from 'umi';
// import type { RequestOptionsInit } from 'umi-request';

// // 根据不同的开发环境,配置请求前缀
// const apiPreFix: {
//   dev: string;
//   test: string;
//   prd: string;
// } = {
//   dev: 'http://127.0.0.1:3030/',
//   test: 'http://120.55.193.14:3030/',
//   prd: 'http://120.55.193.14:3030/',
// };

// // request拦截器, 携带token,以及根据环境,配置不同的请求前缀
// const requestInterceptor = (url: string, options: RequestOptionsInit) => {
//   // 给每个请求带上token
//   let token = localStorage.getItem('token') || '';
//   const authHeader = { Authorization: `Bearer ${token}` };
//   return {
//     url: `${apiPreFix[CurrentEnvironment]}${url}`,
//     options: { ...options, interceptors: true, headers: authHeader },
//   };
// };

// // 响应拦截器 全局错误拦截功能
// const responseInterceptor = (response, options) => {
//   console.log('响应拦截器', response, options);
//   return response;
// };
// export const request: RequestConfig = {
//   middlewares: [
//     async function middlewareA(ctx, next) {
//       console.log('中间件', ctx);
//       await next();
//     },
//   ],
//   // 请求拦截器
//   requestInterceptors: [requestInterceptor],
//   // 响应拦截器
//   responseInterceptors: [responseInterceptor],
// };
