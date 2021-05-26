<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-05-15 13:58:09
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-23 22:29:09
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
              disable-transitions>{{scope.row.payment==1?'未支付':'已支付'}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作" width="300"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">查看订单</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">支付订单</el-button>
              <el-dialog
                  title="订单详情"
                  :visible.sync="dialogVisible"
                  width="80%"
                  >
                  <el-form
                    :model="orderForm"
                    :rules="rules"
                    ref="orderForm"
                    label-width="100px"
                    class="demo-orderForm"
                    style="align-self: center"
                  >
                    <el-row>
                      <el-col :span="12"
                        ><el-form-item label="订单编号" prop="orders_id">
                          <el-input
                            v-model="orderForm.orders_id"
                          ></el-input> </el-form-item
                      ></el-col>
                      <el-col :span="12">
                        <el-form-item label="创建时间" prop="create_time">
                          <el-input
                            v-model="orderForm.create_time"
                          ></el-input> </el-form-item
                      ></el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="支付状态" prop="payment">
                          <el-input
                            v-model="orderForm.payment"
                          ></el-input> 
                        </el-form-item
                      ></el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="支付类型" prop="p_type">
                          <el-input
                            v-model="orderForm.p_type"
                          ></el-input> 
                        </el-form-item
                      ></el-col>
                      <el-col :span="12">
                        <el-form-item label="其他费用" prop="sundries">
                          <el-input
                            v-model="orderForm.sundries"
                          ></el-input> 
                        </el-form-item
                      ></el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="订单总费用" prop="price">
                          <el-input
                            v-model="orderForm.price"
                          ></el-input> 
                        </el-form-item
                      ></el-col>
                    </el-row>
                    <el-form-item label="订单备注" prop="orders_remarks">
                      <el-input
                        type="textarea"
                        v-model="orderForm.orders_remarks"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="下载报告" prop="report">
                      <el-button @click="downFile">确认下载</el-button>
                    </el-form-item>
                  </el-form>
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
          :page-size="7"
          :current-page.sync="currentPage"
          @current-change="handleCurrentChange"
          layout="prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
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
import { mapState} from 'vuex';
import axios from 'axios';
import download from 'downloadjs';
export default {
  name: "my-order-list",
  computed:{
    ...mapState(['user1','baseUrl','institutionInfo'])
  },
  methods: {
    downFile(){
      download(this.orderForm.report.split(';')[0]);
    },

    handleEdit(index, row) {
        console.log(index, row);
        this.orderForm = row;
        this.dialogVisible = true
      },
    handleDelete(index, row) {
        console.log(index, row);
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.requestMyList();
    },

    // 机构订单数据列表函数
    requestMyList(){
      axios({
        method:'post',
        url: this.baseUrl+'search/userOrders',
        data:{
          page:this.currentPage,
          size:7,
          where:{
            user:this.user1.user_id,
          },
        },
        headers: {
        'token': this.user1.token,
        },
      }).then((res)=>{
        console.log("个人订单信息获取成功",res);

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
        console.log("个人订单信息获取失败",err);
      })
    },

  },
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      total:null,
      currentPage:1,
      orderForm:{
        orders_id:'',
        create_time:'',
        orders_remarks:'',
        p_type:'',
        payment:'',
        price:'',
        sundries:'',
      },
    };
  },
  created(){
    this.requestMyList();
  }
};
</script>