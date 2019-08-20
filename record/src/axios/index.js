import axios from 'axios';
import { message } from 'antd';
import qs from 'qs';

axios.defaults.withCredentials = true;

let axiosServer = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'https://www.easy-mock.com/mock/5d5b5f53c6f8054ec051ad72/record/' : '',
  timeout: 8000,
  withCredentials: true,
  transformRequest: [function(data) {
    return data;
  }],
  transformResponse: [function(data) {
    return data;
  }]
});

// 拦截
axiosServer.interceptors.request.use(function(config) {
  let time = new Date().getTime();
  //get post 分别处理
  if(config.method === 'get') {
    return config;
  }
  if(config.method === 'post') {
    config.data = qs.stringify({ _t: time, ...config.data });
    return config;
  }

},function(err) {
  return Promise.reject(err)
});

axiosServer.interceptors.response.use(function(response) {
  const data = response.data;
  return data;
},function(err) {
  if(err.message.includes('timeout')) {
    message.error('请求超时,请刷新重试')
  }
  if(err.message.includes('404')) {
    message.error('请求错误，code 404')
  }
  if(err.message.includes('500')) {
    message.error('Request failed with status code 500')
  }

  return Promise.reject(err)
});

export default {
  get: (url, config) => axiosServer.get(url,{...config}),
  post: (url, config) => axiosServer.post(url,{...config})
}

