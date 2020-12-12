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
      <el-menu-item index="1">环保开拓者</el-menu-item>
      <el-submenu index="2"
        ><template slot="title">环境监测</template>
        <el-menu-item index="2-1">环评监测</el-menu-item>
        <el-menu-item index="2-2">验收监测</el-menu-item>
        <el-menu-item index="2-3">年度监测</el-menu-item>
        <el-menu-item index="2-4">土壤调查监测</el-menu-item>
        <el-menu-item index="2-5">VOCS一企一策监测</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">环保咨询</el-menu-item>
      <el-menu-item index="4">环保工程</el-menu-item>
      <el-menu-item index="5">治理设备</el-menu-item>
      <el-menu-item index="6">危废处理</el-menu-item>
      <el-menu-item index="7" class="prevent">
        <el-input
          v-model="input"
          placeholder="请输入搜索内容"
          class="changestyle"
        ></el-input>
        <el-button size="small" type="blue">搜索</el-button>
      </el-menu-item>

      <el-menu-item index="8" style="float: right">
        <el-button size="small" @click="PostDemand" type="blue">发布需求</el-button>
      </el-menu-item>
      <el-menu-item index="9" style="float: right" @click="Login">imagine</el-menu-item>
      <el-menu-item index="10" style="float: right">
        <div>
          <el-avatar :src="url"></el-avatar>
        </div>
      </el-menu-item>
    </el-menu>
    <RotationChart v-if="indexlist[1].index"></RotationChart>
    <PostDemand v-if="indexlist[8].index"></PostDemand>
    <MyInfo v-if="indexlist[10].index"></MyInfo>
  </div>
</template>

<script>
// @ is an alias to /src

// 导入axios
// import axios from "axios";
import RotationChart from "@/components/RotationChart.vue"
import PostDemand from "@/components/PostDemand.vue"
import MyInfo from "@/views/MyInfo.vue"

export default {
  name: "Home",
  components: {
    RotationChart,
    PostDemand,
    MyInfo
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
      ],
      url:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      name: "",
      role: "",
      input: "",
      activeIndex: "",
      show: true,
      showPD: false,

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
      this.$router.push({
        path: "/login",
      });
    },

    //发布需求
    PostDemand(){
      this.showPD=true;
      this.show=false;
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
};
</script>

<style>
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

/* 搜索框长度长度变换 */
.changestyle {
  padding-right: 10px;
  transition: all 0.5s;
}

.el-button--blue {
  background-color: #409eff !important;
  color: white !important;
}
</style>
