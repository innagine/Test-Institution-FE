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
          <el-upload
            action="http://26.140.221.230:8556/upload/f_license"
            :headers="{token: this.user1.token}"
            list-type="picture-card"
            :auto-upload="true"
            :file-list="fileList"
            :on-success="handleSuccess"
          >
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
            >注册</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button>查看进度</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "RFactory",
  computed: {
    ...mapState(["user1", "baseUrl"])
  },
  data() {
    return {
      dialogImageUrl: "", // 查看上传文件
      dialogVisible: false, // 查看文件上传弹窗
      disabled: false,
      documentUrl: "http://26.140.221.230:8556/upload/f_license", // 上传工厂文件专用链接
      fileList: [], // 上传资料对象数组
      ruleForm: {
        name: "",
        number: "",
        email: "",
        ID: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { max: 30, message: "长度最多 30 个字符", trigger: "blur" }
        ],
        number: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          { max: 11, message: "长度最多 11 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入联系人姓名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur"
          }
        ],
        ID: [
          { required: true, message: "请输入联系人身份证号", trigger: "blur" },
          {
            min: 18,
            max: 18,
            message: "长度在 18 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 提交表单数据函数
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let url = "upload/f_apply"; // 发送表单基本数据接口
          let sendData = {
            // 发送的数据
            factory_contacts: this.ruleForm.name, // 联系人名字
            contacts_id: this.ruleForm.ID, // 联系人身份证
            contacts_tel: this.ruleForm.number, // 联系人电话
            factory_email: this.ruleForm.email // 联系人email
          };
          this.requestSend(url, sendData); // 请求发送
        } else {
          console.log("error submit!!");
          this.$notify({
            title: "消息",
            message: "请将信息填写完整",
            type: "warning"
          });
          return false;
        }
      });
    },

    // 重置表单数据函数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 请求发送函数
    requestSend(sendUrl, sendData) {
      axios({
        method: "post",
        url: this.baseUrl + sendUrl,
        headers: { token: this.user1.token },
        data: sendData
      })
        .then(res => {
          console.log("工厂页面请求发送成功", res);
        })
        .catch(err => {
          console.log("工厂页面请求发送失败", err);
        });
    },
    
    // 删除上传文件
    handleRemove(file) {
      // 通过循环找出被选中文件对象
      let len = this.fileList.length;
      let index = 0;
      for(let i = 0; i<len; i++){
        if(this.fileList[i].uid === file.uid){
          index = i;
        }
      }
      // 清除前端文件数组中被选中的对象
      this.fileList.splice(index,1); 

      // 调用清除后端缓存中的对象函数
      this.handleDelete(file,'/delete/f_license');
    },

    // 清除后端缓存中的对象函数
    handleDelete(file,url){
      axios({
        method:'post',
        url:this.baseUrl+url,
        headers:{token: this.user1.token},
        data:{fileName:file.name},
      }).then((res)=>{
        console.log('删除后台缓存中的被选中文件数据成功',res);
      }).catch((err)=>{
        console.log('删除后台缓存中的被选中文件数据失败',err);
      })
    },

    // 查看上传文件函数
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 文件上传成功执行函数
    handleSuccess(response, file, fileList){
      this.fileList.push(file);
      console.log(response, file, fileList);
    },
  }
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