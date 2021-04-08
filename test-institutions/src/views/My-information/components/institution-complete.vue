<!--
 * @Description: file 机构信息完善页面
 * @Author: IMAGINE
 * @Date: 2021-04-08 17:26:55
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-04-08 17:37:36
-->
<template>
  <div class="institution-complete">
    <div class="ICcontent">
    </div>
  </div>
</template>

<script>
// 导入axios
// import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "institution-complete",
  data() {
    return {}
  },
  computed: {
    ...mapState(["user1", "baseUrl"])
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.institution-complete {
  display: flex;
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .ICcontent {
    height: 100%;
    width: 80%;
    margin: 50px auto;
  }
}

</style>