<template>
 <div>
   <footer class="footer-guide">
      <a href="#" class="guide-item" >
        
        <router-link to="msite" active-class="active2">外卖</router-link>
      </a>
      <a href="#" class="guide-item" >
        <router-link to="search" active-class="active2">搜索</router-link>
      </a>
      <a href="#" class="guide-item" >
        <router-link to="order" active-class="active2">订单</router-link>
      </a>
      <a href="#" class="guide-item" >
        <router-link to="profile" active-class="active2">我的</router-link>
      </a>
   </footer>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   mounted() {
    window.v = this
   },
   methods: {

   },
 }
</script>

<style scoped lang="less">
// @import "../../assets/css/mixins.less";
.footer-guide{
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .guide-item{
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: center;
    .active2{
      
      color: green;
  }
  }
  
}
</style>