<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-05-15 13:58:09
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-15 13:59:05
-->
<template>
  <div class="MD4">
    <div class="MDcontent4">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="orders_id" label="订单编号"></el-table-column>
        <el-table-column prop="create_time" label="日期"></el-table-column>
        <el-table-column prop="price" label="费用"></el-table-column>
        <el-table-column prop="payment" label="状态"> 
          <template slot-scope="scope">
            <el-tag
              disable-transitions>{{scope.row.payment}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作" width="300"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">查看订单</el-button>
              <el-button
              size="mini"
              type="blue"
              @click="handleEdit(scope.$index, scope.row)">填入报告</el-button>
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
.MD4 {
  /* display: flex; */
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.MDcontent4 {
  margin: 0 30px;
}

</style>

<script>
import Progress from "@/components/Progress.vue"


export default {
  name: "my-order-list",
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
    handleClose(){

    },

  },
  data() {
    return {
      dialogVisible: false,
      tableData: [],
    };
  },
};
</script>