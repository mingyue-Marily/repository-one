import axios from 'axios'
const service = axios.create({
  baseURL:'/api',//baseURL会自动加在请求地址上，
  timeout:3000
})