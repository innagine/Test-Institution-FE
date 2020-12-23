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
          <el-menu-item index="1" v-if="showUser">
            <i class="el-icon-menu"></i>
            <span slot="title">需求列表</span>
          </el-menu-item>
          <el-menu-item index="2" v-if="showUser">
            <i class="el-icon-document"></i>
            <span slot="title">机构认证</span>
          </el-menu-item>
          <el-menu-item index="3" v-if="showUser">
            <i class="el-icon-setting"></i>
            <span slot="title">工厂认证</span>
          </el-menu-item>
          <el-menu-item index="4" v-if="showUser">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">任务进度</span>
          </el-menu-item>
          <el-menu-item index="5" v-if="showInstitution">
            <i class="el-icon-menu"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="6" v-if="showInstitution">
            <i class="el-icon-document"></i>
            <span slot="title">资质完善</span>
          </el-menu-item>
          <el-menu-item index="7" v-if="showStaff">
            <i class="el-icon-menu"></i>
            <span slot="title">任务列表</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <MyDemand v-if="indexlist[1].index"></MyDemand>
        <DemandChart v-if="indexlist[4].index"></DemandChart>
        <RFactory v-if="indexlist[3].index"></RFactory>
        <RInstitution v-if="indexlist[2].index"></RInstitution>
        <MyCheckList v-if="indexlist[7].index"></MyCheckList>
        <Myorder v-if="indexlist[5].index"></Myorder>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 导进页面模块
import MyDemand from '@/components/MyDemand.vue';
import DemandChart from '@/components/DemandChart.vue';
import RFactory from '@/components/RFactory.vue';
import RInstitution from '@/components/RInstitution.vue';
import MyCheckList from '@/components/MyCheckList.vue';
import Myorder from '@/components/Myorder.vue';

export default {
  props:['User'],
  name: "MyInfo",

  // props:['User'],
  // 声明导进页面模块
  components:{
    MyDemand,
    DemandChart,
    RFactory,
    RInstitution,
    MyCheckList,
    Myorder
  },


  created(){
    //权限判定
    if(this.User.role==1){
      this.showUser=true;
    }else if(this.User.role==2){
      this.showStaff=true;
    }else if(this.User.role==3){
      this.showStaff=true;
    }else if(this.User.role==4){
      this.showInstitution=true;
    }

  },
  
  data() {
    return {
      // 按钮显示
      indexlist: [
        { index: true },
        { index: false },
        { index: false },
        { index: false },
        { index: false },
        { index: false },
        { index: false },
        { index: true },
      ],
      showUser:false,
      showStaff:false,
      showInstitution:false,
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
        console.log(this.User)
    }
  },
};
</script>

<style>
</style>