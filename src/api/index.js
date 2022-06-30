/* 
包含n个接口请求函数的模块 */

import ajax from "./ajax.js"


export function reqUser(data){
  return ajax({
    type:'POST',
    url:'/login',
    data
  })
}

export function reqStudents(data){
  return ajax({
    type:'GET',
    url:'/student',
   
  })
}
//shujugailan
export function dataView(){
  return ajax({
    type:'GET',
    url:'/getView'
  })
}