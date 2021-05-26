<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-05-23 19:34:46
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-23 20:49:15
-->
<template>
  <div class="MD77">
    <div class="MDcontent77">
      <el-table
        :data="itemList"
        style="width: 100%"
      >
        <el-table-column prop="item_id" label="项目编号"></el-table-column>
        <el-table-column prop="other" label="日期" width="180"></el-table-column>
        <el-table-column prop="category" label="项目分类">
          <template slot-scope="scope">
            <el-tag 
              type="success"
              disable-transitions>{{scope.row.category == '1' ?'环评服务': (scope.row.category == '2' ? '检测服务': '设备服务')}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="item_name" label="项目名称" width="100"></el-table-column>
        <el-table-column prop="price" label="检测价格"> </el-table-column>
        <el-table-column prop="discount" label="折扣"> </el-table-column>
        <el-table-column prop="option" label="操作" width="180"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleShow(scope.$index, scope.row)">机构详情</el-button>
              <!-- <el-button
              size="mini"
              type="blue"
              @click="handleEdit(scope.$index, scope.row)">选择</el-button> -->
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
          :total="itemTotal">
        </el-pagination>
      </div>
      <el-dialog
        title="机构详情"
        :visible.sync="dialogVisible"
        width="80%">
        <show-institution-info></show-institution-info>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<style scoped>
.MD77 {
  /* display: flex; */
  min-height: 700px;
}
.MDcontent77 {
  width: 90%;
  margin: 30px auto;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

</style>

<script>
import axios from "axios";
import { mapState,mapMutations } from "vuex";
import showInstitutionInfo from './showInstitutionInfo.vue';

export default {
  components: { showInstitutionInfo },
  name: "global-search",
  computed: {
    ...mapState(["user1","baseUrl","choiceInstitutionList","itemList","itemTotal"])
  },
  methods: {
    ...mapMutations(['CHOICE_INSTITUION','SET_INSTITUTION_INFO','SET_ITEM_LIST']),

    // 选择选项函数
    handleEdit(index, row) {
      console.log('选择机构',index, row);
      axios({
        method: "post",
        url: this.baseUrl + 'search/institutionAll',
        headers: { token: this.user1.token },
        data: {
          where:{
            item_id : row.item_id,
          }
        }
      })
        .then(res => {
          console.log("检索机构请求发送成功", res);
          this.CHOICE_INSTITUION(res.data.data1[0].institution_id);
        })
        .catch(err => {
          console.log("检索机构请求发送失败", err);
        });
        // console.log("choiceInstitutionList:",this.choiceInstitutionList);
    },

    handleShow(index, row) {
        console.log(index, row);
        axios({
        method: "post",
        url: this.baseUrl + 'search/institutionAll',
        // headers: { token: this.user1.token },
        data: {
          where:{
            item_id : row.item_id,
          }
        }
      })
        .then(res => {
          console.log("检索机构请求发送成功", res);
          this.SET_INSTITUTION_INFO(res.data.data1[0]);
          this.dialogVisible = true;
        })
        .catch(err => {
          console.log("检索机构请求发送失败", err);
        });
    },

    // 请求发起调用函数
    requestSend(sendUrl, sendData) {
      axios({
        method: "post",
        url: this.baseUrl + sendUrl,
        // headers: { token: this.user1.token },
        data: sendData
      })
        .then(res => {
          console.log("检索机构项目页面请求发送成功", res);
          // 去除返回数据数组中的末尾
          this.total = res.data.data1.pop().value;
          //将处理好的数据赋值给tableData
          this.SET_ITEM_LIST(res.data.data1);
        })
        .catch(err => {
          console.log("检索机构项目页面请求发送失败", err);
        });
    },

    // 当前页处理函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      let sendUrl = 'search/item';
      let sendData = {
       page:this.currentPage,
       size:7,
      }
      this.requestSend(sendUrl,sendData);
    },

  },
  data() {
    return {
      currentPage:1,
      tableData: [],
      total:0,
      dialogVisible:false,
    };
  },
  // created(){
  //   let sendUrl = 'search/item';
  //   let sendData = {
  //     page:this.currentPage,
  //     size:7,
  //   };
  //   this.requestSend(sendUrl,sendData);
  // },
};
</script>