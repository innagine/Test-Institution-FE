<template>
  <div class="MD">
    <div class="MDcontent">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="order_id" label="订单编号" width="180"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="matter" label="检测项目" width="180"></el-table-column>
        <el-table-column prop="institution" label="检测机构"> </el-table-column>
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
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
              size="mini"
              type="blue"
              @click="handleEdit(scope.$index, scope.row)">进度</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
export default {
  name: "MyDemand",
  methods: {

    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
    }
  },
  data() {
    return {
      tableData: [
        {
          order_id: 11273913 ,
          date: "2016-05-02",
          matter: "水",
          institution: "上海市普陀区五邑大学",
          state:'已提交'
        },
        {
          order_id: 11273914 ,
          date: "2016-05-02",
          matter: "土",
          institution: "上海市普陀区五邑大学",
          state:'已退回'
        },{
          order_id: 11273915 ,
          date: "2016-05-02",
          matter: "气",
          institution: "上海市普陀区五邑大学",
          state:'检测中'
        },{
          order_id: 11273916 ,
          date: "2016-05-02",
          matter: "大米",
          institution: "上海市普陀区五邑大学",
          state:'已完成'
        },
        {
          order_id: 11273917 ,
          date: "2016-05-02",
          matter: "大米",
          institution: "上海市普陀区五邑大学",
          state:'审核中'
        },
      ],
    };
  },
};
</script>