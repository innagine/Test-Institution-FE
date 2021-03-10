<template>
  <div class="RF">
    <div class="RFcontent">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="align-self: center"
      >
        <el-row>
          <el-col :span="12"
            ><el-form-item label="联系人" prop="name">
              <el-input
                v-model="ruleForm.name"
                maxlength="10"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="联系号码" prop="number">
              <el-input
                v-model="ruleForm.number"
                maxlength="11"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><el-form-item label="电子邮箱" prop="email">
              <el-input
                v-model="ruleForm.email"
                maxlength="20"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="身份证号码" prop="ID">
              <el-input
                v-model="ruleForm.ID"
                maxlength="18"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        
        <el-form-item label="营业执照" prop="grade">
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button type="blue" @click="submitForm('ruleForm')"
            >注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button >查看进度</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";
import { mapState } from 'vuex';

export default {
  name: "RFactory",
  computed:{
    ...mapState(['user1','baseUrl',]),
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      ruleForm: {
        name: "",
        number: "",
        email: "",
        ID: "",
        password:'',
        Rpassword:'',
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { max: 30, message: "长度最多 30 个字符", trigger: "blur" },
        ],
        number: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          { max: 11, message: "长度最多 11 个字符", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入联系人姓名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        ID: [
          { required: true, message: "请输入联系人身份证号", trigger: "blur" },
          {
            min: 18,
            max: 18,
            message: "长度在 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {

    // 提交表单数据函数
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // let url = 'upload/f_apply'; // 发送表单基本数据接口
          // let sendData = { // 发送的数据

          //   contacts_tel:'', // 联系人电话
          // }; 
          this.requestSend()
        } else {
          console.log("error submit!!");
          this.$notify({title: "消息",message: "请将信息填写完整",type: "warning",});
          return false;
        }
      });
    },

    // 重置表单数据函数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 请求发送函数
    requestSend(sendUrl,sendData){
      axios({
        method:'post',
        url:this.baseUrl+sendUrl,
        headers: {'token': this.user1.token,},
        data:sendData,
      }).then((res)=>{
        console.log('工厂页面请求发送成功',res);
      }).catch((err)=>{
        console.log('工厂页面请求发送失败',err);
      })
    }
  },
};
</script>


<style>
.RF {
  /* display: flex; */
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.RFcontent {
  height: 100%;
  width: 80%;
  margin: 20px auto;
}
.el-upload--picture-card {
  width: 60px !important;
  height: 60px !important;
  line-height: 60px !important;
}
</style>