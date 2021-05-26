<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-05-15 10:46:33
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-22 15:36:21
-->
<!--
 * @Description: file 机构通过列表
 * @Author: IMAGINE
 * @Date: 2021-03-20 12:21:09
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-20 20:30:56
-->
<template>
  <div class="MDR">
    <div class="MDcontentR" v-if="!showInfo">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="institution_id" label="机构ID" width="100"></el-table-column>
        <el-table-column prop="institution_name" label="机构名称"></el-table-column>
        <el-table-column prop="institution_address" label="机构地址"></el-table-column>
        <el-table-column prop="contacts_tel" label="联系方式"></el-table-column>
        <el-table-column prop="institution_contacts" label="联系人"> </el-table-column>
        <el-table-column prop="institution_email" label="机构邮箱"> </el-table-column>
        <el-table-column prop="option" label="操作"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">查看机构</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :pager-count="11"
          :page-size="10"
          :current-page.sync="currentPage"
          @current-change="handleCurrentChange"
          layout="prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
    <show-institution-info v-if="showInfo"></show-institution-info>
    <el-button @click="handleClose" v-if="showInfo">返回推荐列表</el-button>
  </div>
</template>

<style scoped>
.MDR {
  /* display: flex; */
  justify-content: center;
  align-items: center;
}


</style>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import showInstitutionInfo from './showInstitutionInfo.vue';

export default {
  components: { showInstitutionInfo },
  name:'RecommendInstitution',
  computed: {
    ...mapState(["user1","baseUrl"])
  },
  methods: {
    ...mapMutations(["SET_INSTITUTION_INFO"]),

    handleEdit(index, row) {
        console.log(index, row);
        this.SET_INSTITUTION_INFO(row);
        this.showInfo = true;
      },

    //弹窗关闭执行函数
    handleClose(){
      this.showInfo = false;
    },

    // 状态改变调用函数
    requestChange(sendUrl,id,index){
      axios({
        method:'post',
        url:this.baseUrl+sendUrl,
        headers:{'token': this.user1.token,},
        data:{
          institution_id:id,
        },
      }).then((res)=>{
        if(res.data.ret===1){
          this.tableData.splice(index,1);
          this.$notify({title: "消息",message: "操作成功",type: "success",});
          console.log("需求项状态转变成功",res);
        }else{
          console.log("需求项状态转变失败",res);
          this.$notify({title: "消息",message: "操作失败",type: "warning",});
        }
      }).catch((err)=>{
        console.log("需求项状态转变失败",err);
        this.$notify({title: "消息",message: "操作失败",type: "warning",});
      })
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
          console.log("机构申请列表页面请求发送成功", res);

          // 去除返回数据数组中的末尾
          this.total = res.data.data1.pop().value;

          //将数据时间戳转换成日期
          let length = res.data.data1.length;
          for(let i=0; i<length; i++){
            res.data.data1[i].create_time = this.getLocalTime(res.data.data1[i].create_time/1000);
          }
          this.tableData = res.data.data1;
        })
        .catch(err => {
          console.log("机构申请列表页面请求发送失败", err);
        });
    },

    // 当前页处理函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      let sendUrl = 'search/institutionAll';
      let sendData = {
      page:this.currentPage,
      size:7,
      sortFieldsToAsc:{
        institution_id:false,
      },
      where:{
        i_state:1
      },
    };
      this.requestSend(sendUrl,sendData);
    },

    // 转换时间戳函数
    getLocalTime(nS) { 
       return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
    },
  },
  data() {
    return {
      dialogVisible: false,
      index:null, //当前操作行的下标
      row:null,   //当前操作行的信息
      total: 0, // 数据总数
      currentPage: 1, // 当前页码
      tableData: [],
      showInfo:false,
    };
  },
  created(){
    let sendUrl = 'search/institutionAll';
    let sendData = {
      page:this.currentPage,
      size:7,
      sortFieldsToAsc:{
        institution_id:false,
      },
      where:{
        institution_id:1
      },
    };
    this.requestSend(sendUrl,sendData);
  },
};
</script>