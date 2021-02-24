<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2020-12-07 15:58:15
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-02-24 14:32:01
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
  props: {
    msg: String,
  },
  data() {
    return {
      list: [
          {"URl":require("../assets/institution4.jpg")},
          {"URl":require("../assets/institution5.jpg")},
          {"URl":require("../assets/institution6.jpg")},
          {"URl":require("../assets/institution5.jpg")},
      ],
    };
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
