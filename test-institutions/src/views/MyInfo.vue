<template>
  <div class="myInfo">
    <el-row>
      <el-col :span="3">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1" >
            <i class="el-icon-menu"></i>
            <span slot="title">需求列表</span>
          </el-menu-item>
          <el-menu-item index="2" >
            <i class="el-icon-document"></i>
            <span slot="title">我的任务</span>
          </el-menu-item>
          <el-menu-item index="3" >
            <i class="el-icon-setting"></i>
            <span slot="title">我的信息</span>
          </el-menu-item>
          <el-menu-item index="4" >
            <i class="el-icon-pie-chart"></i>
            <span slot="title">任务进度</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <MyDemand></MyDemand>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导进页面模块
import MyDemand from '@/components/MyDemand.vue';

export default {
  name: "MyInfo",

  // props:['User'],
  // 声明导进页面模块
  components:{
    MyDemand,
  },
  
  data() {
    return {
      // 按钮显示
      indexlist: [
        { index: true },
        { index: true },
        { index: false },
        { index: false },
        { index: false },
      ],
    };
  },


  // created() {
  //   console.log("1287313817313+++++++"+this.User.userId)
  // },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath){
      console.log(key, keyPath);
    }
  },
};
</script>

<style>
</style>