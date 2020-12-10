<template>
  <div class="RI">
    <div class="RIcontent">
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
                maxlength="80"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="联系号码" prop="number">
              <el-input
                v-model="ruleForm.number"
                maxlength="30"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><el-form-item label="电子邮箱" prop="email">
              <el-input
                v-model="ruleForm.email"
                maxlength="30"
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
        <!-- <el-row>
          <el-col :span="12">
            <el-form-item label="预算范围" prop="scope">
              <el-input
                v-model="ruleForm.scope"
                maxlength="30"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
        </el-row> -->
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
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交需求</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入axios
// import axios from "axios";

export default {
  name: "RInstitution",
  //   props:['User'],
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
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { max: 30, message: "长度最多 30 个字符", trigger: "blur" },
        ],
        number: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          { max: 30, message: "长度最多 30 个字符", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入联系人姓名", trigger: "blur" },
          {
            min: 8,
            max: 80,
            message: "长度在 8 到 80 个字符",
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //       console.log("AAAAAAAAAAAA"+this.User.userId);
          //   // 发送post请求
          //       axios({
          //     method: "post",
          //     url: "http://localhost:8999/createIssue",
          //     data: {
          //       issueName:this.ruleForm.name,
          //       createMan:this.User.userName,
          //       level:this.ruleForm.grade,
          //       type:this.ruleForm.type2,
          //       beta:this.ruleForm.version,
          //       userId:this.User.userId,
          //       updateMan:this.ruleForm.person,
          //       step:this.ruleForm.desc,
          //       solution:this.ruleForm.solution,
          //       planDate:this.ruleForm.date
          //     }
          //   })
          //     .then((res) => {
          //       console.log("data..", res.data);
          //       if(res.data==1){
          //       this.$notify({
          //        title: "消息",
          //        message: "IUSSUE创建成功，可以继续创建",
          //        type: "success",
          //        });
          //       }
          //       else{
          //         this.$notify({
          //        title: "消息",
          //        message: "IUSSUE创建失败,指派人不存在",
          //        type: "warning",
          //        });
          //       }
          //     })
          //     .catch((err) => {
          //       console.log("error...", err);
          //     });
        } else {
          console.log("error submit!!");
          this.$notify({
            title: "消息",
            message: "请将信息填写完整",
            type: "warning",
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>


<style>
.RI {
  width: 100%;
  /* display: flex; */
  /* margin: 30px 30px; */
  /* justify-content: center; */
  /* align-items: center; */
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.RIcontent {
  height: 100%;
  width: 100%;
  margin: 20px auto;
}
.el-upload--picture-card {
  width: 60px !important;
  height: 60px !important;
  line-height: 60px !important;
}
</style>