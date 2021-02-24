<!--
 * @Description: file 危废处理服务内容
 * @Author: IMAGINE
 * @Date: 2021-02-24 17:46:26
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-02-24 18:25:17
-->
<template>
  <div class="service-content">
    <div class="service-item">
      <div class="left">
        <div class="service-title"></div>
        <div class="service-explain"></div>
      </div>
      <div class="right">
        <div class="service-label"></div>
        <div class="handle-content"></div>
        <div class="service-advantages">
          <div class="advantage"></div>
        </div>
        <div class="button"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-content{
  width: 80%;
  margin: 0 auto;
  .service-item{
    margin-bottom: 30px;
    display: flex;
    height: 250px;
    .left{
      flex:1;
      background-color: pink;
    }
    .right{
      flex: 3;
      background-color: yellow;
    }
    .right:hover{
      box-shadow: 2px 1px 6px 2px rgb(214, 214, 214);
    }
  }
}
</style>

<script>
export default {
  name:'service-content',
  data(){
    return {

    }
  },
}
</script>