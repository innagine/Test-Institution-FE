<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-03-05 14:22:51
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-15 14:32:18
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
            ><el-form-item label="联系人" prop="demand_contacts">
              <el-input
                v-model="ruleForm.demand_contacts"
                maxlength="80"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="联系号码" prop="tel">
              <el-input
                v-model="ruleForm.tel"
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
            <el-form-item label="样品数量" prop="quantity">
              <el-input
                v-model="ruleForm.quantity"
                maxlength="30"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="预算范围" prop="budget">
              <el-input
                v-model="ruleForm.budget"
                maxlength="30"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="创建时间" prop="create_time">
              <el-input
                v-model="ruleForm.create_time"
                maxlength="30"
                show-word-limit
              ></el-input> 
            </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="完成时间" prop="cycle">
              <el-input
                v-model="ruleForm.cycle"
                maxlength="30"
                show-word-limit
              ></el-input> 
            </el-form-item
          ></el-col>
        </el-row>
        <el-form-item label="需求描述" prop="describes">
          <el-input
            type="textarea"
            v-model="ruleForm.describes"
            maxlength="2000"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="下载附件" prop="enclosure">
          <el-button>确认下载</el-button>
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

      ruleForm: {},
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { max: 30, message: "长度最多 30 个字符", trigger: "blur" },
        ],
        tel: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          { max: 30, message: "长度最多 30 个字符", trigger: "blur" },
        ],
        demand_contacts: [
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
        describes: [
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
    ...mapState(['user1','demandRow'],),
  },
  methods: {
    // 提交函数
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios({
            method: "post",
            url: "http://26.140.221.230:8556//upload/d_apply",
            data: {
              demand_contacts: this.ruleForm.demand_contacts, // 联系人
              tel: this.ruleForm.tel, // 联系人电话号码
              email: this.ruleForm.email, // 联系人电子邮箱
              quantity: this.ruleForm.quantity, // 样品数量
              budget: this.ruleForm.budget, // 预算范围
              cycle: this.ruleForm.date2, // 完成周期
              describes: this.ruleForm.describes, // 描述
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
    // 重置函数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

  },
  created(){
    this.ruleForm = this.demandRow;
    console.log('在弹窗中读取的vuex的row',this.demandRow);
  },
};
</script>


<style>
.PD1 {
  display: flex;
  /* margin: 30px 30px; */
  justify-content: center;
  align-items: center;
  padding: 20px 0;
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