/* eslint-disable no-param-reassign, no-console */
import axios from 'axios';

// 创建一个新的axios
const instance = axios.create({
  baseURL: 'https://api.kecoyo.com/',
});

// Axios请求拦截处理
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);
// Axios响应拦截处理
instance.interceptors.response.use(
  (res) => {
    console.log('--------------------------------------------');
    const { data } = res;
    if (data.errno === 0) {
      return data.data;
    }
    return Promise.reject(new Error(data.msg));
  },
  (err) => Promise.reject(err)
);

export default instance;
