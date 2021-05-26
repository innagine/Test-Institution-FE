<template>
  <div class="RI">
    <div class="RIcontent" v-if="!active">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="align-self: center"
      >
        <el-row>
          <el-col :span="12"
            ><el-form-item label="联系人" prop="name">
              <el-input
                v-model="ruleForm.name"
                maxlength="10"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="联系号码" prop="number">
              <el-input
                v-model="ruleForm.number"
                maxlength="11"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"
            ><el-form-item label="电子邮箱" prop="email">
              <el-input
                v-model="ruleForm.email"
                maxlength="30"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="身份证号码" prop="ID">
              <el-input
                v-model="ruleForm.ID"
                maxlength="18"
                show-word-limit
              ></el-input> </el-form-item
          ></el-col>
        </el-row>

        <el-form-item label="营业执照" prop="grade">
          <el-upload
            :action="baseUrl+'upload/i_license'"
            list-type="picture-card"
            :headers="{token: this.user1.token}"
            :auto-upload="true"
            :file-list="fileList1"
            :on-success="handleSuccess1"
          >
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
                  @click="handleRemove(file,1)"
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

        <el-form-item label="资质认定证书" prop="grade">
          <el-upload
            :action="baseUrl+'upload/i_credentials'"
            list-type="picture-card"
            :headers="{token: this.user1.token}"
            :auto-upload="true"
            :file-list="fileList2"
            :on-success="handleSuccess2"
          >
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
                  @click="handleRemove(file,2)"
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

        <el-form-item label="认证证书附表" prop="grade">
          <el-upload
            :action="baseUrl+'upload/i_enclosure'"
            list-type="picture-card"
            :headers="{token: this.user1.token}"
            :auto-upload="true"
            :file-list="fileList3"
            :on-success="handleSuccess3"
          >
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
                  @click="handleRemove(file,3)"
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

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交需求</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="proress" v-if="active">
      <el-steps :active="active" finish-status="success">
        <el-step title="待提交"></el-step>
        <el-step title="审核中"></el-step>
        <el-step title="已通过"></el-step>
      </el-steps>
    </div>
    <div class="role-transition" v-if="active === 3">
      <el-divider></el-divider>
      <div class="rinstitution-test">身份审核通过，已获得授权，转换为机构后则不能发布个人需求</div>
      <el-popover
      placement="top-start"
      title="提示"
      width="200"
      trigger="hover"
      content="身份转换操作不可逆，请慎重选择">
        <el-button slot="reference" @click="changRole">确认转换</el-button>
      </el-popover>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "RInstitution",
  computed: {
    ...mapState(["user1", "baseUrl"])
  },
  data() {
    return {
      active: 0, // 步骤进度
      dialogImageUrl: "", // 查看上传文件
      dialogVisible: false, // 查看文件上传弹窗
      disabled: false,
      fileList1: [], // 上传营业执照资料对象数组
      fileList2: [], // 上传资质认定资料对象数组
      fileList3: [], // 上传认证证书资料对象数组
      ruleForm: {
        name: "",
        number: "",
        email: "",
        ID: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { max: 30, message: "长度最多 30 个字符", trigger: "blur" }
        ],
        number: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          { max: 11, message: "长度最多 11 个字符", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入联系人姓名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur"
          }
        ],
        ID: [
          { required: true, message: "请输入联系人身份证号", trigger: "blur" },
          {
            min: 18,
            max: 18,
            message: "长度在 18 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 提交机构认证表单函数
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let url = "upload/i_apply"; // 发送表单基本数据接口
          let sendData = {
            // 发送的数据
            institution_contacts: this.ruleForm.name, // 联系人名字
            contacts_id: this.ruleForm.ID, // 联系人身份证
            contacts_tel: this.ruleForm.number, // 联系人电话
            institution_email: this.ruleForm.email // 联系人email
          };
          this.requestSend(url, sendData); // 请求发送
        } else {
          console.log("error submit!!");
          this.$notify({
            title: "消息",
            message: "请将信息填写完整",
            type: "warning"
          });
          return false;
        }
      });
    },

    // 重置表单数据函数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 请求发送函数
    requestSend(sendUrl, sendData) {
      axios({
        method: "post",
        url: this.baseUrl + sendUrl,
        headers: { token: this.user1.token },
        data: sendData
      })
        .then(res => {
          console.log("机构页面请求发送成功", res);
          this.natificationControl(res.data.msg,'success')
          if(res.data.msg === '修改成功'){
            this.$router.push({path: "/login",});
          }
        })
        .catch(err => {
          console.log("机构页面请求发送失败", err);
          this.natificationControl('申请发送失败','warning')
        });
    },

    // 机构申请进度请求发送函数
    requestFind(sendUrl, sendData) {
      axios({
        method: "post",
        url: this.baseUrl + sendUrl,
        headers: { token: this.user1.token },
        data: sendData
      })
        .then(res => {
          console.log("机构申请进度请求发送成功", res);
          if(res.data.data1[0].i_state === 0){
            this.active = 1;
          }else if(res.data.data1[0].i_state === 1){
            this.active = 3;
          }else if(res.data.data1[0].i_state === 2){
            this.active = 0;
          }
        })
        .catch(err => {
          console.log("机构申请进度请求发送失败", err);
        });
    },
    
    // 删除营业执照上传文件
    handleRemove(file,num) {
      switch(num){
        case 1:
          // 通过循环找出被选中文件对象
          var len = this.fileList1.length;
          var index = 0;
          for(let i = 0; i<len; i++){
            if(this.fileList1[i].uid === file.uid){
              index = i;
            }
          }
          // 清除前端文件数组中被选中的对象
          this.fileList1.splice(index,1);
          // 调用清除后端缓存中的对象函数
          this.handleDelete(file,'delete/i_license');
          break;
        case 2:
          // 通过循环找出被选中文件对象
          len = this.fileList2.length;
          index = 0;
          for(let i = 0; i<len; i++){
            if(this.fileList2[i].uid === file.uid){
              index = i;
            }
          }
          // 清除前端文件数组中被选中的对象
          this.fileList2.splice(index,1);
          // 调用清除后端缓存中的对象函数
          this.handleDelete(file,'delete/i_credentials');
          break;
        case 3:
          // 通过循环找出被选中文件对象
          len = this.fileList3.length;
          index = 0;
          for(let i = 0; i<len; i++){
            if(this.fileList3[i].uid === file.uid){
              index = i;
            }
          }
          // 清除前端文件数组中被选中的对象
          this.fileList3.splice(index,1);
          // 调用清除后端缓存中的对象函数
          this.handleDelete(file,'delete/i_enclosure');
          break;
        default:
          return ;
      }
    },

    // 清除后端缓存中的对象函数
    handleDelete(file,url){
      axios({
        method:'post',
        url:this.baseUrl+url,
        headers:{token: this.user1.token},
        data:{fileName:file.name},
      }).then((res)=>{
        console.log('删除后台缓存中的被选中文件数据成功',res);
      }).catch((err)=>{
        console.log('删除后台缓存中的被选中文件数据失败',err);
      })
    },

    // 查看上传文件函数
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 营业执照文件上传成功执行函数
    handleSuccess1(response, file, fileList){
      this.fileList1.push(file);
      console.log(response, file, fileList);
    },
    // 资质认定文件上传成功执行函数
    handleSuccess2(response, file, fileList){
      this.fileList2.push(file);
      console.log(response, file, fileList);
    },
    // 认证证书文件上传成功执行函数
    handleSuccess3(response, file, fileList){
      this.fileList3.push(file);
      console.log(response, file, fileList);
    },
    // 弹窗控制函数
    natificationControl(myMessage,myType){
        this.$notify({
           title: "通知",
           message: myMessage,
           type: myType,
        });
    },
    // 身份转换函数
    changRole(){
      let sendata = {};
      sendata['user_id'] = this.user1.user_id;
      this.requestSend('user/setRoleIns',sendata);
    }
  },
  created(){
    let Url = 'search/institution'
    this.requestFind(Url,{});
  }
};
</script>


<style scoped>
.RI { 
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.RIcontent {
  height: 100%;
  width: 80%;
  margin: 20px auto;
}
.proress{
  width: 80%;
  margin: 50px auto;
  padding-top: 50px;
}
.el-upload--picture-card {
  width: 60px !important;
  height: 60px !important;
  line-height: 60px !important;
}
.role-transition{
  height: 100%;
  width: 80%;
  margin: 20px auto;
}
.rinstitution-test{
  margin-bottom: 40px;
}
</style>