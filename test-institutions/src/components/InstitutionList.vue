<template>
  <div class="MD">
    <div class="MDcontent">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="order_id" label="机构编号" width="120"></el-table-column>
        <el-table-column prop="date" label="检测周期" width="120"></el-table-column>
        <el-table-column prop="matter" label="检测项目" width="100"></el-table-column>
        <el-table-column prop="institution" label="机构名称"> </el-table-column>
        <el-table-column prop="qualification" label="机构资质"></el-table-column>
        <el-table-column prop="address" label="机构地址" width="180"></el-table-column>
        <el-table-column prop="testPrice" label="检测价格"></el-table-column>
        <el-table-column prop="option" label="操作" width="180"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">机构详情</el-button>
              <el-button
              size="mini"
              type="blue"
              @click="handleEdit(scope.$index, scope.row)">选择</el-button>
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
    // 编辑选项函数
    handleEdit(index, row) {
        console.log(index, row);
        this.dialogVisible = true
    },

    // 删除选项函数
    handleDelete(index, row) {
        console.log(index, row);
    },

    //关闭弹窗时执行函数
    handleClose(){

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
        })
        .catch(err => {
          console.log("机构申请列表页面请求发送失败", err);
        });
    },

  },
  data() {
    return {
      dialogVisible: false,
      currentPage:1,
      tableData: [
        {
          order_id: 11273913 ,
          date: "12天",
          matter: "土壤",
          institution: "兴悦检测",
          qualification:'高级检测机构',
          testPrice:'120',
          address:'江门市蓬江区五邑大学',
        },
        {
          order_id: 11273913 ,
          date: "12天",
          matter: "土壤",
          institution: "兴悦检测",
          qualification:'高级检测机构',
          testPrice:'120',
          address:'江门市蓬江区五邑大学',
        },
        {
          order_id: 11273913 ,
          date: "12天",
          matter: "土壤",
          institution: "兴悦检测",
          qualification:'高级检测机构',
          testPrice:'120',
          address:'江门市蓬江区五邑大学',
        },
        {
          order_id: 11273913 ,
          date: "12天",
          matter: "土壤",
          institution: "兴悦检测",
          qualification:'高级检测机构',
          testPrice:'120',
          address:'江门市蓬江区五邑大学',
        },
        {
          order_id: 11273913 ,
          date: "12天",
          matter: "土壤",
          institution: "兴悦检测",
          qualification:'高级检测机构',
          testPrice:'120',
          address:'江门市蓬江区五邑大学',
        },
      ],
    };
  },
  created(){
    let sendUrl = 'search/institutionAll';
    let sendData = {
      page:this.currentPage,
      size:10,
    };
    console.log(sendUrl);
    this.requestSend(sendUrl,sendData);
  },
};
</script>