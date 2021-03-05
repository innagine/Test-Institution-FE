<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-03-05 14:22:51
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-05 14:47:02
-->
<template>
<div class="PD1">
    <div class="PDcontent1">
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
                v-model="ruleForm.date1"
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
                v-model="ruleForm.date2"
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
        <!-- <el-form-item>
          <el-button type="blue" @click="submitForm('ruleForm')"
            >提交需求</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item> -->
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";
import { mapState } from 'vuex';
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
  computed:{
    ...mapState(['user1'],),
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            method: "post",
            url: "http://26.140.221.230:8556//upload/d_apply",
            data: {
              demand_contacts: this.ruleForm.name, // 联系人
              tel: this.ruleForm.number, // 联系人电话号码
              email: this.ruleForm.email, // 联系人电子邮箱
              quantity: this.ruleForm.total, // 样品数量
              budget: this.ruleForm.name, // 预算范围
              cycle: this.ruleForm.date2, // 完成周期
              describes: this.ruleForm.desc, // 描述
            },
            headers: {
            'token': this.user1.token,
            }
          }).then((res)=>{
            console.log("需求发布成功res...", res); 
          }).catch((err)=>{
            console.log("需求发布错误error...", err); 
          })
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
.PD1 {
  display: flex;
  /* margin: 30px 30px; */
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
}
.PDcontent1 {
  /* height: 100%; */
  width: 80%;
  /* margin: 50px auto; */
}
.el-upload--picture-card {
  width: 60px !important;
  height: 60px !important;
  line-height: 60px !important;
}
</style>