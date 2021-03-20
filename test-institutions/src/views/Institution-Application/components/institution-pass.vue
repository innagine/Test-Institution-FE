<!--
 * @Description: file 机构通过列表
 * @Author: IMAGINE
 * @Date: 2021-03-20 12:21:09
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-20 20:30:56
-->
<template>
  <div class="MD">
    <div class="MDcontent">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="institution_id" label="用户ID"></el-table-column>
        <el-table-column prop="create_time" label="申请日期"></el-table-column>
        <el-table-column prop="contacts_tel" label="联系方式"></el-table-column>
        <el-table-column prop="institution_contacts" label="申请人"> </el-table-column>
        <el-table-column prop="i_state" label="状态"> 
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.i_state === 1 ? 'success' : (scope.row.i_state === 2 ? 'danger':'') "
              disable-transitions>{{scope.row.i_state === 0 ? '待审核': (scope.row.i_state === 1?'审核通过':'已退回')}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作" width="300"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">审核资料</el-button>
              <el-button
              size="mini"
              type="blue"
              @click="handleChange(scope.$index, scope.row)">通过</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">退回</el-button>
              <el-dialog
                  title="检测进度"
                  :visible.sync="dialogVisible"
                  width="80%"
                  :before-close="handleClose">
                  <Progress></Progress>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
              </el-dialog>
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
import Progress from "@/components/Progress.vue"
import axios from "axios";
import { mapState } from "vuex";

export default {
  name:'institution-pass',
  components:{
    Progress,
  },
  computed: {
    ...mapState(["user1","baseUrl"])
  },
  methods: {

    handleEdit(index, row) {
        console.log(index, row);
        this.dialogVisible = true
      },

    //弹窗关闭执行函数
    handleClose(){

    },

    // 改变机构申请状态为通过函数
    handleChange(index, row){
      let Url = 'institution/i_approval';
      this.requestChange(Url,row.institution_id,index);
      console.log(index, row);
    },
    // 改变机构申请状态为退回函数
    handleDelete(index, row) {
        let Url = 'institution/i_reject';
        this.requestChange(Url,row.institution_id,index);
        console.log(index, row);
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
        i_state:1
      },
    };
    this.requestSend(sendUrl,sendData);
  },
};
</script>