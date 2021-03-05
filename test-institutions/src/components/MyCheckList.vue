<template>
  <div class="MD">
    <div class="MDcontent">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="order_id" label="订单编号" width="180"></el-table-column>
        <el-table-column prop="date" label="日期" width="120"></el-table-column>
        <el-table-column prop="matter" label="检测项目" width="120"></el-table-column>
        <el-table-column prop="institution" label="检测机构"> </el-table-column>
        <el-table-column prop="checkMan" label="审核人"> </el-table-column>
        <el-table-column prop="state" label="状态"> 
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.state === '已完成' ? 'success' : (scope.row.state === '已退回' ? 'danger':'') "
              disable-transitions>{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作" width="250"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="blue"
              @click="handleProgress(scope.$index, scope.row)">进度</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-dialog
                  title="修改需求"
                  :visible.sync="dialogVisible"
                  width="80%">
                  <modification-demand></modification-demand>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
            </el-dialog>
            <el-dialog
                  title="检测进度"
                  :visible.sync="dialogVisible1"
                  width="80%">
                  <Progress></Progress>
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
                    <el-button type="primary" @click="deleteItem()">确 定</el-button>
                  </span>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style>
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
import { mapState } from 'vuex';
import axios from 'axios';
import ModificationDemand from '../views/My-information/components/modification-demand.vue';

export default {
  name: "MyDemand",
  components:{
    Progress,
    ModificationDemand,
  },
  computed:{
    ...mapState(['user1',]),
  },
  methods: {

    handleEdit(index, row) { // 控制编辑窗口显示
        console.log(index, row);
        this.dialogVisible = true;
      },
    handleDelete(index, row) { // 控制删除窗口显示
        this.row = row;
        this.index = index;
        console.log(index, row);
        this.dialogVisible2 = true;
        console.log("删除该行");
    },
    deleteItem(){ // 确认删除任务
        this.dialogVisible2 = false;
        this.tableData.splice(this.index,1)
    },
    handleProgress(index, row){ // 控制进度窗口
      console.log(index, row);
      this.dialogVisible1 = true;
    }

  },
  data() {
    return {
      dialogVisible: false, // 控制编辑窗口显示
      dialogVisible1: false, // 控制进度窗口显示
      dialogVisible2: false, // 控制删除窗口显示
      index:null, //当前操作行的下标
      row:null,   //当前操作行的信息
      tableData: [
        {
          order_id: 11273913 ,
          date: "2016-05-02",
          matter: "水",
          institution: "上海市普陀区五邑大学",
          state:'已提交',
          checkMan:'imagine'
        },
        {
          order_id: 11273914 ,
          date: "2016-05-02",
          matter: "土",
          institution: "上海市普陀区五邑大学",
          state:'已退回',
          checkMan:'imagine'
        },{
          order_id: 11273915 ,
          date: "2016-05-02",
          matter: "气",
          institution: "上海市普陀区五邑大学",
          state:'检测中',
          checkMan:'imagine'
        },{
          order_id: 11273916 ,
          date: "2016-05-02",
          matter: "大米",
          institution: "上海市普陀区五邑大学",
          state:'已完成',
          checkMan:'imagine'
        },
        {
          order_id: 11273917 ,
          date: "2016-05-02",
          matter: "大米",
          institution: "上海市普陀区五邑大学",
          state:'审核中',
          checkMan:'imagine'
        },
      ],
    };
  },
  created(){
    // 获取个人需求列表
    axios({
      method:'post',
      url:'http://26.140.221.230:8556/search/demand',
      data:{},
      headers: {
      'token': this.user1.token,
      },
    }).then((res)=>{
      console.log("个人需求列表信息获取成功",res);
    }).catch((err)=>{
      console.log("个人需求列表信息获取失败",err);
    })
  }
};
</script>