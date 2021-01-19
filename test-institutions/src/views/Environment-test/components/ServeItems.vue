<template>
  <div class="serve-items-box">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="水" name="1">1</el-tab-pane>
      <el-tab-pane label="土" name="2">2</el-tab-pane>
      <el-tab-pane label="气体" name="3">3</el-tab-pane>
      <el-tab-pane label="肥料" name="4">4</el-tab-pane>
      <el-tab-pane label="植物" name="5">5</el-tab-pane>
      <el-tab-pane label="食品" name="6">6</el-tab-pane>
      <el-tab-pane label="高端项目" name="7">7</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
.serve-items-box{
    width: 80%;
    margin: 0 auto;
    
}

/* 转换选项字体大小 */
.el-tabs__item{
    font-size: 20px;
}
</style>

<script>
  export default {
      name:'ServeItems',
    data() {
      return {
        activeName: '1'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>