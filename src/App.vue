<template>
  <div id="app">
    <router-view></router-view>
    <FootGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import FootGuide from '@/components/FootGuide/FootGuide'

export default {
  name: 'App',
  components: {
    Home,
    FootGuide
  }
}
</script>

<style lang="less">
#app{
  width:100%;
  height: 100%;
  background-color: #f5f5f5;
}


</style>
