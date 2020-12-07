<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#FFFFFF"
      text-color="#6fb7ff"
      active-text-color="#409EFF"
      @select="selectMenu"
    >
      <el-menu-item index="1" @click="Show">环保开拓者</el-menu-item>
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
      <el-menu-item index="9" class="prevent">
        <el-input
          v-model="input"
          placeholder="请输入搜索内容"
          class="changestyle"
        ></el-input>
        <el-button size="small">搜索</el-button>
      </el-menu-item>

      <el-menu-item index="10" style="float: right">
        <el-button size="small" @click="PostDemand">发布需求</el-button>
      </el-menu-item>
      <el-menu-item index="11" style="float: right">imagine</el-menu-item>
      <el-menu-item index="12" style="float: right">
        <div>
          <el-avatar :src="url"></el-avatar>
        </div>
      </el-menu-item>
    </el-menu>
    <RotationChart v-if="show"></RotationChart>
    <PostDemand v-if="showPD"></PostDemand>
  </div>
</template>

<script>
// @ is an alias to /src

// 导入axios
// import axios from "axios";
import RotationChart from "@/components/RotationChart.vue"
import PostDemand from "@/components/PostDemand.vue"

export default {
  name: "Home",
  components: {
    RotationChart,
    PostDemand
  },
  data() {
    return {
      // 按钮显示
      indexlisyt: [
        { index: false },
        { index: false },
        { index: false },
        { index: false },
      ],

      list: [],
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

    //展示首页
    Show(){
      this.showPD=false;
      this.show=true;
    },

    // 注册
    Register() {
      this.$router.push({
        path: "/register",
      });
    },

    // 重新登陆
    Login() {
      this.$router.push({
        path: "/",
      });
    },

    //发布需求
    PostDemand(){
      this.showPD=true;
      this.show=false;
    },

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

.el-button {
  background-color: #409eff !important;
  color: white !important;
}
</style>
