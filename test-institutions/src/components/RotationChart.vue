<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2020-12-07 15:58:15
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-03 19:38:47
-->
<template>
  <el-carousel :interval="5000" arrow="always" height="500px">
    <el-carousel-item v-for="(item,index) in list" :key="index">
      <img :src="item.URl" class="IMG" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "RotationChart",
  props: ['urlList'],
  data() {
    return {
      list: [
          {"URl":require("../assets/institution4.jpg")},
          {"URl":require("../assets/institution5.jpg")},
          {"URl":require("../assets/institution6.jpg")},
      ],
    };
  },
  mounted(){
    if(this.urlList){
      this.list=this.urlList;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

.el-carousel__item:nth-child(2n) {
  background-color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff
}

</style>
