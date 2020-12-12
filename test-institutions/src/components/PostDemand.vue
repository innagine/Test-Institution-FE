<template>
  <div class="PD">
    <div class="PDcontent">
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
            <el-form-item
              label="样品数量"
              prop="total"
              :inline="true"
              v-model="ruleForm.total"
            >
              <el-input
                v-model="ruleForm.version"
                maxlength="30"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="预算范围" prop="scope">
              <el-input
                v-model="ruleForm.scope"
                maxlength="30"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-form-item label="选择周期">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date"
                :picker-options="pickerOptions"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2" style="text-align: center">至</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date"
                :picker-options="pickerOptions"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="需求描述" prop="desc">
          <el-input
            type="textarea"
            v-model="ruleForm.desc"
            maxlength="2000"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="添加文件" prop="grade">
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
  name: "PostDemand",
  //   props:['User'],
  data() {
    return {

      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
      },

      ruleForm: {
        name: "",
        number: "",
        email: "",
        total: "",
        scope: "",
        desc: "",
        date1: "",
        date2: "",
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
        date1: [
          {
            type: "date",
            // required: true,
            message: "请选择开始日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            // required: true,
            message: "请选择结束日期",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "需求尽量详细，以便更精确的匹配到合适的测试项目",
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
.PD {
  display: flex;
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.PDcontent {
  height: 100%;
  width: 80%;
  margin: 50px auto;
}
.el-upload--picture-card {
  width: 60px !important;
  height: 60px !important;
  line-height: 60px !important;
}
</style>