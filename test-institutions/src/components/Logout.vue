<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-03-04 12:50:57
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-04 14:31:34
-->
<template>
  <div class="logout">
    <el-button @click="logout">退出登陆</el-button>
  </div>
</template>


<script>
// 导入axios
import axios from "axios";
import { mapMutations } from 'vuex';
export default {
  name: "DemandChart",
//   props: ["User"],

  data() {
    return {
    }
  },
  methods: {
    ...mapMutations(['LOGIN',]),
    logout(){
      axios({
        method: "post",
        url: "http://26.140.221.230:8556/logout",
      }).then((res)=>{
        console.log("注销成功res...", res); 
      }).catch((err)=>{
        console.log("注销失败error...", err); 
      })
      this.LOGIN({});
      // 转跳到主页
      this.$router.push({path: "/login",});
    }
  },
  mounted() {},
};
</script>

<style>
.logout {
  display: flex;
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>