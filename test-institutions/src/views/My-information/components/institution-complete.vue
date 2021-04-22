<!--
 * @Description: file 机构信息完善页面
 * @Author: IMAGINE
 * @Date: 2021-04-08 17:26:55
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-04-22 10:43:20
-->
<template>
  <div class="institution-complete">
    <div class="ICcontent">
      <div class="institution-information">
        1.添加/修改机构资料
        <div class="institution-avatar">
          <el-avatar :src="avartorUrl"></el-avatar>
        </div>
        <div class="institution-picture">
          机构图片
          <el-image>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <el-image>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <el-image>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <div class="institution-name">机构名称</div>
        <div class="institution-region">所属地区</div>
        <div class="institution-address">机构地址</div>
        <div class="institution-contacts">机构联系人</div>
        <div class="institution-email">机构邮箱</div>
        <div class="institution-info">机构简介</div>
      </div>
      <div class="append-test-item">2.添加检测项目</div>
      <div class="test-item-list">3.检测项目列表（可修改）</div>
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
    return {
      avartorUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    };
  },
  computed: {
    ...mapState(["user1", "baseUrl"])
  },
  methods: {}
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