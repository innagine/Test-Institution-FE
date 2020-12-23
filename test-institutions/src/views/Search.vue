<template>
  <div class="Search">
    <el-collapse-transition>
      <div v-show="show3">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          style="align-self: center"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="机构编号" prop="issueId">
                <el-input v-model="ruleForm.issueId"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="机构名称" prop="issueId">
                <el-input v-model="ruleForm.issueId"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="检测周期">
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2" style="text-align: center"
              >至</el-col
            >
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date2"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="价格区间">
            <el-col :span="11">
              <el-form-item prop="price1">
                <el-input v-model="ruleForm.price1"></el-input>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2" style="text-align: center"
              >至</el-col
            >
            <el-col :span="11">
              <el-form-item prop="price2">
                <el-input v-model="ruleForm.price2"></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="检测项目" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择检测项目">
              <el-option label="A" value="项目A"></el-option>
              <el-option label="B" value="项目B"></el-option>
              <el-option label="C" value="项目C"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="机构资质" prop="createMan">
            <el-select
              v-model="ruleForm.createMan"
              placeholder="请选择检测机构资质"
            >
              <el-option label="A" value="项目A"></el-option>
              <el-option label="B" value="项目B"></el-option>
              <el-option label="C" value="项目C"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="机构地区" prop="updateMan">
            <el-select
              v-model="ruleForm.updateMan"
              placeholder="请选择机构地区"
            >
              <el-option label="A" value="项目A"></el-option>
              <el-option label="B" value="项目B"></el-option>
              <el-option label="C" value="项目C"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即搜索</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="show3 = !show3">收起</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-collapse-transition>
    <el-button @click="show3 = !show3" v-if="!show3" style="margin: 0 20px"
      >展开</el-button
    >
    <InstitutionList></InstitutionList>
  </div>
</template>

<script>
import InstitutionList from '@/components/InstitutionList.vue'
// 导入axios
// import axios from "axios";

export default {
  name: "Search",
  components: {
    InstitutionList,
  },
  data() {
    return {
      issueObj: {},
      show3: true,
      showIssueList: false,
      ruleForm: {
        iusseId: null,
        createMan: null,
        updateMan: null,
        date1: null,
        date2: null,
        price1: null,
        price2: null,
        status: null,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        date1: [
          {
            type: "date",
            // required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            // required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写步骤重现", trigger: "blur" }],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.showIssueList = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$refs.child.getData();
          this.$notify({
            title: "消息",
            message: "搜索完成",
            type: "success",
          });
        } else {
          console.log("error submit!!");
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
.Search {
  height: 100%;
  width: 80%;
  margin: 50px auto;
}
</style>