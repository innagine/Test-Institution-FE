<!--
 * @Description: file 环境工程页面
 * @Author: IMAGINE
 * @Date: 2021-02-26 16:33:38
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-03 18:00:16
-->
<template>
  <div class="environment-protection">
    <rotation-chart :urlList="list"></rotation-chart>
    <div class="service-scope">
        <div class="protection-title">
          <h1>业务范围</h1>
          <span></span>
        </div>
        <service-scope></service-scope>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.environment-protection{
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
  name:'environment-protection',
  components:{
    RotationChart,
    ServiceScope,
  },
  data(){
    return{
      list:[{"URl":require("./images/factory.png")},],
    }
  },
}
</script>