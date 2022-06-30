import service from "@/assets/service";


export function getUser(data){
  return service({
    methods:'post',
    url:'/login',
    data
  })
}

export function students(data){
  return service({
    methods:'get',
    url:'/student',
   
  })
}
//shujugailan
export function dataView(){
  return service({
    methods:'get',
    url:'/getView'
  })
}