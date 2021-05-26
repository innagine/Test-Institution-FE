<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2020-12-23 15:01:06
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-23 22:16:25
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
              disable-transitions>{{scope.row.payment == 1 ?'未支付':'已支付'}}</el-tag>
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
              @click="handleUp(scope.$index, scope.row)">填入报告</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete1(scope.$index, scope.row)">删除</el-button>
              <el-dialog
                  title="订单详情"
                  :visible.sync="dialogVisible"
                  width="80%"
                  >
                  <el-form
                    :model="orderForm"
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
                          >{{orderForm.payment == 1 ?'未支付':'已支付'}}</el-input> 
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
                      <el-button @click="downloadReport">确认下载</el-button>
                    </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
              </el-dialog>
              <el-dialog
                  title="上传报告"
                  :visible.sync="dialogVisible1"
                  width="80%"
                  >
                  <div class="add-report">
                    <el-upload
                      :action="baseUrl+reportURL"
                      :headers="{token: user1.token}"
                      list-type="picture-card"
                      :auto-upload="true"
                      :file-list="fileList"
                      :on-success="handleSuccess">
                      <i slot="default" class="el-icon-plus"></i>
                      <div slot="file" slot-scope="{ file }">
                        <img
                          class="el-upload-list__item-thumbnail"
                          :src="file.url"
                          alt=""
                        />
                        <span class="el-upload-list__item-actions">
                          <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                          >
                            <i class="el-icon-zoom-in"></i>
                          </span>
                          <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file)"
                          >
                            <i class="el-icon-delete"></i>
                          </span>
                        </span>
                      </div>
                    </el-upload>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="withdrawReport">取 消</el-button>
                    <el-button type="primary" @click="senReport">确 定</el-button>
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
  name: "Myoeder",
  computed:{
    ...mapState(['user1','baseUrl','institutionInfo'])
  },
  methods: {
    downloadReport(){
      download(this.orderForm.report.split(';')[0])
    },
    senReport(){
      this.dialogVisible1 = false;
      this.requestSend('upload/o_apply',{orders_id:this.currentID});
    },
    withdrawReport(){
      this.dialogVisible1 = false;
    },

    // 删除上传文件
    handleRemove(file) {
      // 通过循环找出被选中文件对象
      let len = this.fileList.length;
      let index = 0;
      for(let i = 0; i<len; i++){
        if(this.fileList[i].uid === file.uid){
          index = i;
        }
      }
      // 清除前端文件数组中被选中的对象
      this.fileList.splice(index,1); 

      // 清除后端缓存中的对象
      // this.handleDelete(file);
    },
    // 查看上传文件函数
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 文件上传成功执行函数
    handleSuccess(response, file, fileList){
      this.fileList.push(file);
      console.log(response, file, fileList);
    },
    // 清除后端缓存中的对象函数
    handleDelete(file){
      axios({
        method:'post',
        url:this.baseUrl+'delete/e_pic',
        headers:{token: this.user1.token},
        data:{fileName:file.name},
      }).then((res)=>{
        console.log('删除后台缓存中的被选中文件数据成功',res);
      }).catch((err)=>{
        console.log('删除后台缓存中的被选中文件数据失败',err);
      })
    },

    handleEdit(index, row) {
        console.log(index, row);
        this.orderForm = row;
        this.dialogVisible = true
      },
    handleDelete1(index, row) {
        console.log(index, row);
    },
    handleUp(index, row){
      console.log(index, row);
      this.currentID = row.orders_id;
      this.dialogVisible1 = true
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.requestMyList();
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

        //将数据时间戳转换成日期
        let length = res.data.data1.length;
        for(let i=0; i<length; i++){
          res.data.data1[i].create_time = this.getLocalTime(res.data.data1[i].create_time/1000);
        }
        //将处理好的数据赋值给tableData
        this.tableData = res.data.data1;
      }).catch((err)=>{
        console.log("机构订单信息获取失败",err);
      })
    },

    // 转换时间戳函数
    getLocalTime(nS) { 
       return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
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
          console.log("上传报告请求发送成功", res);
          this.natificationControl(res.data.msg,'success')
        })
        .catch(err => {
          console.log("上传报告请求发送失败", err);
          this.natificationControl('修改失败','warning')
        });
    },

    // 弹窗控制函数
    natificationControl(myMessage,myType){
        this.$notify({
           title: "通知",
           message: myMessage,
           type: myType,
        });
    },

  },
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      tableData: [],
      fileList:[],
      disabled: false,
      currentPage:1,
      reportURL:'upload/o_report',
      currentID:null,
      total:null,
      orderForm:{
        orders_id:'',
        create_time:'',
        orders_remarks:'',
        p_type:'',
        payment:'',
        price:'',
        sundries:'',
        report:''
      },
    };
  },
  created(){
    this.requestMyList();
  }
};
</script>