<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-05-11 14:09:59
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-22 21:39:37
-->

<template>
  <div class="add-equipment">
    <div class="add-equipment-box">
      <div class="equipment-information">
        <div class="append-test-equipment">
          <h3>检测仪器添加</h3>
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
                    <el-option label="检测设备" value="2"></el-option>
                    <el-option label="环评设备" value="3"></el-option>
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
              <el-form-item label="设备图片">
                <el-upload
                  :action="baseUrl+equipmentUrl"
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
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="" />
                </el-dialog>
              </el-form-item>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item >
                  <el-button @click="submitEquipment">立即创建</el-button>
                  <el-button @click="reset()">数据重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="test-equipemnt-list">
          <h3>检测设备列表</h3>
          <el-tabs type="card" @tab-click="handleClick" v-model="activeName">
            <el-tab-pane label="待上架" name="first"><test-equipment-list v-if="showFirst"></test-equipment-list></el-tab-pane>
            <el-tab-pane label="已上架" name="second"><equipment-list-up v-if="showSecond"></equipment-list-up></el-tab-pane>
            <el-tab-pane label="已下架" name="third"><equipment-list-delete v-if="showThird"></equipment-list-delete></el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-equipment{
  display: flex;
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .add-equipment-box{
    height: 100%;
    width: 80%;
    margin: 50px auto;
    .equipment-information{
      margin-bottom: 50px;
      .append-test-equipment{
        h3{
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>

<script>
import axios from "axios";
import { mapState } from "vuex";
import TestEquipmentList from './components/test-equipment-list.vue';
import EquipmentListUp from './components/equipment-list-up.vue';
import EquipmentListDelete from './components/equipment-list-delete.vue';
export default {
  name:'add-equipment',
  components:{
    TestEquipmentList,
    EquipmentListUp,
    EquipmentListDelete,
  },
  computed: {
    ...mapState(["user1", "baseUrl","institutionInfo"])
  },
  data() {
    return {
      activeName: 'first',
      showFirst:true,
      showSecond:false,
      showThird:false,
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
      equipmentUrl:'upload/e_pic',
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      fileList: [],
    }
  },
  methods:{
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
      this.handleDelete(file);
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

    // 请求发起调用函数
    requestSend(sendUrl, sendData) {
      axios({
        method: "post",
        url: this.baseUrl + sendUrl,
        headers: { token: this.user1.token },
        data: sendData
      })
        .then(res => {
          console.log("设备管理页面请求发送成功", res);
          this.natificationControl(res.data.msg,'success')
        })
        .catch(err => {
          console.log("设备管理页面请求发送失败", err);
          this.natificationControl('修改失败','warning')
        });
    },

    // 重置表单信息函数
    reset(){
      this.equipmentForm.name = null;
      this.equipmentForm.price = null;
      this.equipmentForm.state = null;
      this.equipmentForm.category = null;
      this.equipmentForm.grade = null;
      this.equipmentForm.information = null;
      this.equipmentForm.institution = null;
    },

    // 提交添加检测仪器函数
    submitEquipment(){
      this.requestSend('upload/e_apply',this.equipmentForm);
    },

    // 切换tabs触发函数
    handleClick() {
        // console.log(tab, event);
      console.log('AAAAAAA',this.activeName);

      if (this.activeName == 'second') {
        this.showSecond = false;
        this.$nextTick(() => {
          this.showSecond = true;
        });
      } else if(this.activeName == 'third') {
        this.showThird = false;
        this.$nextTick(() => {
          this.showThird = true;
        });
      }
      else {
        this.showFirst = false;
        this.$nextTick(() => {
          this.showFirst = true;
        });
      }
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
    this.equipmentForm.address = this.institutionInfo.institution_address;
    this.equipmentForm.region = this.this.institutionInfo.institution_region;
  }
}
</script>