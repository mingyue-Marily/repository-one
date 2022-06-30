import axios from 'axios'
import {Message} from 'element-ui'
const service = axios.create({
  baseURL:'/api',//baseURL会自动加在请求地址上，
  timeout:3000
})

//添加请求拦截器
service.interceptors.request.use((config)=>{
  config.headers['token'] = '123'
  return config
},(err)=>{
  return Promise.reject(err)
})


service.interceptors.response.use((response)=>{
  // 不同后端 返回数据结构可能不同
  let {status,message} = response.data
  if(status!== 200){
    Message({
      message:message || 'error',
      type:'error'
    })
  }
},(err)=>{
  return Promise.reject(err)
})


export default service