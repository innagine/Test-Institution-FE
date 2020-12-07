<template>
  <el-carousel :interval="5000" arrow="always" height="600px">
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
          {"URl":require("../assets/ISSUE2.jpg")},
          {"URl":require("../assets/ISSUE3.jpg")},
          {"URl":require("../assets/ISSUE2.jpg")},
          {"URl":require("../assets/ISSUE1.png")},
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  height: 880px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff
}
.IMG{
  display: block;
  margin: 0 auto;
  max-height: 100%;
    width: auto;
}
</style>
