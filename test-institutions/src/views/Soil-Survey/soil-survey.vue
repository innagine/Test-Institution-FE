<!--
 * @Description: file 土壤调查监测页面
 * @Author: IMAGINE
 * @Date: 2021-05-07 00:01:33
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-10 10:48:24
-->

<template>
  <div class="environment-protection">
    <rotation-chart :urlList="list"></rotation-chart>
    <div class="title">土壤调查监测</div>
    <div class="service-scope">
        <div class="protection-title">
          <h1>相关检测</h1>
          <span></span>
        </div>
        <service-scope></service-scope>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.environment-protection{
  .title{
    width: 200px;
    margin: 0 auto;
    position: relative;
    top:-300px;
    z-index: 1000;
    font-size: 48px;
    color: rgb(255, 255, 255);
  }
  .protection-title{
    text-align: center;
    padding: 70px 0;
    h1{
      font-size: 32px;
      font-weight: 500;
    }
    span{
      display: block;
      width: 80px;
      height: 4px;
      margin: 0 auto;
      border-radius: 2px;
      background-color: rgb(123, 214, 250);
    }
  }
}
</style>

<script>
import RotationChart from '../../components/RotationChart.vue'
import ServiceScope from './components/service-scope.vue'
export default {
  name:'soil-survey',
  components:{
    RotationChart,
    ServiceScope,
  },
  data(){
    return{
      list:[{"URl":require("./images/rocks.jpg")},],
    }
  },
}
</script>