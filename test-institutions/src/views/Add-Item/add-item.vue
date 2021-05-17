<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-05-11 14:10:34
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-12 12:56:43
-->

<template>
  <div class="add-item">
    <div class="add-item-box">
      <div class="item-information">
        <div class="append-test-item">
          <h3>检测项目添加</h3>
          <el-form ref="itemForm" :model="itemForm" label-width="80px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="项目名称">
                  <el-input v-model="itemForm.item_name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="检测费用">
                  <el-input v-model="itemForm.price"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="检测对象">
                  <el-input v-model="itemForm.item_target"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="优惠折扣">
                  <el-input v-model="itemForm.discount"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="检测备注">
                  <el-input v-model="itemForm.item_remarks"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="项目分类">
                  <el-select v-model="itemForm.category" placeholder="请选择">
                    <el-option label="环评服务" value="1"></el-option>
                    <el-option label="检测服务" value="2"></el-option>
                    <el-option label="设备服务" value="3"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item >
                  <el-button @click="submitItem">立即创建</el-button>
                  <el-button @click="reset()">数据重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="test-item-list">
          <h3>检测项目列表</h3>
          <el-tabs type="card" @tab-click="handleClick" v-model="activeName">
            <el-tab-pane label="待上架" name="first"><test-item-list v-if="showFirst"></test-item-list></el-tab-pane>
            <el-tab-pane label="已上架" name="second"><item-list-up v-if="showSecond"></item-list-up></el-tab-pane>
            <el-tab-pane label="已下架" name="third"><item-list-delete v-if="showThird"></item-list-delete></el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-item{
  display: flex;
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .add-item-box{
    height: 100%;
    width: 80%;
    margin: 50px auto;
    .item-information{
      margin-bottom: 50px;
      .append-test-item{
        margin-bottom: 40px;
        h3{
          margin-bottom: 30px;
        }
        .el-input__inner{
          margin-top: 10px;
        }
      }
      .test-item-list{
        .el-tabs__item{
          font-size: 14px !important;
        }
      }
    }
  }
}
</style>

<script>
import axios from "axios";
import { mapState } from "vuex";
import TestItemList from './components/test-item-list.vue';
import ItemListUp from './components/item-list-up.vue';
import ItemListDelete from './components/item-list-delete.vue';
export default {
  name:'add-item',
  components:{
    TestItemList,
    ItemListUp,
    ItemListDelete,
  },
  data(){
    return{
      activeName: 'first',
      showFirst:true,
      showSecond:false,
      showThird:false,
      itemForm:{
        item_name:null,
        price:null,
        category:null,
        discount:null,
        item_target:null,
        item_remarks:null,
      },
    }
  },
  computed: {
    ...mapState(["user1", "baseUrl","institutionInfo"])
  },
  methods:{
    // 切换tabs触发函数
    handleClick() {
        // console.log(tab, event);
      console.log('AAAAAAA',this.activeName);

      if (this.activeName == 'second') {
        this.showSecond = false;
        this.$nextTick(() => {
          this.showSecond = true;
        });
      } else if(this.activeName == 'third') {
        this.showThird = false;
        this.$nextTick(() => {
          this.showThird = true;
        });
      }
      else {
        this.showFirst = false;
        this.$nextTick(() => {
          this.showFirst = true;
        });
      }
    },

    // 请求发起调用函数
    requestSend(sendUrl, sendData) {
      axios({
        method: "post",
        url: this.baseUrl + sendUrl,
        headers: { token: this.user1.token },
        data: sendData
      })
        .then(res => {
          console.log("项目管理页面请求发送成功", res);
          this.natificationControl(res.data.msg,'success')
        })
        .catch(err => {
          console.log("项目管理页面请求发送失败", err);
          this.natificationControl('修改失败','warning')
        });
    },

    // 弹窗控制函数
    natificationControl(myMessage,myType){
        this.$notify({
           title: "通知",
           message: myMessage,
           type: myType,
        });
    },

    // 重置表单信息函数
    reset(){
      this.itemForm.item_name = null;
      this.itemForm.price = null;
      this.itemForm.category = null;
      this.itemForm.discount = null;
      this.itemForm.item_target =null;
      this.itemForm.item_remarks = null;
    },

    // 提交添加项目函数
    submitItem(){
      this.requestSend('item/add',this.itemForm);
    },
  },
  created(){
    // if (this.activeName == 'first') {
    //   this.$nextTick(() => {
    //     this.showFirst = true;
    //   });
    // }
  }
}
</script>