<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-03-09 16:11:27
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-09 16:35:28
-->
<template>
  <div class="MD">
    <div class="MDcontent">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="demand_id" label="订单编号" width="180"></el-table-column>
        <el-table-column prop="create_time" label="日期" width="180"></el-table-column>
        <el-table-column prop="matter" label="检测项目" width="180">{{tableData.matter? tableData.matter:'水'}}</el-table-column>
        <el-table-column prop="choice" label="检测机构">{{tableData.choice? tableData.choice:'未选定'}}</el-table-column>
        <el-table-column prop="demand_state" label="状态"> 
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.demand_state === 7 ? 'success' : (scope.row.demand_state === 1 ? 'danger':'') "
              disable-transitions>{{scope.row.demand_state === 2 ?'已提交':(scope.row.demand_state === 3 ? '待审核':(scope.row.demand_state === 4 ? '审核中' : (scope.row.demand_state===5?'待操作':(scope.row.demand_state===6?'待检测':(scope.row.demand_state===7?'检测中':(scope.row.demand_state===8?'已完成':''))))))}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">推荐机构</el-button>
            <el-button
              size="mini"
              type="blue"
              @click="handleShow(scope.$index, scope.row)">详情</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleBack(scope.$index, scope.row)">退回</el-button>
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
  padding-top: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.MDcontent {
  margin: 0 30px;
}
.pagination{
  width: 80%;
  margin-top: 40px;
}

</style>

<script>
import Progress from "@/components/Progress.vue"
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: "choice-institution",
  components:{
    Progress,
  },
  computed:{
    ...mapState(['user1','baseUrl',]),
  },
  methods: {
    // 编辑需求任务函数
    handleEdit(index, row) { 
        console.log(index, row);
        this.dialogVisible = true;
      },

    // 查看需求函数
    handleShow(index, row) {
        console.log(index, row);
        let stateUrl = 'demand/setAudited'; // 改变状态为待审核URL
        this.RequestState(stateUrl,row.demand_id,index); // 调用改变状态需求状态函数
    },

    // 退回需求任务审核函数
    handleBack(index, row){
      console.log(index, row);
      let stateUrl = 'demand/setSubmited'; // 改变状态为待审核URL
      this.RequestState(stateUrl,row.demand_id,index); // 调用改变状态需求状态函数
    },

    // 窗口关闭前执行函数
    handleClose(index, row){
      console.log(index, row);
    },

    // 转换时间戳函数
    getLocalTime(nS) { 
       return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
    },

    // 当前页处理函数
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.RequestList();
    },

    // 请求列表数据函数
    RequestList(){
      // 获取需求列表
      axios({
        method:'post',
        url: this.baseUrl+'search/demandAll',
        data:{
          page:this.currentPage,
          size:10,
          where: { demand_state:4}
        },
        headers: {
        'token': this.user1.token,
        },
      }).then((res)=>{
        console.log("个人需求列表信息获取成功",res);
  
        // 去除返回数据数组中的末尾
        this.total = res.data.data1.pop().value;
        
        //将数据时间戳转换成日期
        let length = res.data.data1.length;
        for(let i=0; i<length; i++){
          res.data.data1[i].create_time = this.getLocalTime(res.data.data1[i].create_time/1000);
        }
        //将处理好的数据赋值给tableData
        this.tableData = res.data.data1;
      }).catch((err)=>{
        console.log("个人需求列表信息获取失败",err);
      })
    },

    // 发送改变需求项状态函数
    RequestState(stateUrl,id,index){
      axios({
        method:'post',
        url:this.baseUrl+stateUrl,
        data:{
          demand_id:id,
        },
        headers:{'token': this.user1.token,}
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

  },
  data() {
    return {
      dialogVisible: false, // 控制弹窗显示
      total: 0, // 数据总数
      currentPage: 1, // 当前页码
      tableData: [
        {
          demand_id: 11273913 ,
          create_time: "2016-05-02",
          matter: "水",
          choice: "未匹配",
          demand_state:'待审核'
        },
        {
          demand_id: 11273914 ,
          create_time: "2016-05-02",
          matter: "土",
          choice: "未匹配",
          demand_state:'待审核'
        },{
          demand_id: 11273915 ,
          create_time: "2016-05-02",
          matter: "气",
          choice: "未匹配",
          demand_state:'待审核'
        },{
          demand_id: 11273916 ,
          create_time: "2016-05-02",
          matter: "大米",
          choice: "未匹配",
          demand_state:'待审核'
        },
        {
          demand_id: 11273917 ,
          create_time: "2016-05-02",
          matter: "大米",
          choice: "未匹配",
          demand_state:'待审核'
        },
      ],
    };
  },
  created(){
    this.RequestList();//调用请求函数函数
  }
};
</script>