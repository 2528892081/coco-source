import axios from "axios";
import qs from "qs";
import Vue from "vue";
import { store } from "./store";

const baseURL = process.env.BASE_URL;

const err = (error) => {
  if (error.response) {
    // const data = error.response.data;
    // console.info('错误代码:' + error.response.status)
    // if (error.response.status === 403) {
    //     Notify({ type: 'danger', message: '未授权!' });
    // }
    // if (error.response.status === 401) {
    //     Notify({ type: 'warning', message: '登录失效，请重新登录!' });
    //     setTimeout(() => {
    //         nativeRelogin()
    //     }, 1000)
    // }
  }
  return Promise.reject(error);
};

function createAxios(baseURL) {
  const service = axios.create({
    baseURL,
    timeout: 5000,
  });

  service.interceptors.request.use((config) => {
    const token = store.getters.token; // || Vue.ls.get("token");
    if (token) {
      // headers添加token
      config.headers["token"] = token;
    } else {
      // 测试
      config.headers["token"] = "e5666e079aab415ea008ad4ad18fc9cf"; //dev
    }

    if (config.headers.Type && config.headers.Type == "form") {
      config.data = qs.stringify({
        ...config.data,
      });
    }
    return config;
  }, err);

  service.interceptors.response.use((res) => {
    if (res.data.code === 0) {
      return res.data.value;
    } else {
      return err("请求失败");
    }
    // return res;
  });

  return service;
}

export const saxios = createAxios(baseURL);
