<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-02-24 17:00:17
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-02-24 17:07:56
-->
<template>
  <div class="waste-treatment">
    <rotation-chart></rotation-chart>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import RotationChart from '../../components/RotationChart.vue'
export default {
  name:'waste-treatment',
  components:{
    RotationChart,
  },
  data(){
    return{

    }
  },
}
</script>