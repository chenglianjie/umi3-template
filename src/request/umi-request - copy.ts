/**
 * 网络请求工具 封装umi-request
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */

import { extend } from 'umi-request';
import type { RequestOptionsInit } from 'umi-request';
import { notification } from 'antd';

// codeMessage仅供参考 具体根据和后端协商,在详细定义.
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  500: '服务器发生错误，请检查服务器。',
};
type mapCode = 200 | 400 | 500;

/**
 * 错误异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    let errorText = codeMessage[response.status as mapCode] || response.statusText;
    const { status, url } = response;
    response
      ?.clone()
      ?.json()
      ?.then((res) => {
        // 后端返回错误信息,就用后端传回的
        errorText = res.msg ? res.msg : errorText;
        notification.error({
          message: `请求错误 ${status}: ${url}`,
          description: errorText,
        });
      });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

// 根据不同的开发环境,配置请求前缀
interface ApiPrefix {
  dev: string;
  test: string;
  prd: string;
}
const apiPreFix: ApiPrefix = {
  dev: 'http://127.0.0.1:3030/',
  test: 'http://120.55.193.14:3030/',
  prd: 'http://120.55.193.14:3030/',
};
// request拦截器, 携带token,以及根据环境,配置不同的请求前缀
request.interceptors.request.use((url: string, options: RequestOptionsInit) => {
  console.log('请求拦截器的options', options);
  // 给每个请求带上token
  let token = localStorage.getItem('tokens') || '';
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return {
    url: `${apiPreFix[CurrentEnvironment]}${url}`,
    options: { ...options, interceptors: true, headers },
  };
});

/**
 * @url 请求的url
 * @parameter 上传的参数
 * @skipErrorHandler 是否跳过错误处理
 * @carryToken 是否携带token
 */
interface GetAndPostRuquest {
  (
    url: string,
    parameter?: Record<string, unknown>,
    skipErrorHandler?: boolean,
    carryToken?: boolean,
  ): Promise<any>;
}

const get: GetAndPostRuquest = async (url, parameter) => {
  try {
    const res = await request(url, { method: 'get', params: parameter });
    return res;
  } catch (error) {
    console.error(error);
  }
};

const post: GetAndPostRuquest = async (url, parameter) => {
  try {
    const res = await request(url, { method: 'post', data: parameter });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export default {
  get,
  post,
};
