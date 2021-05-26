<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-05-11 23:40:14
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-23 16:56:34
-->
<template>
  <div class="test-item-list">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="item_id" label="项目编号"></el-table-column>
        <el-table-column prop="other" label="日期" width="180"></el-table-column>
        <el-table-column prop="category" label="项目分类">
          <template slot-scope="scope">
            <el-tag 
              type="success"
              disable-transitions>{{scope.row.category == '1' ?'环评服务': (scope.row.category == '2' ? '检测服务': '设备服务')}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="item_name" label="检测项目" width="100"></el-table-column>
        <el-table-column prop="price" label="检测价格"> </el-table-column>
        <el-table-column prop="discount" label="折扣"> </el-table-column>
        <el-table-column prop="item_state" label="状态"> 
          <template slot-scope="scope">
            <el-tag 
              :type="scope.row.item_state == 1 ? 'success' : (scope.row.item_state == 2 ? 'danger':'') "
              disable-transitions>{{scope.row.item_state == 0 ?'待上架':(scope.row.item_state == 1 ? '已上架':(scope.row.item_state == 2 ? '已下架' :''))}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作" width="160"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">下架</el-button>
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
        title="编辑项目"
        :visible.sync="dialogVisible"
        width="80%">
        <el-form ref="itemForm" :model="itemForm" label-width="80px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="项目名称">
                  <el-input v-model="itemForm.item_name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="检测费用">
                  <el-input v-model="itemForm.price"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="检测对象">
                  <el-input v-model="itemForm.item_target"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="优惠折扣">
                  <el-input v-model="itemForm.discount"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="检测备注">
                  <el-input v-model="itemForm.item_remarks"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="项目分类">
                  <el-select v-model="itemForm.category" placeholder="请选择">
                    <el-option label="环评服务" value="1"></el-option>
                    <el-option label="检测服务" value="2"></el-option>
                    <el-option label="设备服务" value="3"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item >
                  <el-button @click="submitItem" type="primary">项目修改</el-button>
                </el-form-item>
              </el-col>
            </el-row>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import { mapState} from 'vuex';
import axios from 'axios';
export default {
  name: "test-item-list",
  computed:{
    ...mapState(['user1','baseUrl','institutionInfo'])
  },
  data() {
    return {
      dialogVisible: false,
      tableData:null,
      currentPage:1,
      total:0,
      itemForm:{
        item_name:null,
        price:null,
        category:null,
        discount:null,
        item_target:null,
        item_remarks:null,
      },
    };
  },
  methods: {
    handleClose(){

    },

    handleEdit(index, row) {
        console.log(index, row);
        this.itemForm.item_name = row.item_name;
        this.itemForm.price = row.price;
        this.itemForm.category = row.category;
        this.itemForm.discount = row.discount;
        this.itemForm.item_target = row.item_target;
        this.itemForm.item_remarks = row.item_remarks;
        this.dialogVisible = true;
      },
    handleDelete(index, row) {
        let Url = 'item/delete' 
        this.requestChange(Url,row.item_id,index)
        console.log(index, row);
    },

    // 请求个人需求数据列表函数
    requestMyList(){
      axios({
        method:'post',
        url: this.baseUrl+'search/item',
        data:{
          page:this.currentPage,
          size:7,
          where:{
            item_state:1,
            institution_id:this.institutionInfo.institution_id,
          },
        },
        headers: {
        'token': this.user1.token,
        },
      }).then((res)=>{
        console.log("检测项目列表信息获取成功",res);

        // 去除返回数据数组中的末尾
         this.total = res.data.data1.pop().value;

        //将数据时间戳转换成日期
        let length = res.data.data1.length;
        for(let i=0; i<length; i++){
          res.data.data1[i].other = this.getLocalTime(res.data.data1[i].other/1000);
        }
        //将处理好的数据赋值给tableData
        this.tableData = res.data.data1;
      }).catch((err)=>{
        console.log("检测项目列表信息获取失败",err);
      })
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

    // 状态改变调用函数
    requestChange(sendUrl,id,index){
      axios({
        method:'post',
        url:this.baseUrl+sendUrl,
        headers:{'token': this.user1.token,},
        data:{
          item_id:id,
        },
      }).then((res)=>{
        if(res.data.ret===1){
          this.tableData.splice(index,1);
          this.$notify({title: "消息",message: "操作成功",type: "success",});
          console.log("项目删除成功",res);
        }else{
          console.log("项目删除失败",res);
          this.$notify({title: "消息",message: "操作失败",type: "warning",});
        }
      }).catch((err)=>{
        console.log("项目删除失败",err);
        this.$notify({title: "消息",message: "操作失败",type: "warning",});
      })
    },

    // 提交添加项目函数
    submitItem(){
      this.requestSend('item/update',this.itemForm);
      console.log('AAAAAAAAAAAAA',this.itemForm)
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
          console.log("项目管理页面请求发送成功", res);
          this.natificationControl(res.data.msg,'success')
        })
        .catch(err => {
          console.log("项目管理页面请求发送失败", err);
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
  created(){
    this.requestMyList()
  }
};
</script>