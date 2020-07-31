import axios from 'axios'
const instance = axios.create({
  // baseURL: 'https://gonelist.cugxuan.cn/onedrive/',
  timeout: 15000
})

// request interceptor 请求拦截器
instance.interceptors.request.use(
  config => {
    // config.headers.post['Content-Type'] = 'application/json'
    // console.log('config: ', config)
    // console.log('config.headers.post: ', config.headers.post)
    config
  },
  err => {
    // do something with request error
    console.log(err) // for debug
    return Promise.reject(err)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    const { data } = response
    console.log(data)
    return data
  },
  err => {
    console.log(err)
  }
)

export default instance
