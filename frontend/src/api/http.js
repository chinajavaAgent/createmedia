import axios from 'axios'

// 创建axios实例
const http = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const { response } = error
    
    if (response && response.status) {
      switch (response.status) {
        case 401: // 未授权
          // 清除token并跳转到登录页
          localStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403: // 权限不足
          console.error('权限不足')
          break
        case 404: // 资源不存在
          console.error('请求的资源不存在')
          break
        case 500: // 服务器错误
          console.error('服务器错误')
          break
        default:
          console.error(`未知错误: ${response.status}`)
      }
    } else {
      // 网络错误或请求被取消
      console.error('网络错误或请求被取消')
    }
    
    return Promise.reject(error)
  }
)

export default http 