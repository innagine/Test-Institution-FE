<!--
 * @Description: file 检测仪器列表（可操作）
 * @Author: IMAGINE
 * @Date: 2021-04-22 11:26:13
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-04-22 11:29:05
-->
<template>
  <div class="test-equipment-list">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="equipment_id" label="仪器编号" width="180"></el-table-column>
        <el-table-column prop="date" label="日期" width="120"></el-table-column>
        <el-table-column prop="matter" label="检测仪器" width="120"></el-table-column>
        <el-table-column prop="price" label="检测价格"> </el-table-column>
        <el-table-column prop="discount" label="折扣"> </el-table-column>
        <el-table-column prop="institution" label="检测机构"> </el-table-column>
        <el-table-column prop="institution" label="检测设备"> </el-table-column>
        <el-table-column prop="state" label="状态"> 
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.state === '已完成' ? 'success' : (scope.row.state === '已退回' ? 'danger':'') "
              disable-transitions>{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作" width="300"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              <el-dialog
                  title="编辑项目"
                  :visible.sync="dialogVisible"
                  width="80%"
                  :before-close="handleClose">
                  待填充内容
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
              </el-dialog>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Progress from "@/components/Progress.vue"


export default {
  name: "test-item-list",
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
          equipment_id: 11273913 ,
          date: "2016-05-02",
          matter: "水",
          institution: "上海市普陀区五邑大学",
          state:'待检测'
        },
        {
          equipment_id: 11273914 ,
          date: "2016-05-02",
          matter: "土",
          institution: "上海市普陀区五邑大学",
          state:'待检测'
        },{
          equipment_id: 11273915 ,
          date: "2016-05-02",
          matter: "气",
          institution: "上海市普陀区五邑大学",
          state:'待检测'
        },{
          equipment_id: 11273916 ,
          date: "2016-05-02",
          matter: "大米",
          institution: "上海市普陀区五邑大学",
          state:'待检测'
        },
        {
          equipment_id: 11273917 ,
          date: "2016-05-02",
          matter: "大米",
          institution: "上海市普陀区五邑大学",
          state:'待检测'
        },
      ],
    };
  },
};
</script>