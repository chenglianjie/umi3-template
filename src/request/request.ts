import { request } from 'umi';

// 封装 umi-request

/**
 * @url 请求链接
 * @parameter 请求参数
 */
interface GetAndPostRuquest {
  (url: string, parameter?: Record<string, unknown>): Promise<any>;
}

/**
 * @get  get请求方法
 * @post post请求方法
 */
interface Axios {
  get: GetAndPostRuquest;
  post: GetAndPostRuquest;
}

const axios: Axios = {
  // get请求方法
  get: async (url, parameter) => {
    try {
      const res = await request(url, { method: 'get', params: parameter });
      return res;
    } catch (error) {
      console.error(error);
    }
  },
  // post 请求方法
  post: async (url, parameter) => {
    try {
      const res = await request(url, { method: 'post', data: parameter });
      return res;
    } catch (error) {
      console.error(error);
    }
  },
};

export default axios;
