<template>
  <div class="user-base-info">
    <div class="user-content">
      <div class="user-avatar">
        <el-avatar :src="user1.user_faces ? user1.user_faces : avartorUrl"></el-avatar>
        <div class="user-information">
          <div class="name">{{form.user_name ? form.user_name : user1.user_name}}</div>
          <div class="role">{{user1.user_role}}</div>
        </div>
      </div>
      <div
        class="base-information"
        v-if="!changeBaseInfo"
        @click="changeBaseInformation"
      >
        <div class="user-name flex-box">
          <div class="lable">用户昵称</div>
          <div class="name">{{ form.user_name ? form.user_name : user1.user_name }}</div>
        </div>
        <div class="user-region flex-box">
          <div class="lable">所在地区</div>
          <div class="name">{{ form.region ? form.region : user1.region }}</div>
        </div>
        <div class="user-address flex-box">
          <div class="lable">用户地址</div>
          <div class="name">{{ form.user_address ? form.user_address : user1.user_address }}</div>
        </div>
        <div class="user-contacts flex-box">
          <div class="lable">联系方式</div>
          <div class="name">{{ form.user_tel ? form.user_tel : user1.user_tel }}</div>
        </div>
        <div class="user-email flex-box">
          <div class="lable">用户邮箱</div>
          <div class="name">{{ form.user_email ? form.user_email : user1.user_email }}</div>
        </div>
        <div class="user-info flex-box">
          <div class="lable">个人简介</div>
          <div class="name">{{ form.introduce ? form.introduce : user1.introduce }}</div>
        </div>
      </div>
      <div
        class="change-base-information"
        v-if="changeBaseInfo"
      >
        <el-form ref="form" :model="form" label-width="80px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户昵称">
                <el-input v-model="form.user_name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="所在地区">
                <el-input v-model="form.region"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="个人地址">
                <el-input v-model="form.user_address"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="联系方式">
                <el-input v-model="form.user_tel"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <el-row>
            <el-col :span="12">
              <el-form-item label="个人邮箱">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </el-col>
          </el-row> -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="个人简介">
                <el-input v-model="form.introduce"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item>
                <el-button @click="onSubmit">保存</el-button>
                <el-button @click="changeBaseInformation">取消</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "userBaseInfo",
  data() {
    return {
      avartorUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      changeBaseInfo: false,
      form: {
        user_name: "",
        region: "",
        user_address: "",
        user_tel: "",
        // user_email: "",
        introduce: "",
      },
    };
  },

  computed: {
    ...mapState(["user1", "baseUrl"])
  },

  methods: {
    // 提交修改信息函数
    onSubmit() {
        this.requestSend('user/update',this.form);
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
          console.log("更新用户请求发送成功", res);
          this.natificationControl(res.data.msg,'success')
        })
        .catch(err => {
          console.log("更新用户请求发送失败", err);
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
    }
  },

  created(){
      Object.assign(this.form,this.user1);
      this.form.user_email = null;
  },
};
</script>

<style lang="scss" scoped>
.user-base-info {
  display: flex;
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .user-content {
    height: 100%;
    width: 80%;
    margin: 20px auto;
      .user-avatar {
        display: flex;
        align-items: center;
        margin: 20px;
        padding-bottom: 20px;
        .el-avatar {
          height: 92px;
          width: 92px;
        }
        .user-information {
          margin-left: 30px;
          .name {
            font-size: 30px;
          }
          .role {
            font-size: 24px;
            color: rgb(116, 113, 113);
          }
        }
      }
      .flex-box {
        display: flex;
        align-items: center;
        .lable {
          margin: 20px;
          margin-right: 100px;
        }
        .name {
          color: rgb(153, 153, 153);
        }
      }
      .base-information:hover {
          background: rgb(248, 248, 248);
      }
      .change-base-information {
        margin-top: 30px;
      }
  }
}
</style>