<!--
 * @Description: file 创建订单
 * @Author: IMAGINE
 * @Date: 2021-04-01 15:12:25
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-04-08 17:33:32
-->
<template>
  <div class="PD">
    <div class="PDcontent">
      <el-form
        :model="ruleForm"
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
                :readonly="true"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="联系号码" prop="number">
              <el-input
                v-model="ruleForm.number"
                :readonly="true"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><el-form-item label="电子邮箱" prop="email">
              <el-input
                v-model="ruleForm.email"
                :readonly="true"
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
                :readonly="true"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="预算范围" prop="scope">
              <el-input
                v-model="ruleForm.scope"
                :readonly="true"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="创建时间" prop="data1">
              <el-input
                v-model="ruleForm.data1"
                :readonly="true"
              ></el-input> </el-form-item
          ></el-col>
        </el-row>

        <el-form-item label="需求描述" prop="desc">
          <el-input
            type="textarea"
            v-model="ruleForm.desc"
            :readonly="true"
          ></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12"
            ><el-form-item label="检测项目" prop="project">
              <el-select
                v-model="value1"
                multiple
                placeholder="请选择检测项目"
                style="width: 100%"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item
              label="检测仪器"
              prop="equipment"
              :inline="true"
              v-model="ruleForm.total"
            >
              <el-select
                v-model="value2"
                multiple
                placeholder="请选择检测仪器"
                style="width: 100%"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select> </el-form-item
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"
            ><el-form-item label="其他费用(元)" prop="expenses">
              <el-input v-model="ruleForm.email"></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item
              label="总额(元)"
              prop="amount"
              :inline="true"
              v-model="ruleForm.total"
              :readonly="true"
            >
              <el-input v-model="ruleForm.version"></el-input> </el-form-item
          ></el-col>
        </el-row>

        <el-form-item>
          <el-button type="blue" @click="submitForm('ruleForm')"
            >创建订单</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
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
  name: "PostOrder",
  data() {
    return {
      token: null,
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      fileList: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        }
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: [],
      value2: [],
      ruleForm: {
        name: "大家好",
        number: "",
        email: "",
        total: "",
        scope: "",
        desc: "",
        date1: "",
        date2: "",
        project: "",
        equipment: "",
        expenses: "",
        amount: ""
      }
    };
  },
  computed: {
    ...mapState(["user1", "baseUrl"])
  },
  methods: {
    // 提交表单数据
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            method: "post",
            url: this.baseUrl + "upload/d_apply",
            data: {
              demand_contacts: this.ruleForm.name, // 联系人
              tel: this.ruleForm.number, // 联系人电话号码
              email: this.ruleForm.email, // 联系人电子邮箱
              quantity: this.ruleForm.total, // 样品数量
              budget: this.ruleForm.budget, // 预算范围
              cycle: this.ruleForm.date2, // 完成周期
              describes: this.ruleForm.desc // 描述
            },
            headers: {
              token: this.user1.token
            }
          })
            .then(res => {
              console.log("需求发布成功res...", res);
              //成功信息提醒
              if (res.data.ret === 1) {
                this.$notify({
                  title: "消息",
                  message: res.data.msg,
                  type: "success"
                });
              } else {
                this.$notify({
                  title: "消息",
                  message: res.data.msg,
                  type: "warning"
                });
              }
            })
            .catch(err => {
              console.log("需求发布错误error...", err);
            });
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
    // 重置表单数据
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    if (this.user1) {
      this.token = this.user1.token;
    }
  }
};
</script>


