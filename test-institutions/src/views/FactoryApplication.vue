<template>
  <div class="MD">
    <div class="MDcontent">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="factory_id" label="用户ID" width="180"></el-table-column>
        <el-table-column prop="create_time" label="申请日期" width="180"></el-table-column>
        <el-table-column prop="factory_contacts" label="申请人" width="180"></el-table-column>
        <el-table-column prop="contacts_tel" label="联系方式"> </el-table-column>
        <el-table-column prop="f_state" label="状态"> 
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.f_state === 1 ? 'success' : (scope.row.f_state === 2 ? 'danger':'') "
              disable-transitions>{{scope.row.f_state === 0 ? '待审核': (scope.row.f_state === 1 ? '审核通过':'已退回')}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作"> 
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
  name: "Demands",
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
    handleDelete(index, row) {
        let Url = 'factory/f_reject';
        this.requestSend(Url,row.factory_id,index);
        console.log(index, row);
    },

    // 改变工厂申请状态函数
    handleChange(index, row){
      let Url = 'factory/f_approval';
      this.requestSend(Url,row.factory_id,index);
      console.log(index, row);
    },

    //弹窗关闭执行函数
    handleClose(){

    },

    // 请求发起调用函数
    requestSend(sendUrl,id,index){
      axios({
        method:'post',
        url:this.baseUrl+sendUrl,
        headers:{'token': this.user1.token,},
        data:{
          factory_id:id,
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

    // 列表请求发起调用函数
    requestFactoryList(sendUrl, sendData) {
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
      let sendUrl = '/search/factoryAll';
      let sendData = {
      page:this.currentPage,
      size:7,
      sortFieldsToAsc:{
        factory_id:false,
      }
    };
      this.requestFactoryList(sendUrl,sendData);
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
      tableData: [
        {
          factory_id: 11273913 ,
          date: "2016-05-02",
          factory_contacts: "工厂认证",
          contacts_tel: "兴悦化环",
          state:'待审核'
        },
        {
          factory_id: 11273914 ,
          date: "2016-05-02",
          factory_contacts: "工厂认证",
          contacts_tel: "富华化环",
          state:'待审核'
        },{
          factory_id: 11273915 ,
          date: "2016-05-02",
          factory_contacts: "工厂认证",
          contacts_tel: "蓝杰化环",
          state:'待审核'
        },{
          factory_id: 11273916 ,
          date: "2016-05-02",
          factory_contacts: "工厂认证",
          contacts_tel: "大力化环",
          state:'待审核'
        },
        {
          factory_id: 11273917 ,
          date: "2016-05-02",
          factory_contacts: "工厂认证",
          contacts_tel: "长青化环",
          state:'待审核'
        },
      ],
    };
  },
  created(){
    let sendUrl = 'search/factoryAll';
    let sendData = {
      page:this.currentPage,
      size:7,
      sortFieldsToAsc:{
        factory_id:false,
      }
    };
    this.requestFactoryList(sendUrl,sendData);
  },
};
</script>