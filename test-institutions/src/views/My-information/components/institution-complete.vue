<!--
 * @Description: file 机构信息完善页面
 * @Author: IMAGINE
 * @Date: 2021-04-08 17:26:55
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-04-23 14:32:06
-->
<template>
  <div class="institution-complete">
    <div class="ICcontent">
      <div class="institution-information ">
        <h3>基本消息</h3>
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
        <div class="institution-name flex-box">
          <div class="lable">机构名称</div>
          <div class="name">Xmind</div>
        </div>
        <div class="institution-region flex-box">
          <div class="lable">所属地区</div>
          <div class="name">Xmind</div>
        </div>
        <div class="institution-address flex-box">
          <div class="lable">机构地址</div>
          <div class="name">Xmind</div>
        </div>
        <div class="institution-contacts flex-box">
          <div class="lable">联系方式</div>
          <div class="name">Xmind</div>
        </div>
        <div class="institution-email flex-box">
          <div class="lable">机构邮箱</div>
          <div class="name">Xmind</div>
        </div>
        <div class="institution-info flex-box">
          <div class="lable">机构简介</div>
          <div class="name">Xmind</div>
        </div>
      </div>
      <div class="item-information">
        <h3>检测项目</h3>
        <div class="append-test-item">2.添加检测项目</div>
        <div class="test-item-list">3.检测项目列表（可修改）
          <test-item-list></test-item-list>
        </div>
      </div>
      <div class="equipment-information">
        <h3>检测仪器</h3>
        <div class="append-test-equipment">4.添加项目仪器</div>
        <div class="test-equipemnt-list">5.检测设备列表
          <test-equipment-list></test-equipment-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入axios
// import axios from "axios";
import { mapState } from "vuex";
import TestEquipmentList from './test-equipment-list.vue';
import TestItemList from './test-item-list.vue';
export default {
  name: "institution-complete",
  components:{
    TestItemList,
    TestEquipmentList,
  },
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
    margin: 20px auto;
    .institution-information{
      margin-bottom: 50px;
      .institution-avatar{
        margin: 20px;
      }
      .institution-picture{
        margin: 20px;
      }
      .flex-box{
        display: flex;
        align-items:center;
        .lable{
          margin: 20px;
          margin-right: 100px;
        }
        .name{
          color: rgb(153, 153, 153);
        }
      }
    }
    .item-information{
      margin-bottom: 50px;
    }
    .equipemnt-information{
      margin-bottom: 50px;
    }
  }
}
</style>