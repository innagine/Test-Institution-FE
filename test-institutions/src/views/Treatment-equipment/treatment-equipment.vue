<!--
 * @Description: file 治理设备
 * @Author: IMAGINE
 * @Date: 2021-02-24 14:18:47
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-23 19:29:17
-->
<template>
  <div class="treatment-equipment">
    <rotation-chart :urlList="list"></rotation-chart>
    <div class="t-select">
        <div class="t-option" ref="select1" @click="show(1)">环评治理设备</div>
        <!-- <div class="t-option" ref="select2" @click="show(2)">废水处理设备</div>
        <div class="t-option" ref="select3" @click="show(3)">粉尘治理设备</div> -->
    </div>
    <router-view></router-view>
    <div class="post-demand">
      <div class="text">如果找不到仪器，您可以发布您的需求，由我们来帮您挑选最优的服务商</div>
      <div class="button" @click="tofind">发布需求</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

/* 选择展示内容的样式 */
.t-select {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  /* box-shadow: h-shadow v-shadow blur spread color inset; */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  color: #409eff;
  font-weight: 400;
  .t-option {
    margin: 40px 40px;
    cursor: pointer;
  }
  .t-option:hover {
    color: #76b9fc;
  }
}

/* 发布需求模块的样式 */
.post-demand{
  width: 70%;
  margin: 20px auto;
  padding: 0 20px;
  border: 2px solid #16befc;
  display: flex;
  align-items: center;
  .text{
    flex: 6;
    font-size: 18px;
    color: rgb(170, 170, 170);
  }
  .button{
    flex: 1;
    margin: 20px auto;
    padding: 10px 0;
    text-align: center;
    width: 100%;
    background-image: linear-gradient(to right, #51a4db, #a8e4fa);
    color: #fff;
  }
  .button:hover {
  background: #a8e4fa;
  }
}
</style>

<script>
import axios from "axios";
import { mapState,mapMutations } from "vuex";
import RotationChart from '../../components/RotationChart.vue';
export default {
  name:'treatment-equipment',
  components:{
    RotationChart,
  },
  computed: {
    ...mapState(["baseUrl"])
  },
  data(){
    return{
      list:[{"URl":require("./images/machine.png")},],
    }
  },
  created(){
    this.requestSend('search/equipmentAll',{ where:{ category: 3 } });
    this.$router.push('/equipments');
  },
  methods:{
    ...mapMutations(['SET_EQUIPMENTLIST']),
    tofind(){
      // this.$router.push('/equipments');
    },
    show(n){
      switch (n) {
        case 1:
          this.$refs.select1.style.fontWeight = "600";
          this.$refs.select2.style.fontWeight = "normal";
          this.$refs.select3.style.fontWeight = "normal";
          this.requestSend('search/equipmentAll',{ where:{ category: 3 } });
          break;
        case 2:
          this.$refs.select1.style.fontWeight = "normal";
          this.$refs.select2.style.fontWeight = "600";
          this.$refs.select3.style.fontWeight = "normal";
          this.requestSend('search/equipmentAll',{});        
          break;
        case 3:
          this.$refs.select1.style.fontWeight = "normal";
          this.$refs.select2.style.fontWeight = "normal";
          this.$refs.select3.style.fontWeight = "600";
          this.requestSend('search/equipmentAll',{});         
          break;
        
        default:
          break;
      }
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
          console.log("设备请求发送成功", res);
          res.data.data1.pop();
          this.getURl(res.data.data1);
          this.SET_EQUIPMENTLIST(res.data.data1);
        })
        .catch(err => {
          console.log("设备请求发送失败", err);
        });
    },

    getURl(array){
      let len  = array.length;
      for(let i = 0; i<len; i++){
        array[i].picture = array[i].picture.replace(";","")
      }
    }
  },
}
</script>