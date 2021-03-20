<!--
 * @Description: file 工厂申请页面
 * @Author: IMAGINE
 * @Date: 2021-03-19 23:33:36
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-20 15:12:00
-->
<template>
  <div class="institution-applications">
    <el-row>
      <el-col :span="3">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">机构申请</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">通过列表</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">退回列表</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.institution-applications{
  height: 750px;
}
</style>

<script>
import { mapState } from 'vuex';
export default {
  name:'institution-applications',
  computed:{
    ...mapState(['user1','baseUrl',]),
  },
  data(){
    return{

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath){
        if(key=='1'){this.$router.push('/institution-check'); }// 通过push进行跳转
        else if(key=='2'){this.$router.push('/institution-pass');} // 通过push进行跳转
        else if(key=='3'){this.$router.push('/institution-fail'); }// 通过push进行跳转
        console.log(key, keyPath);
    }
  },
  created(){
    this.$router.push('/institution-check');
  }
}
</script>