import { Axios } from "axios";

const baseURL = process.env.BASE_URL;

function createAxios(baseURL) {
  const service = Axios.create({
    baseURL,
    timeout: 100000
  })

  service.interceptors.request.use(config => {

    const token = store.getters.token || Vue.ls.get('token')
    if (token) {
        // headers添加token
        config.headers['token'] = token
    } else {
        // 测试
        config.headers['token'] = 'e5666e079aab415ea008ad4ad18fc9cf'//dev
    }

    if(config.headers.Type && config.headers.Type =='form'){
      config.data=qs.stringify({
          ...config.data
      })
  }
  return config
  }, err)

  service.interceptors.response.use(res => {
    return res;
  })

  const err = (error) => {
    if (error.response) {
      const data = error.response.data
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
    return Promise.reject(error)
  }

  return service;
}

export const axios = createAxios(baseURL)