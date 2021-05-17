<template>
  <div class="Search">
    <div class="choice-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="demand_id" label="订单编号" width="180">
        </el-table-column>
        <el-table-column prop="create_time" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="matter" label="检测项目" width="180">
        </el-table-column>
        <el-table-column prop="quantity" label="样品数量">
        </el-table-column>
        <el-table-column prop="opration" label="操作" width="180">
          <el-button size="mini" @click="sendRecommend">确认推荐</el-button>
        </el-table-column>
      </el-table>
      <div class="choice-institution-box">
        <div class="choice-institution-text">已选择机构：</div>
        <div class="choice-institution-item">
          <el-tag v-for="(tag,index) in choiceInstitutionList" :key="index" closable   @close="handleClose(tag,index)">
            {{ tag }}
          </el-tag>
        </div>
      </div>
    </div>
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
            <el-button @click="turnBack">返回</el-button>
            <el-button @click="showDrawer">需求详情</el-button>
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
import { mapState,mapMutations } from "vuex";
import InstitutionList from "@/components/InstitutionList.vue";
import axios from "axios";

export default {
  name: "Search",
  components: {
    InstitutionList
  },
  data() {
    return {
      drawer: false, // 抽屉是否显示
      show3: true, // 搜索框是否出现
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
        desc: ""
      },
      rules: {
        date1: [
          {
            type: "date",
            // required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            // required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写步骤重现", trigger: "blur" }]
      },
      tableData: [],
    };
  },
  computed: {
    ...mapState(["user1","baseUrl","choiceInstitutionList","demandRow"])
  },
  methods: {
    ...mapMutations(['DELETE_INSTITUTION']),

    // 发送推荐机构函数
    sendRecommend(){
      let data = {
        demand_id:this.demandRow.demand_id,
        id1:this.choiceInstitutionList[0],
        id2:this.choiceInstitutionList[1],
        id3:this.choiceInstitutionList[2],
      }
      this.requestSend('demand/recommend',data);
    },

    // 提交表单函数
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$refs.child.getData();
          this.$notify({
            title: "消息",
            message: "搜索完成",
            type: "success"
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单函数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 退回函数
    turnBack() {
      this.$router.push("/institution-match");
    },

    // 显示需求详情
    showDrawer() {
      this.drawer = true;
    },

    // 关闭标签
    handleClose(tag,index) {
        console.log("标签",tag,index);
        this.DELETE_INSTITUTION();
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
          console.log("推荐机构请求发送成功", res);
          this.natificationControl(res.data.msg,'success')
        })
        .catch(err => {
          console.log("推荐机构请求发送失败", err);
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
    },
  },
  created(){
    this.tableData.push(this.demandRow);
  }
};
</script>

<style scoped>
.Search {
  height: 100%;
  width: 80%;
  margin: 50px auto;
}
.choice-table {
  padding: 20px;
  margin: 30px 0;
  margin-bottom: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-tag + .el-tag {
    margin-left: 10px;
  }
.choice-institution-box{
  margin-top: 20px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #909399;
  display: flex;
  align-items:center;
}
.choice-institution-text{
  margin-right: 20px;
}
</style>