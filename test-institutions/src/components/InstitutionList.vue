<template>
  <div class="MD">
    <div class="MDcontent">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column prop="item_id" label="项目编号"></el-table-column>
        <el-table-column prop="other" label="日期" width="180"></el-table-column>
        <el-table-column prop="category" label="项目分类">{{tableData.category == 1 ?'环评服务': (tableData.category == 2 ? '检测服务': '设备服务')}}</el-table-column>
        <el-table-column prop="item_name" label="检测项目" width="100"></el-table-column>
        <el-table-column prop="price" label="检测价格"> </el-table-column>
        <el-table-column prop="discount" label="折扣"> </el-table-column>
        <el-table-column prop="option" label="操作" width="180"> 
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">机构详情</el-button>
              <el-button
              size="mini"
              type="blue"
              @click="handleEdit(scope.$index, scope.row)">选择</el-button>
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
.MD {
  /* display: flex; */
  margin: 30px 0;
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
import axios from "axios";
import { mapState,mapMutations } from "vuex";

export default {
  name: "Demands",
  computed: {
    ...mapState(["user1","baseUrl","choiceInstitutionList"])
  },
  methods: {
    ...mapMutations(['CHOICE_INSTITUION']),

    // 编辑选项函数
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

    // 删除选项函数
    handleDelete(index, row) {
        console.log(index, row);
    },

    //关闭弹窗时执行函数
    handleClose(){

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
          console.log("检索机构项目页面请求发送成功", res);
          // 去除返回数据数组中的末尾
          this.total = res.data.data1.pop().value;
          //将处理好的数据赋值给tableData
          this.tableData = res.data.data1;
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
    };
  },
  created(){
    let sendUrl = 'search/item';
    let sendData = {
      page:this.currentPage,
      size:7,
    };
    this.requestSend(sendUrl,sendData);
  },
};
</script>