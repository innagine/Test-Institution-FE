<!--
 * @Description: file 治理设备
 * @Author: IMAGINE
 * @Date: 2021-02-24 14:18:47
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-03 19:27:02
-->
<template>
  <div class="treatment-equipment">
    <rotation-chart :urlList="list"></rotation-chart>
    <div class="t-select">
        <div class="t-option">废气治理设备</div>
        <div class="t-option">废水处理设备</div>
        <div class="t-option">粉尘治理设备</div>
    </div>
    <router-view></router-view>
    <div class="post-demand">
      <div class="text">如果找不到仪器，您可以发布您的需求，由我们来帮您挑选最优的服务商</div>
      <div class="button">发布需求</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

/* 选择展示内容的样式 */
.t-select {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  /* box-shadow: h-shadow v-shadow blur spread color inset; */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  color: #409eff;
  font-weight: 400;
  .t-option {
    margin: 40px 40px;
    cursor: pointer;
  }
  .t-option:hover {
    color: #76b9fc;
  }
}

/* 发布需求模块的样式 */
.post-demand{
  width: 70%;
  margin: 20px auto;
  padding: 0 20px;
  border: 2px solid #16befc;
  display: flex;
  align-items: center;
  .text{
    flex: 6;
    font-size: 18px;
    color: rgb(170, 170, 170);
  }
  .button{
    flex: 1;
    margin: 20px auto;
    padding: 10px 0;
    text-align: center;
    width: 100%;
    background-image: linear-gradient(to right, #51a4db, #a8e4fa);
    color: #fff;
  }
  .button:hover {
  background: #a8e4fa;
  }
}
</style>

<script>
import RotationChart from '../../components/RotationChart.vue';
export default {
  name:'treatment-equipment',
  components:{
    RotationChart,
  },
    data(){
    return{
      list:[{"URl":require("./images/machine.png")},],
    }
  },
  created(){
    this.$router.push('/equipments');
  },
}
</script>