<template>
  <div class="payment ">
    <el-row style="height: 160px;">
      <el-col :span="6">
         <div class="cash paymentbox" @mouseenter="enter">
            现金支付</div> 
      </el-col>
      <el-col :span="6">
        <div class="bankcard paymentbox"> 
            银行卡支付 </div>
      </el-col>
      <el-col :span="6">
         <div class="weixin paymentbox">
            微信支付</div>
      </el-col>
      <el-col :span="6">
        <div class="alipay paymentbox">
            支付宝支付</div>
      </el-col>
    </el-row>

      <div class="explain"></div>

  </div>
</template>

<style>
.payment{
    margin: 0 auto;
    width: 80%;
    overflow: hidden;
    background-color: rgb(226, 226, 226);
}

.paymentbox{
    margin: 0 auto;
    width: 150px;
    height: 150px;
    border-radius: 10px;
}
.paymentbox:hover{
    width: 160px;
    height: 160px;
    transition: all 0.5s;
}

.cash{
    background: red;
    
}
.bankcard{
    background: rgb(102, 155, 252);

}
.weixin{
    background: rgb(224, 205, 27);

}
.alipay{
    background: rgb(95, 228, 62);
    
}
.explain{
    width: 100%;
    height: 80px;
    background-color: blue;
    margin: 50px auto;
}


</style>

<script>
export default {
    name:'Payment',
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>