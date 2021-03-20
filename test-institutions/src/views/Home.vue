<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#FFFFFF"
      text-color="#6fb7ff"
      active-text-color="#409EFF"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <svg t="1607850361489" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6814" width="20" height="20"><path d="M860.567968 414.342629h-63.74502v63.74502h63.74502v-63.74502z m-318.725099 0h-63.74502v63.74502h63.74502v-63.74502z m-318.7251 0H159.372749v63.74502h63.74502v-63.74502z m733.05753-95.617529V31.87251A31.858231 31.858231 0 0 0 924.29259 0h-191.214662a31.858231 31.858231 0 0 0-31.882709 31.87251V318.7251H637.450199V31.87251A31.854151 31.854151 0 0 0 605.587888 0h-191.255458a31.854151 31.854151 0 0 0-31.86231 31.87251V318.7251h-63.74502V31.87251A31.858231 31.858231 0 0 0 286.84239 0H95.627729a31.858231 31.858231 0 0 0-31.882709 31.87251V318.7251A63.824574 63.824574 0 0 0 0 382.47012V509.960159a63.824574 63.824574 0 0 0 63.74502 63.74502V892.430279a127.49004 127.49004 0 0 0 254.98008 0V573.705179h63.74502V892.430279a127.49004 127.49004 0 0 0 254.980079 0V573.705179h63.74502V892.430279a127.49004 127.49004 0 0 0 254.98008 0V573.705179A63.824574 63.824574 0 0 0 1019.920319 509.960159v-127.490039a63.824574 63.824574 0 0 0-63.74502-63.74502zM764.940239 63.74502h127.49004V127.49004H764.940239V63.74502z m0 127.49004h127.49004v127.49004H764.940239v-127.49004z m-318.7251-127.49004h127.49004V127.49004h-127.49004V63.74502z m0 127.49004h127.49004v127.49004h-127.49004v-127.49004zM127.49004 63.74502H254.98008V127.49004H127.49004V63.74502z m0 127.49004H254.98008v127.49004H127.49004v-127.49004zM254.98008 892.430279a63.74502 63.74502 0 0 1-127.49004 0V573.705179H254.98008V892.430279z m318.725099 0a63.74502 63.74502 0 0 1-127.49004 0V573.705179h127.49004V892.430279z m318.7251 0a63.74502 63.74502 0 0 1-127.49004 0V573.705179h127.49004V892.430279zM956.175299 509.960159H63.74502v-127.490039h892.430279V509.960159z" p-id="6815" fill="#1296db"></path></svg>
        环保开拓者
        </el-menu-item>
      <el-submenu index="2" v-if="showUser"
        ><template slot="title">环境监测</template>
        <el-menu-item index="2-1">环评监测</el-menu-item>
        <el-menu-item index="2-2">验收监测</el-menu-item>
        <el-menu-item index="2-3">年度监测</el-menu-item>
        <el-menu-item index="2-4">土壤调查监测</el-menu-item>
        <el-menu-item index="2-5">VOCS一企一策监测</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" v-if="showUser">环保咨询</el-menu-item>
      <el-menu-item index="4" v-if="showUser">环保工程</el-menu-item>
      <el-menu-item index="5" v-if="showUser">治理设备</el-menu-item>
      <el-menu-item index="6" v-if="showUser">危废处理</el-menu-item>
      <el-menu-item index="11" v-if="showStaff">检索机构</el-menu-item>
      <el-menu-item index="12" v-if="showStaff">需求列表</el-menu-item>
      <el-menu-item index="13" v-if="showStaff">匹配机构</el-menu-item>
      <el-menu-item index="14" v-if="showStaff">机构申请</el-menu-item>
      <el-menu-item index="15" v-if="showStaff">工厂申请</el-menu-item>
      <el-menu-item index="7" v-if="showUser" class="prevent">
        <el-input
          v-model="input"
          placeholder="请输入搜索内容"
          class="changestyle"
        ></el-input>
        <el-button size="small" type="blue" class="H-search">搜索</el-button>
      </el-menu-item>

      <el-menu-item index="8" v-if="showUser" style="float: right">
        <el-button size="small"  type="blue">发布需求</el-button>
      </el-menu-item>
      <el-menu-item index="9" style="float: right" @click="Login">
        <div v-if="!user1">请登录</div>
        <div v-if="user1">{{user1.user_name}}</div>
      </el-menu-item>
      <el-menu-item index="10" style="float: right" v-if="user1">
        <div>
          <el-avatar :src="url"></el-avatar>
        </div>
      </el-menu-item>
    </el-menu>
    <RotationChart v-if="indexlist[1].index"></RotationChart>
    <PostDemand v-if="indexlist[8].index"></PostDemand>
    <MyInfo v-if="indexlist[10].index" :User="user"></MyInfo>
    <Choose v-if="indexlist[1].index"></Choose>
    <Search v-if="indexlist[11].index"></Search>
    <Demands v-if="indexlist[12].index"></Demands>
    <InstitutionApplications v-if="indexlist[14].index"></InstitutionApplications>
    <FactoryApplications v-if="indexlist[15].index"></FactoryApplications>
    <Payment v-if="indexlist[1].index"></Payment>
    <environment-test v-if="indexlist[3].index"></environment-test>
    <treatment-equipment v-if="indexlist[5].index"></treatment-equipment>
    <waste-treatment v-if="indexlist[6].index"></waste-treatment>
    <environment-protection v-if="indexlist[4].index"></environment-protection>
    <institution-match v-if="indexlist[13].index"></institution-match>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

// 导入axios
// import axios from "axios";
import RotationChart from "@/components/RotationChart.vue"
import PostDemand from "@/components/PostDemand.vue"
import Choose from "@/components/Choose.vue"
import MyInfo from "@/views/MyInfo.vue"
import Search from "@/views/Search.vue"
import Demands from "@/views/Demands.vue"
import FactoryApplications from "@/views/Factory-application/factory-applications.vue"
import InstitutionApplications from "@/views/Institution-Application/institution-applications.vue"
import Payment from "@/components/Payment.vue"
import EnvironmentTest from '@/views/Environment-test/environment-test.vue'
import Footer from '@/components/Footer.vue'
import TreatmentEquipment from './Treatment-equipment/treatment-equipment.vue'
import WasteTreatment from './Waste-treatment/waste-treatment.vue'
import EnvironmentProtection from './Environment-protection/environment-protection.vue'
import { mapState } from 'vuex';
import InstitutionMatch from './Institution-match/institution-match.vue'

export default {
  name: "Home",
  components: {
    RotationChart,
    PostDemand,
    MyInfo,
    Choose,
    Search,
    Demands,
    InstitutionApplications,
    FactoryApplications,
    Payment,
    EnvironmentTest,
    Footer,
    TreatmentEquipment,
    WasteTreatment,
    EnvironmentProtection,
    InstitutionMatch,
  },

  created(){
    if(!this.user1) return ;
    //权限判定
    if(this.user1.user_role=='USER'){ // 普通用户
      this.showUser=true;
      this.showStaff=false;
    }else if(this.user1.user_role=='CUSTOMER_SERVICE'){ // 客服
      this.showUser=false;
      this.showStaff=true;
    }else if(this.user1.user_role=='ADMINISTRATORS'){ // 管理员
      this.showUser=false;
      this.showStaff=true;
    }else if(this.user1.user_role=='INSTITUTION'){ // 机构
      this.showUser=true;
      this.showStaff=true;
    }else if(this.user1.user_role=='FACTORY'){ // 工厂
      this.showUser=true;
      this.showStaff=true;
    }else if(this.user1.user_role=='DOUBLE'){ // 工厂和机构双重身份
      this.showUser=true;
      this.showStaff=true;
    }
    console.log(this.user1)
    //735723058@qq.com
    //@weAre19502
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
      url:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "",
      role: "",
      input: "",
      activeIndex: "",
      showUser:true,
      showStaff:false,
      user:{
        id:'12345678',
        name:'黎明',
        h_url:"",
        role:'1' //1是用户，2是管理员，3是超级管理员，4是机构，5是工厂。
      }
    };
  },

  
  methods: {

    // 注册
    Register() {
      this.$router.push({
        path: "/register",
      });
    },

    // 重新登陆
    Login() {
      if(!this.user1){
        this.$router.push({path: "/login",});
      }
      if(this.user1){
        this.indexlist[10].index=true;
      }
    },

    // 选择页面展示
    handleSelect(key, keyPath) {
      for(let i=0; i<this.indexlist.length; i++){
        if(i==key){ this.indexlist[i].index=true; continue;}
        this.indexlist[i].index=false;
      }
        console.log(key, keyPath);
      }

  },
  computed:{
    ...mapState(['user1',]),
  }
};
</script>

<style>

.header{
  /* margin-left: 20px; */
  display: flex;
  align-items: center; /*定义body的元素垂直居中*/
  justify-content: center; 
}
.icon1{
  margin-left: 20px;
  margin-right: 20px;
}
.title{
  color:#1296db;
}



/* 防止搜索框点击之后背景变黑 */
.prevent:hover {
  background-color: #fff !important;
}

/* 调节导航栏字体大小 */
.el-menu-item,
.el-submenu__title,
.template {
  font-size: 16px !important;
}

/* 设置按钮颜色 */
.el-button--blue {
  background-color: #409eff !important;
  color: white !important;
}

.H-search{
margin-left: 10px !important;
}
</style>
