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
            <span slot="title">机构认证</span>
          </el-menu-item>
          <el-menu-item index="3" >
            <i class="el-icon-setting"></i>
            <span slot="title">工厂认证</span>
          </el-menu-item>
          <el-menu-item index="4" >
            <i class="el-icon-pie-chart"></i>
            <span slot="title">任务进度</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <MyDemand v-if="indexlist[1].index"></MyDemand>
        <DemandChart v-if="indexlist[4].index"></DemandChart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导进页面模块
import MyDemand from '@/components/MyDemand.vue';
import DemandChart from '@/components/DemandChart.vue';

export default {
  name: "MyInfo",

  // props:['User'],
  // 声明导进页面模块
  components:{
    MyDemand,
    DemandChart,
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



  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath){
      for(let i=0; i<this.indexlist.length; i++){
        if(i==key){ this.indexlist[i].index=true; continue;}
        this.indexlist[i].index=false;
      }
        console.log(key, keyPath);
    }
  },
};
</script>

<style>
</style>