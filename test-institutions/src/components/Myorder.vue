<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2020-12-23 15:01:06
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-15 14:59:26
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
import { mapState} from 'vuex';
import axios from 'axios';

export default {
  name: "MyDemand",
  components:{
    Progress,
  },
  computed:{
    ...mapState(['user1','baseUrl','institutionInfo'])
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

    // 机构订单数据列表函数
    requestMyList(){
      axios({
        method:'post',
        url: this.baseUrl+'search/insOrders',
        data:{
          page:this.currentPage,
          size:7,
          where:{
            institution:this.institutionInfo.institution_id,
          },
        },
        headers: {
        'token': this.user1.token,
        },
      }).then((res)=>{
        console.log("机构订单信息获取成功",res);

        // 去除返回数据数组中的末尾
         this.total = res.data.data1.pop().value;

        // //将数据时间戳转换成日期
        // let length = res.data.data1.length;
        // for(let i=0; i<length; i++){
        //   res.data.data1[i].date = this.getLocalTime(res.data.data1[i].date/1000);
        // }
        //将处理好的数据赋值给tableData
        this.tableData = res.data.data1;
      }).catch((err)=>{
        console.log("机构订单信息获取失败",err);
      })
    },

  },
  data() {
    return {
      dialogVisible: false,
      tableData: [],
    };
  },
  created(){
    this.requestMyList();
  }
};
</script>