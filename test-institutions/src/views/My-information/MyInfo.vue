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
          <el-menu-item index="8" v-if="showUser">
            <i class="el-icon-help"></i>
            <span slot="title">我的订单</span>
          </el-menu-item>
          <el-menu-item index="9" v-if="showInstitution">
            <i class="el-icon-help"></i>
            <span slot="title">客户需求</span>
          </el-menu-item>
          <el-menu-item index="10">
            <i class="el-icon-help"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="11">
            <i class="el-icon-help"></i>
            <span slot="title">退出登陆</span>
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
        <user-base-info v-if="indexlist[10].index"></user-base-info>
        <Logout v-if="indexlist[11].index"></Logout>
        <customer-demand v-if="indexlist[9].index"></customer-demand>
        <institution-complete v-if="indexlist[6].index"></institution-complete>
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
import { mapState } from 'vuex';
import Logout from '@/components/Logout.vue';
import CustomerDemand from '@/views/Customer-Demand/customer-demand.vue';
import InstitutionComplete from './components/institution-complete.vue';
import UserBaseInfo from './components/user-base-info.vue';

export default {
  name: "MyInfo",

  // 声明导进页面模块
  components:{
    MyDemand,
    DemandChart,
    RFactory,
    RInstitution,
    MyCheckList,
    Myorder,
    Logout,
    CustomerDemand,
    InstitutionComplete,
    UserBaseInfo,
  },
  computed:{
    ...mapState(['user1',]),
  },
 
  created(){
    //权限判定
    if(this.user1.user_role=='USER'){ // 普通用户
      this.showUser=true;
      this.indexlist[1].index = true;
    }else if(this.user1.user_role=='CUSTOMER_SERVICE'){ // 客服
      this.showStaff=true;
      this.indexlist[7].index = true;
    }else if(this.user1.user_role=='ADMINISTRATORS'){ // 管理员
      this.showStaff=true;
    }else if(this.user1.user_role=='INSTITUTION'){ // 机构
      this.showInstitution=true;
      this.indexlist[5].index = true;
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
        { index: false },
        { index: false },
        { index: false },
        { index: false },
        { index: false },
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

<style lang="scss" scoped>
.myInfo{
  margin-bottom: 150px;
  min-height: 700px;
}
</style>