<!--
 * @Description: file 检测仪器列表（被下架）
 * @Author: IMAGINE
 * @Date: 2021-04-22 11:26:13
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-19 17:23:34
-->
<template>
  <div class="test-equipment-list">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="设备编号"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="category" label="设备分类" width="120">{{ tableData.category == 1 ? '不可出售':'可以出售'}}</el-table-column>
        <el-table-column prop="name" label="设备名称" width="120"></el-table-column>
        <el-table-column prop="price" label="检测价格"> </el-table-column>
        <el-table-column prop="discount" label="折扣"> </el-table-column>
        <el-table-column prop="grade" label="设备等级">{{tableData.grade == 1 ? '基础设备':'高级设备'}}</el-table-column>
        <el-table-column prop="state" label="状态">  
          <template>
            <el-tag
              type="danger"
              disable-transitions>已下架</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="option" label="操作" width="160"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="success"
              @click="handleUp(scope.$index, scope.row)">上架</el-button>
              <el-dialog
                  title="编辑项目"
                  :visible.sync="dialogVisible"
                  width="80%">
                  <el-form ref="equipmentForm" :model="equipmentForm" label-width="80px">
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="设备名称">
                          <el-input v-model="equipmentForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="设备简介">
                          <el-input v-model="equipmentForm.information"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="设备价格">
                          <el-input v-model="equipmentForm.price"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="设备折扣">
                          <el-input v-model="equipmentForm.discount"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="设备分类">
                          <el-select v-model="equipmentForm.category" placeholder="请选择">
                            <el-option label="不可出售" value="1"></el-option>
                            <el-option label="可以出售" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="设备等级">
                          <el-select v-model="equipmentForm.grade" placeholder="请选择">
                            <el-option label="基础设备" value="1"></el-option>
                            <el-option label="高级设备" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-form-item label="设备图片" v-for="(item,index) in equipmentPicture" :key="index">
                        <el-image :src='item'></el-image>
                      </el-form-item>
                    </el-row>
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
</template>

<style lang="scss" scoped>

</style>

<script>
import { mapState} from 'vuex';
import axios from 'axios';

export default {
  name: "equipment-list-delete",
  computed:{
    ...mapState(['user1','baseUrl','institutionInfo'])
  },
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      currentPage:1,
      total:0,
      equipmentForm:{
        name:'',
        price:'',
        address:'',
        category:'',
        grade:'',
        information:'',
        institution:'',
        region:'',
        discount:'',
      },
    };
  },
  methods: {
    handleEdit(index, row) {
        console.log(index, row);
        if(row.picture){
          this.equipmentPicture = row.picture.split(';')
          this.equipmentPicture.pop();
        }
        this.equipmentForm =row;
        this.dialogVisible = true
      },
    handleUp(index, row) {
        let Url = 'equipment/readied' 
        this.requestChange(Url,row.id,index)
        console.log(index, row);
    },
    handleClose(){},

    // 请求个人需求数据列表函数
    requestMyList(){
      // 获取个人需求列表
      axios({
        method:'post',
        url: this.baseUrl+'search/equipmentAll',
        data:{
          page:this.currentPage,
          size:7,
          where:{
            state:2,
            institution:this.institutionInfo.institution_id,
          },
        },
        headers: {
        'token': this.user1.token,
        },
      }).then((res)=>{
        console.log("检测仪器列表信息获取成功",res);

        // 去除返回数据数组中的末尾
         this.total = res.data.data1.pop().value;

        //将数据时间戳转换成日期
        let length = res.data.data1.length;
        for(let i=0; i<length; i++){
          res.data.data1[i].date = this.getLocalTime(res.data.data1[i].date/1000);
        }
        //将处理好的数据赋值给tableData
        this.tableData = res.data.data1;
      }).catch((err)=>{
        console.log("检测仪器列表信息获取失败",err);
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

    // 弹窗控制函数
    natificationControl(myMessage,myType){
        this.$notify({
           title: "通知",
           message: myMessage,
           type: myType,
        });
    },

    // 状态改变调用函数
    requestChange(sendUrl,Id,index){
      axios({
        method:'post',
        url:this.baseUrl+sendUrl,
        headers:{'token': this.user1.token,},
        data:{
          id:Id,
        },
      }).then((res)=>{
        if(res.data.ret===1){
          this.tableData.splice(index,1);
          this.$notify({title: "消息",message: "操作成功",type: "success",});
          console.log("设备上架成功",res);
        }else{
          console.log("设备上架失败",res);
          this.$notify({title: "消息",message: "操作失败",type: "warning",});
        }
      }).catch((err)=>{
        console.log("设备上架失败",err);
        this.$notify({title: "消息",message: "操作失败",type: "warning",});
      })
    },
  },
  created(){
    this.requestMyList()
  }
};
</script>