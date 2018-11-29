import axios from 'axios';
import qs from 'qs';
import router from '../router/index';

let baseUrl = 'http://localhost:13001';

// 添加请求(request)拦截器
axios.interceptors.request.use(function (config) {
  let token = null;
  var userInfoJson = localStorage.getItem("UserInfo");
  if (userInfoJson != undefined) {
    let userInfo = JSON.parse(userInfoJson.toString());
    token = userInfo.token;
  }

  // 在发送请求之前做些什么
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept-token': token
  };

  if (config.method == 'post') {
    config.data = qs.stringify(config.data);
  }

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应(respones)拦截器
axios.interceptors.response.use(function (response) {
  const e = response.data;
  if (e.code == -903 || e.code == -904) {
    localStorage.removeItem("UserInfo");
    router.push({ name: 'Login' });
  }

  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

//用户登录接口
export const requestLogin = params => {
  return axios.post(`${baseUrl}/login`, params).then(res => res.data);
};

//创建项目接口
export const requestCreateProject = params => {
  return axios.post(`${baseUrl}/project/create`, params).then(res => res.data);
};

//获取项目列表接口
export const requestListProject = params => {
  return axios.post(`${baseUrl}/project/list`, params).then(res => res.data);
};

//新增接口主体信息接口
export const requestCreateInterface = params => {
  return axios.post(`${baseUrl}/interface/create`, params).then(res => res.data);
}