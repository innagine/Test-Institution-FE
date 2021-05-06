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
        <div class="institution-avatar">
          <el-avatar :src="avartorUrl"></el-avatar>
          <div class="user-information">
            <div class="name">{{user1.user_name}}</div>
            <div class="role">{{user1.user_role}}</div>
          </div>
        </div>
        <div class="picture-title">机构图片</div>
        <div class="institution-picture">
          <el-image>
            <div slot="error">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <el-image>
            <div slot="error">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
          <el-image>
            <div slot="error">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <div class="base-information" v-if="!changeBaseInfo" @click="changeBaseInformation">
          <div class="institution-name flex-box">
            <div class="lable">机构名称</div>
            <div class="name">{{institutionInfo.institution_name}}</div>
          </div>
          <div class="institution-region flex-box">
            <div class="lable">所属地区</div>
            <div class="name">{{institutionInfo.institution_region}}</div>
          </div>
          <div class="institution-address flex-box">
            <div class="lable">机构地址</div>
            <div class="name">{{institutionInfo.institution_address}}</div>
          </div>
          <div class="institution-contacts flex-box">
            <div class="lable">联系方式</div>
            <div class="name">{{institutionInfo.contacts_tel}}</div>
          </div>
          <div class="institution-email flex-box">
            <div class="lable">机构邮箱</div>
            <div class="name">{{institutionInfo.institution_email}}</div>
          </div>
          <div class="institution-info flex-box">
            <div class="lable">机构简介</div>
            <div class="name">{{institutionInfo.institution_info}}</div>
          </div>
        </div>
        <div class="change-base-information" v-if="changeBaseInfo">
           <el-form ref="institutionForm" :model="institutionForm" label-width="80px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="机构名称">
                  <el-input v-model="institutionForm.institution_name"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="所属地区">
                  <el-input v-model="institutionForm.institution_region"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="机构地址">
                  <el-input v-model="institutionForm.institution_address"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="联系方式">
                  <el-input v-model="institutionForm.contacts_tel"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="机构邮箱">
                  <el-input v-model="institutionForm.institution_email"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="机构简介">
                  <el-input v-model="institutionForm.institution_info"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item >
                  <el-button @click="onSubmit">保存</el-button>
                  <el-button @click="changeBaseInformation">取消</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
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
                <el-form-item label="使用仪器">
                  <el-input v-model="itemForm.equipment"></el-input>
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
                <el-form-item >
                  <el-button @click="submitItem">立即创建</el-button>
                  <el-button @click="reset(1)">数据重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="test-item-list">
          <h3>检测项目列表</h3>
          <test-item-list></test-item-list>
        </div>
      </div>
      <div class="equipment-information">
        <div class="append-test-equipment">
          <h3>检测仪器添加</h3>
          <el-form ref="equipmentForm" :model="equipmentForm" label-width="80px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="设备名称">
                  <el-input v-model="equipmentForm.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="设备状态">
                  <el-input v-model="equipmentForm.state"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
              <el-row>
              <el-col :span="12">
                <el-form-item label="设备价值">
                  <el-input v-model="equipmentForm.price"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item >
                  <el-button @click="onSubmit">立即创建</el-button>
                  <el-button @click="reset(2)">数据重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="test-equipemnt-list">
          <h3>检测设备列表</h3>
          <test-equipment-list></test-equipment-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations, mapState } from "vuex";
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
      avartorUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      itemForm:{
        item_name:null,
        price:null,
        equipment:null,
        discount:null,
      },
      equipmentForm:{
        name:'',
        price:'',
        state:'',
      },
      institutionForm:{
        institution_name:'',
        institution_address:'',
        institution_region:'',
        contacts_tel:'',
        institution_email:'',
        institution_info:'',
      },
      changeBaseInfo:false,
      institutionInformation:null,
    };
  },
  computed: {
    ...mapState(["user1", "baseUrl","institutionInfo"])
  },
  methods: {
    ...mapMutations(["SET_INSTITUTION_INFO"]),

    // 提交修改信息函数
    onSubmit() {
        this.requestSend('institution/update',this.institutionForm);
        this.changeBaseInformation();
    },

    // 修改信息页面展示控制函数
    changeBaseInformation() {
      this.changeBaseInfo = !this.changeBaseInfo;
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
          console.log("完善资质页面请求发送成功", res);
          this.natificationControl(res.data.msg,'success')
        })
        .catch(err => {
          console.log("完善资质页面请求发送失败", err);
          this.natificationControl('修改失败','warning')
        });
    },

    // 页面生成请求发起调用函数
    requestFirstSend(sendUrl, sendData) {
      axios({
        method: "post",
        url: this.baseUrl + sendUrl,
        headers: { token: this.user1.token },
        data: sendData
      })
        .then(res => {
          this.institutionInformation = res.data.data1[0];
          this.SET_INSTITUTION_INFO(this.institutionInformation);
          this.institutionForm = this.institutionInformation;
          console.log('this.institutionInformation',this.institutionInformation);
          console.log('institutionInfo',this.institutionInfo);
        })
        .catch(err => {
          console.log('加载页面信息失败',err)
          this.natificationControl('加载页面信息失败','warning')
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
    reset(index){
      if(index === 1) {
        this.itemForm.item_name = null;
        this.itemForm.price = null;
        this.itemForm.equipment = null;
        this.itemForm.discount = null;
      }
      else if(index === 2) {
        this.equipmentForm.name = null;
        this.equipmentForm.price = null;
        this.equipmentForm.state = null;
      }
    },

    // 提交添加项目函数
    submitItem(){
      this.requestSend('iitem/add',this.itemForm);
    },

    // 提交添加检测仪器函数
    submitEquipment(){
      this.requestSend('institution/update',this.itemForm);
    }
  },
  created(){
    this.requestFirstSend('search/institution',{});
  }
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
  h3{
    margin-bottom: 30px;
  }
  .ICcontent {
    height: 100%;
    width: 80%;
    margin: 20px auto;
    .institution-information{
      margin-bottom: 50px;
      .institution-avatar{
        display: flex;
        align-items: center ;
        margin: 20px;
        padding-bottom: 20px;
        .el-avatar{
          height: 92px;
          width: 92px;
        }
        .user-information{
          margin-left: 30px;
          .name{
            font-size: 30px;
          }
          .role{
            font-size: 24px;
            color: rgb(116, 113, 113);
          }
        }
      }
      .picture-title{
        margin-left: 20px;
      }
      .institution-picture{
        margin: 20px;
        display:flex;
        .el-image{
          width: 300px;
          height: 200px;
          display: flex ;
          justify-content: center ;
          align-items: center ;
          background: #f5f7fa ;
          margin: 5px;
          i{
            font-size: 30px;
          }
        }
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
      .change-base-information{
        margin-top: 30px;
      }
    }
    .item-information{
      margin-bottom: 50px;
      padding-top: 40px;
      border-top: 10px solid rgb(243, 242, 242);
      .append-test-item{
        margin-bottom: 40px;
        .el-input__inner{
          margin-top: 10px;
        }
      }
      .test-item-list{
      }
    }
    .equipment-information{
      margin-bottom: 50px;
      padding-top: 40px;
      border-top: 10px solid rgb(243, 242, 242);
      
    }
  }
}
</style>