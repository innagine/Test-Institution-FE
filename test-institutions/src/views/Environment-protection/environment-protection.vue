<!--
 * @Description: file 环境工程页面
 * @Author: IMAGINE
 * @Date: 2021-02-26 16:33:38
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-02-26 16:45:15
-->
<template>
  <div class="environment-protection">
    <rotation-chart></rotation-chart>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import RotationChart from '../../components/RotationChart.vue'
export default {
  name:'environment-protection',
  components:{
    RotationChart,
  },
}
</script>