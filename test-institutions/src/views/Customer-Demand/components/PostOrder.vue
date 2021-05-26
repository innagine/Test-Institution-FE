<!--
 * @Description: file 创建订单
 * @Author: IMAGINE
 * @Date: 2021-04-01 15:12:25
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-23 22:11:00
-->
<template>
  <div class="PD6">
    <div class="PDcontent6">
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
            <el-form-item label="样品数量" prop="total">
              <el-input
                v-model="ruleForm.total"
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
            <el-form-item label="创建时间" prop="data">
              <el-input
                v-model="ruleForm.data"
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
                  v-for="item in itemList"
                  :key="item.item_id"
                  :label="item.item_name"
                  :value="item.item_id"
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
                  v-for="item in equipmentList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select> </el-form-item
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"
            ><el-form-item label="其他费用(元)" prop="expenses">
              <el-input v-model="ruleForm.expenses"></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item
              label="总额(元)"
              prop="amount"
              :inline="true"
              v-model="ruleForm.amount"
              :readonly="true"
            >
              <el-input v-model="ruleForm.amount"></el-input> </el-form-item
          ></el-col>
        </el-row>

        <el-form-item>
          <el-button type="blue" @click="submitForm('ruleForm')"
            >创建订单</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="turnBack">返回</el-button>
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
        name: "",
        number: "",
        email: "",
        total: "",
        scope: "",
        desc: "",
        date: "",
        project: "",
        equipment: "",
        expenses: "",
        amount: ""
      },
      itemList:null,
      equipmentList:null,
      currentPage:1,
    };
  },
  computed: {
    ...mapState(['user1', 'baseUrl','demandRow','institutionInfo'])
  },
  methods: {
    // 提交表单数据
    submitForm() {
      let data = {
        orders:{
          sundries:this.ruleForm.expenses,
          price:this.ruleForm.amount,
        },
        user:{
          user_id:this.demandRow.user_id
        },
        demand:{
          demand_id:this.demandRow.demand_id
        },
        item:this.value1,
        equipment:this.value2
      }
      this.requestSend('orders/add',data);
      this.requestSend('demand/setTested',{demand_id:this.demandRow.demand_id});
    },

    // 重置表单数据
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 退回函数
    turnBack() {
      this.$router.push("customer-demand");
    },

    // 获取检测项目列表函数
    requestMyList(URL,condition){
      return axios({
        method:'post',
        url: this.baseUrl + URL,
        data:{
          page:this.currentPage,
          size:7,
          where:condition
        },
        headers: {
        'token': this.user1.token,
        },
      }).then((res)=>{
        console.log("检测项目列表信息获取成功",res);
        res.data.data1.pop().value;
        return res.data.data1; 
      }).catch((err)=>{
        console.log("检测项目列表信息获取失败",err);
      })
    },

    //页面同步请求
    async createRequest() {
      this.itemList = await this.requestMyList('search/item',{ item_state:1 });
      this.equipmentList = await this.requestMyList('search/equipmentAll',{ state:1 , institution:this.institutionInfo.institution_id});
      console.log('itemList:',this.itemList);
      console.log('equipment:', this.equipmentList);
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
          console.log("创建订单页面请求发送成功", res);
          this.natificationControl(res.data.msg,'success')
        })
        .catch(err => {
          console.log("创建订单页面请求发送失败", err);
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
  created() {
    if (this.user1) {
      this.token = this.user1.token;
    }
    this.ruleForm.name = this.demandRow.demand_contacts;
    this.ruleForm.number = this.demandRow.tel;
    this.ruleForm.email = this.demandRow.email;
    this.ruleForm.total = this.demandRow.quantity;
    this.ruleForm.scope = this.demandRow.budget;
    this.ruleForm.desc = this.demandRow.describes;
    this.ruleForm.data = this.demandRow.create_time;

    this.createRequest();
  }
};
</script>

<style lang="scss" scoped>
.PD6 {
  display: flex;
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .PDcontent6 {
    height: 100%;
    width: 80%;
    margin: 50px auto;
  }
}
</style>
