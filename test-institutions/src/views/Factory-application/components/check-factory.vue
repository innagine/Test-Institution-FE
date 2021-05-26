<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-05-22 10:35:34
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-22 14:44:29
-->

<template>
  <div class="check-factory">
    <el-form
        :model="factoryForm"
        ref="factoryForm"
        label-width="100px"
        class="demo-factoryForm"
        style="align-self: center"
      >
        <el-row>
          <el-col :span="12"
            ><el-form-item label="联系人" prop="factory_contacts">
              <el-input v-model="factoryForm.factory_contacts"></el-input> 
            </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="联系号码" prop="contacts_tel">
              <el-input v-model="factoryForm.contacts_tel"></el-input> 
            </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><el-form-item label="电子邮箱" prop="factory_email">
              <el-input
                v-model="factoryForm.factory_email"></el-input> 
              </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="身份证号码" prop="contacts_id">
              <el-input v-model="factoryForm.contacts_id"></el-input> 
            </el-form-item
          ></el-col>
        </el-row>
        <el-form-item label="营业执照" prop="factory_license">
          <el-button @click="downloadFile(1)">下载审核</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import download from 'downloadjs'
export default {
  name:'check-factory',
  computed:{
    ...mapState(['factoryInfo']),
  },
  data(){
    return {
      factoryForm:null,
    }
  },
  methods:{
    downloadFile(index){
      if(index===1 && this.factoryInfo.factory_license){
        download(this.factoryInfo.factory_license.split(';')[0]);
      } else{
        this.natificationControl('该文件用户没有上传','warning');
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
    this.factoryForm = this.factoryInfo;
  }
}
</script>

<style lang="scss" scoped>
.check-factory{
  width: 90%;
  margin: 20px auto;
}
</style>