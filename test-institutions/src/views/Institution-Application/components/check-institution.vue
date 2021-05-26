<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-05-22 10:35:34
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-22 11:24:13
-->

<template>
  <div class="check-institution">
    <el-form
        :model="institutionForm"
        ref="institutionForm"
        label-width="100px"
        class="demo-institutionForm"
        style="align-self: center"
      >
        <el-row>
          <el-col :span="12"
            ><el-form-item label="联系人" prop="institution_contacts">
              <el-input v-model="institutionForm.institution_contacts"></el-input> 
            </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="联系号码" prop="contacts_tel">
              <el-input v-model="institutionForm.contacts_tel"></el-input> 
            </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><el-form-item label="电子邮箱" prop="institution_email">
              <el-input
                v-model="institutionForm.institution_email"></el-input> 
              </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="身份证号码" prop="contacts_id">
              <el-input v-model="institutionForm.contacts_id"></el-input> 
            </el-form-item
          ></el-col>
        </el-row>
        <el-form-item label="营业执照" prop="institution_license">
          <el-button @click="downloadFile(1)">下载审核</el-button>
        </el-form-item>
        <el-form-item label="资质认定证书" prop="qualifications">
          <el-button @click="downloadFile(2)">下载审核</el-button>
        </el-form-item>
        <el-form-item label="认证证书附表" prop="enclosure">
          <el-button @click="downloadFile(3)">下载审核</el-button>
        </el-form-item> 
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import download from 'downloadjs'
export default {
  name:'check-institution',
  computed:{
    ...mapState(['institutionInfo']),
  },
  data(){
    return {
      institutionForm:null,
    }
  },
  methods:{
    downloadFile(index){
      if(index===1 && this.institutionInfo.institution_license){
        download(this.institutionInfo.institution_license.split(';')[0]);
      }else if(index===2 && this.institutionInfo.qualifications){
        download(this.institutionInfo.qualifications.split(';')[0]);
      }else if(index===3 && this.institutionInfo.enclosure){
        download(this.institutionInfo.enclosure.split(';')[0]);
      }
      else{
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
    this.institutionForm = this.institutionInfo;
  }
}
</script>

<style lang="scss" scoped>
.check-institution{
  width: 90%;
  margin: 20px auto;
}
</style>