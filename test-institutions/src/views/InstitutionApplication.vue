<template>
  <div class="MD">
    <div class="MDcontent">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="order_id" label="用户ID" width="180"></el-table-column>
        <el-table-column prop="date" label="申请日期" width="180"></el-table-column>
        <el-table-column prop="matter" label="申请项目" width="180"></el-table-column>
        <el-table-column prop="institution" label="机构名称"> </el-table-column>
        <el-table-column prop="state" label="状态"> 
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.state === '已完成' ? 'success' : (scope.row.state === '已退回' ? 'danger':'') "
              disable-transitions>{{scope.row.state}}</el-tag>
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
              @click="handleEdit(scope.$index, scope.row)">通过</el-button>
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


export default {
  name: "Demands",
  components:{
    Progress,
  },
  methods: {

    handleEdit(index, row) {
        console.log(index, row);
        this.dialogVisible = true
      },
    handleDelete(index, row) {
        console.log(index, row);
    },

  },
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          order_id: 11273913 ,
          date: "2016-05-02",
          matter: "机构认证",
          institution: "兴悦检测",
          state:'待审核'
        },
        {
          order_id: 11273914 ,
          date: "2016-05-02",
          matter: "机构认证",
          institution: "富华检测",
          state:'待审核'
        },{
          order_id: 11273915 ,
          date: "2016-05-02",
          matter: "机构认证",
          institution: "蓝杰检测",
          state:'待审核'
        },{
          order_id: 11273916 ,
          date: "2016-05-02",
          matter: "机构认证",
          institution: "大力检测",
          state:'待审核'
        },
        {
          order_id: 11273917 ,
          date: "2016-05-02",
          matter: "机构认证",
          institution: "长青检测",
          state:'待审核'
        },
      ],
    };
  },
};
</script>