//获取表格数据
export const getData = (root,url,params)=>{
  root.service.get(url,{params:params || {}})
  .then(res=>{
    if(res.data.status === 200){
      root.tableData = res.data.data
      root.total = res.data.total
    }
  })

}

//新增和修改的方法
import qs from 'qs'
export const changeInfo = (root,url,method,form,callback)=>{
  let data = qs.stringify(form)
  root.service[method](url,data)
  .then(res=>{
    if(res.data.status === 200){
      callback(root,url)
      root.dialogFormVisible = false
      root.$refs['form'].resetFields()
    }
  })
}