<template>
 <div class="map-view">
  <div id="main"></div>
 </div>
</template>

<script>
import {chinaJson} from "@/assets/js/mapData"
 export default {
   data () {
     return {

     }
   },
   mounted() {
      let myChart = this.$echarts.init(document.getElementById('main'))
      this.$echarts.registerMap('china',chinaJson)
      let option = {
        backgroundColor:'orange',
        geo:{
          map:"china",
          aspectScale:0.75,
          zoom:1.1,
          regions:[{
            name:'南海诸岛'
          }]
        },
        series:[
          {
            type:'map',
            zoom:1.1,
            map:'china'
          }
        ]
      }

      myChart.setOption(option)
   },
   methods: {

   },
 }
</script>

<style scoped lang="less">
.map-view{
  width: 100%;
  #main{
    width: 100%;
    height: 500px;
  }
}
</style>