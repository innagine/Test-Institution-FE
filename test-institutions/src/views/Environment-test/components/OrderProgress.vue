<template>
  <div class="order-progerss-box">
    <div class="order-progerss-list">
      <el-card>
        <h2>1. 提交需求</h2>
        <div class="progerss-li-box">
        <li>下载需求模板</li>
        <li>尽量详细描述需求内容</li>
        <li>提交需求</li>
        </div>
      </el-card>
      <el-card>
        <h2>2. 沟通细节</h2>
        <div class="progerss-li-box">
        <li>我们的对接经理与您联系</li>
        <li>通过电话/微信沟通，确认样品信息及测试需求</li>
        <li>确认测试时间、价格等</li>
        </div>
      </el-card>
      <el-card>
        <h2>3. 付款确认</h2>
        <div class="progerss-li-box">
        <li>对接经理报价</li>
        <li>您可以登录官网：个人中心>我的订单</li>
        <li>确认订单报价并付款，支付信用支付</li>
        </div>
      </el-card>
      <el-card>
        <h2>4. 寄送样品</h2>
        <div class="progerss-li-box">
        <li>按照要求寄送样品到指定地址</li>
        </div>
      </el-card>
      <el-card>
        <h2>5. 下载结果</h2>
        <div class="progerss-li-box">
        <li>测试完成后，登录官网：个人中心>我的订单，下载结果</li>
        <li>如果对结果有异议，我们竭诚为您提供售后服务</li>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.order-progerss-box {
  margin: 0 auto;
}
.order-progerss-list {
  display: flex;
  justify-content: center;
}

.el-card {
  height: 300px;
  width: 220px;
  margin: 0 20px;
  text-align:center;
}
li{
    text-align:justify;
    margin-top: 20px;
    font-size: 14px;
}
</style>

<script>
export default {
  name: "OrderProgerss",
};
</script>