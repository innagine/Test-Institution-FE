<!--
 * @Description: file 个人需求列表
 * @Author: IMAGINE
 * @Date: 2020-12-12 14:22:27
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-22 22:06:26
-->
<template>
  <div class="MD3">
    <div class="MDcontent3">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="demand_id" label="订单编号"></el-table-column>
        <el-table-column prop="create_time" label="日期"></el-table-column>
        <el-table-column prop="budget" label="预算"></el-table-column>
        <el-table-column prop="category" label="选择服务"></el-table-column>
        <el-table-column prop="quantity" label="样品数量"></el-table-column>
        <!-- <el-table-column prop="checkMan" label="审核人"> </el-table-column> -->
        <el-table-column prop="demand_state" label="状态"> 
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.demand_state === 7 ? 'success' : (scope.row.demand_state === 1 ? 'danger':(scope.row.demand_state === 0 ? 'danger':'')) "
              disable-transitions>{{scope.row.demand_state === 2 ?'已提交':(scope.row.demand_state === 3 ? '待审核':(scope.row.demand_state === 4 ? '审核中' : (scope.row.demand_state===5?'待操作':(scope.row.demand_state===6?'待检测':(scope.row.demand_state===7?'检测中':(scope.row.demand_state===8?'完成':(scope.row.demand_state===1?'待提交':'撤回')))))))}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作" width="250"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">查看需求</el-button>
            <el-button
              size="mini"
              type="blue"
              @click="handleProgress(scope.$index, scope.row)">进度</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :pager-count="11"
          :page-size="7"
          :current-page.sync="currentPage"
          @current-change="handleCurrentChange"
          layout="prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
      <el-dialog
        title="查看需求"
        :visible.sync="dialogVisible"
        top = '5vh'
        width="80%">
        <modification-demand v-if="dialogVisible"></modification-demand>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="检测进度"
        :visible.sync="dialogVisible1"
        width="80%">
        <Progress v-if="dialogVisible1"></Progress>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="删除任务"
        :visible.sync="dialogVisible2"
        width="30%">
        <span>您确定删除任务吗，相应订单将会取消</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="handleDown">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<style>
.MD3 {
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.MDcontent3 {
  margin: 0 30px;
}
.pagination{
  width: 80%;
  margin-top: 40px;
}

</style>

<script>
import Progress from "@/components/Progress.vue"
import { mapState,mapMutations } from 'vuex';
import axios from 'axios';
import ModificationDemand from '../views/My-information/components/modification-demand.vue';

export default {
  name: "MyChecklist",
  components:{
    Progress,
    ModificationDemand,
  },
  computed:{
    ...mapState(['user1','baseUrl','demandRow']),
  },
  methods: {
    // 获取vuex的方法
    ...mapMutations(['CHOICE_DEMAND_ROW']),

    // 控制编辑窗口显示函数
    handleEdit(index, row) { 
        console.log(index, row);
        this.CHOICE_DEMAND_ROW(row);
        console.log('存进vuex中的row',this.demandRow);
        this.dialogVisible = true;
    },

    // 控制删除窗口显示函数
    handleDelete(index, row) { 
        this.row = row;
        this.index = index;
        console.log(index, row);
        this.dialogVisible2 = true;
        console.log("删除该行");
    },

    // 控制进度窗口函数
    handleProgress(index, row){ 
      console.log(index, row);
      this.CHOICE_DEMAND_ROW(row);
      console.log('存进vuex中的row',this.demandRow);
      this.dialogVisible1 = true;
    },

    // 转换时间戳函数
    getLocalTime(nS) { 
       return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
    },

    // 当前页处理函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.requestMyList();
    },

    // 请求个人需求数据列表函数
    requestMyList(){
      // 获取个人需求列表
      axios({
        method:'post',
        url: this.baseUrl+'search/demand',
        data:{
          page:this.currentPage,
          size:7,
          where: { demand_state:[1,2,3,4,5,6,7]},
        },
        headers: {
        'token': this.user1.token,
        },
        withCredentials: true,
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
          this.dialogVisible2 = false;
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

    // 关闭需求任务审核函数
    handleDown(){
      let stateUrl = 'demand/setWithdraw'; // 改变状态为关闭URL
      this.RequestState(stateUrl,this.row.demand_id,this.index); // 调用改变状态需求状态函数
    },
  },
  data() {
    return {
      dialogVisible: false, // 控制编辑窗口显示
      dialogVisible1: false, // 控制进度窗口显示
      dialogVisible2: false, // 控制删除窗口显示
      index:null, //当前操作行的下标
      row:null,   //当前操作行的信息
      total: 0, // 数据总数
      currentPage: 1, // 当前页码
      tableData: [],
    };
  },
  created(){
    this.requestMyList();
  }
};
</script>