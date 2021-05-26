<template>
  <div class="user-base-info">
    <div class="user-content">
      <div class="user-avatar" v-if="!changeAvatar" @click="changeAvatar=true">
        <el-avatar :src="avartorUrl"></el-avatar>
        <div class="user-information">
          <div class="name">{{form.user_name ? form.user_name : user1.user_name}}</div>
          <div class="role">{{user1.user_role}}</div>
        </div>
      </div>
      <div class="change-user-avatr" v-if="changeAvatar">
        <el-upload
          class="avatar-uploader"
          :action="baseUrl+faceURL"
          :show-file-list="false"
          :headers="{token: user1.token}"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="change-button">
          <el-button @click="postAvatar">确认更换</el-button>
          <el-button @click="changeAvatar=false">取消更换</el-button>
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
import { mapState,mapMutations } from "vuex";
export default {
  name: "userBaseInfo",
  data() {
    return {
      avartorUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      faceURL:'upload/u_face',
      imageUrl: '',
      changeBaseInfo: false,
      changeAvatar:false,
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
    ...mapMutations(['LOGIN']),

    postAvatar(){
      this.requestSend('upload/u_apply',{});
      this.changeAvatar=false;
      this.requestUser('search/user',{})
    },
    requestUser(sendUrl, sendData) {
      axios({
        method: "post",
        url: this.baseUrl + sendUrl,
        headers: { token: this.user1.token },
        data: sendData
      })
        .then(res => {
          console.log("获取用户请求发送成功", res);
          res.data.data1[0].user_faces = res.data.data1[0].user_faces.split(';')[0];
          
          if(res.data.data1[0].user_role == 0){
            res.data.data1[0].user_role = 'USER';
          }else if(res.data.data1[0].user_role == 1){
            res.data.data1[0].user_role = 'ADMINISTRATORS';
          }else if(res.data.data1[0].user_role == 2){
            res.data.data1[0].user_role = 'CUSTOMER_SERVICE';
          }else if(res.data.data1[0].user_role == 3){
            res.data.data1[0].user_role = 'FACTORY';
          }else if(res.data.data1[0].user_role == 4){
            res.data.data1[0].user_role = 'INSTITUTION';
          }

          this.LOGIN(res.data.data1[0]);
        })
        .catch(err => {
          console.log("获取用户请求发送失败", err);
        });
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },

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
      this.avartorUrl = this.user1.user_faces.split(';')[0];
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
      .user-avatar:hover{
        background: rgb(248, 248, 248);
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
      .change-user-avatr{
        display: flex;
        margin: 20px;
        .change-button{
          .el-button{
          display: block !important;
          margin-left: 20px !important;
          margin-top: 6px;
        }
        }
        .avatar-uploader{
          border: 1px dashed #d9d9d9 !important;
          border-radius: 6px !important;
          cursor: pointer !important;
          position: relative !important;
          overflow: hidden !important;
          width: 92px;
        }
        .avatar-uploader:hover{
          border-color: #409EFF !important;
        }
        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 92px;
          height: 92px;
          line-height: 92px;
          text-align: center;
        }
        .avatar {
          width: 92x;
          height: 92px;
          display: block;
        }
      }
  }
}
</style>