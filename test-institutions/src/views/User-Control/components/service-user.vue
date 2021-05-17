<!--
 * @Description: file 客服用户列表
 * @Author: IMAGINE
 * @Date: 2021-03-20 12:21:55
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-11 20:33:40
-->
<template>
  <div class="MD">
    <div class="MDcontent">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="user_id" label="用户ID"></el-table-column>
        <el-table-column prop="user_name" label="用户名"></el-table-column>
        <el-table-column prop="user_tel" label="联系方式"></el-table-column>
        <el-table-column prop="user_email" label="用户邮箱"> </el-table-column>
        <el-table-column prop="user_role" label="用户身份"> 
          <template>
            <el-tag
              type="warning"
              disable-transitions>客服用户</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作" width="210"> 
          <template slot-scope="scope">
              <el-button
              size="mini"
              type="blue"
              @click="handleChange(scope.$index, scope.row)">转为管理员</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除用户</el-button>
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
  </div>
</template>

<style scoped>
.MD {
  /* display: flex; */
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.MDcontent {
  margin: 0 30px;
}

</style>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name:'service-user',
  computed: {
    ...mapState(["user1","baseUrl"])
  },
  methods: {

    // 改变用户为管理员
    handleChange(index, row){
      let Url = 'user/setRoleAdmin';
      this.requestChange(Url,row.user_id,index);
      console.log(index, row);
    },
    // 删除用户
    handleDelete(index, row) {
        let Url = 'user/setStateClose';
        this.requestChange(Url,row.user_id,index);
        console.log(index, row);
    },

    // 状态改变调用函数
    requestChange(sendUrl,id,index){
      axios({
        method:'post',
        url:this.baseUrl+sendUrl,
        headers:{'token': this.user1.token,},
        data:{
          user_id:id,
        },
      }).then((res)=>{
        if(res.data.ret===1){
          this.tableData.splice(index,1);
          this.$notify({title: "消息",message: "操作成功",type: "success",});
          console.log("角色转变成功",res);
        }else{
          console.log("角色转变失败",res);
          this.$notify({title: "消息",message: "操作失败",type: "warning",});
        }
      }).catch((err)=>{
        console.log("角色转变失败",err);
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
          console.log("管理用户列表页面请求发送成功", res);

          // 去除返回数据数组中的末尾
          this.total = res.data.data1.pop().value;

          this.tableData = res.data.data1;
        })
        .catch(err => {
          console.log("管理用户列表页面请求发送失败", err);
        });
    },

    // 当前页处理函数
    handleCurrentChange() {
      let sendUrl = 'search/userAll';
      let sendData = {
      page:this.currentPage,
      size:7,
      sortFieldsToAsc:{
        user_id:false,
      },
      where:{
        user_role:2,
        user_state:0,
      },
    };
      this.requestSend(sendUrl,sendData);
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
    };
  },
  created(){
    this.handleCurrentChange()
  },
};
</script>