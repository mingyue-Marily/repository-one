import axios from "axios";
const axiosIns = axios.create({
  baseURL:'/api',//baseURL会自动加在请求地址上，
})
export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    //执行异步
    let promise
    if (type == 'GET') {
      //准备url query参数数据
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += `${key}=${data[key]}&`
      })

      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }

      promise = axiosIns.get(url)
    } else {
      promise = axiosIns.post(url, data)
    }


    promise.then((res) => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
    // 成功reoslve  失败reject

  })
}

// const response = await ajax()
// let result = response.data

// let result2 = await ajax()