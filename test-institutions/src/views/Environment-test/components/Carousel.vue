<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-01-19 14:58:44
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-01 11:39:22
-->
<template>
  <el-carousel indicator-position="outside" height="500px">
    <el-carousel-item v-for="(item,index) in list" :key="index">
      <img :src="item.URl" class="IMG" />
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item img{
    width: 100%;
    height: 500px;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
export default {
    name:'Carousel',
    data(){
      return{
        list: [
          {"URl":require("../images/enviroment.jpg")},
      ],
      }
    }
}
</script>