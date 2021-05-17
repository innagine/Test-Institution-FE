<template>
  <div class="PRcontent">
    <el-steps
      :space="200"
      :active="activeNum"
      finish-status="success"
      class="steps"
    >
      <el-step title="待提交"></el-step>
      <el-step title="已提交"></el-step>
      <el-step title="待审核"></el-step>
      <el-step title="审核中"></el-step>
      <el-step title="待操作"></el-step>
      <el-step title="待检测"></el-step>
      <el-step title="检测中"></el-step>
      <el-step title="已完成"></el-step>
    </el-steps>
    <div class="institution-choice" v-if="showChoice">
      <div class="select">
        <span class="institution">请选择检测机构：</span>
        <el-select v-model="value" placeholder="请选择检测机构" class="options">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
        <el-button type="primary" plain @click="choiceInstitution">确认机构</el-button>
        <el-popover
          class="progressBtn"
          placement="top-start"
          title="提示"
          width="200"
          trigger="hover"
          content="可以申请更换推荐新一批的检测机构。"
        >
          <el-button slot="reference" type="warning" plain>申请更换</el-button>
        </el-popover>
        <!-- <el-button type="warning" plain>申请更换</el-button> -->
      </div>
      <recommend-institution></recommend-institution>
    </div>
  </div>
</template>

<style scoped>
.PRcontent {
  width: 96%;
  margin: 0 auto;
}

.steps {
  margin-top: 20px;
  margin-bottom: 20px;
}
.institution,
.options {
  margin-right: 20px;
}
.progressBtn {
  margin-left: 20px;
}
.select {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>

<script>
import { mapState } from "vuex";
import axios from "axios";
import RecommendInstitution from './RecommendInstitution.vue';
export default {
  name: "Progress",
  components:{
    RecommendInstitution,
  },
  data() {
    return {
      options: [],
      value: null,
      activeNum: 0, // 当前步骤
      showChoice:false, // 机构选择
      activeName:1,
    };
  },
  computed: {
    ...mapState(["user1", "demandRow","baseUrl"])
  },
  methods:{
    // 获取推荐机构id函数
    getInstitutionId(){
      this.options = this.demandRow.recommend.split('_');
      this.options.shift();
    },

    // 选择机构
    choiceInstitution(){
      console.log('value',this.value);
      let data = { 
        demand_id:this.demandRow.demand_id,
        institution_id:parseInt(this.value) 
      }
      this.requestSend('demand/choice',data)
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
          console.log("选择机构请求发送成功", res);
          this.natificationControl(res.data.msg,'success')
        })
        .catch(err => {
          console.log("选择机构请求发送失败", err);
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
    this.activeNum = this.demandRow.demand_state - 1;
    if(this.demandRow.demand_state  === 5){
      this.showChoice = true;
      this.getInstitutionId();
    }
  }
};
</script>