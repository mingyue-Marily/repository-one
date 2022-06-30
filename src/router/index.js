import Vue from "vue";
import Router from "vue-router";
// 声明使用插件
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/msite',
            hidden:true,
            component:()=>import('@/pages/Msite/Msite')
        },
        // start
        {
            path:'/login',
            hidden:true,
            component:()=>import('@/pages/Login')
        },
        {
            path:'/home',
            name:"学生管理",
            iconClass:'el-icon-location',
            // redirect:'/home/student',
            // component:()=>import('@/pages/Home')
            //异步组件

            component:(resolve)=>require(['@/pages/Home'],resolve),
            children:[
              {
                path:'/home/student',
                name:'学生列表',
                iconClass:'el-icon-location',
                component:()=>import('@/pages/Student')
              },
              {
                path:'/home/info',
                name:'信息列表',
                iconClass:'el-icon-location',
                component:()=>import('@/pages/Info')
              }
            ]
        },
        {
          path:'/manage',
          iconClass:'fa fa-user',
          // component:()=>import('@/pages/Home')
          //异步组件
          name:'用户管理',
          component:(resolve)=>require(['@/pages/Home'],resolve),
          children:[
            {
              path:'/manage/managelist',
              iconClass:'el-icon-location',
              name:'管理列表',
              component:()=>import('@/pages/Managelist')
            },
            {
              path:'/manage/manageinfo',
              iconClass:'el-icon-location',
              name:'管理信息',
              component:()=>import('@/pages/ManageInfo')
            }
          ]
      },
      // end
      {
        path:"/msite",
        component:()=>import("@/pages/Msite/Msite"),
        meta:{
          showFooter:true
        }
      },
      {
        path:"/order",
        component:()=>import("@/pages/Order/Order"),
        meta:{
          showFooter:true
        }
      },
      {
        path:"/profile",
        component:()=>import("@/pages/Profile/Profile"),
        meta:{
          showFooter:true
        }
      },
      {
        path:"/search",
        component:()=>import("@/pages/Search/Search"),
        meta:{
          showFooter:true
        }
      },
      {
        path:"/login2",
        component:()=>import("@/pages/Login/Login")
      }
        
    ],
    mode:'hash'
})