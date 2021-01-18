<template>
  <div class="blackBox">
    <div class="payment">
      <el-row style="height: 160px">
        <el-col :span="6">
          <div class="cash paymentbox" @mouseenter="enter(1)" ref="select1">
            <div class="iconBox">
              <svg t="1610953116367" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15344" width="100%" height="100%"><path d="M511.99693 216.149898c-163.326832 0-295.804053 132.475174-295.804053 295.850102 0 163.281807 132.47722 295.759027 295.804053 295.759027 163.331949 0 295.809169-132.473127 295.809169-295.759027-0.004093-163.374928-132.47722-295.850102-295.809169-295.850102z m106.529245 272.17182v35.516911h-82.845846v35.525098h82.845846v35.434024h-82.845846v71.049173h-47.368844v-71.049173h-82.83766v-35.434024h82.83766v-35.525098h-82.83766v-35.516911h82.83766L358.104981 358.062002h71.049172l82.842777 82.888825 5.485945-5.489014 26.873044-22.248723a62.899562 62.899562 0 0 0-2.64934-1.987261l53.137221-53.163827h71.044056L535.680329 488.321718h82.845846zM511.99693 133.071761c-209.257931 0-378.925169 169.664168-378.925169 378.928239 0 209.261001 169.667238 378.928239 378.925169 378.928239 209.263048 0 378.930285-169.667238 378.930285-378.928239s-169.666214-378.928239-378.930285-378.928239z m0 722.147185c-189.601242 0-343.263971-153.662729-343.263971-343.218946 0-189.647291 153.664775-343.31002 343.263971-343.31002 189.601242 0 343.267041 153.662729 343.267041 343.31002 0 189.556217-153.664775 343.218946-343.267041 343.218946z" fill="#ffffff" p-id="15345"></path></svg>
            </div>
            <p>现金支付</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="bankcard paymentbox" @mouseenter="enter(2)" ref="select2">
            <div class="iconBox">
                <svg t="1610953278576" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16555" width="100%" height="100%"><path d="M601.88 615.183h40.164v39.909H601.88v-39.909z m99.26 0h40.165v39.909H701.14v-39.909z" fill="#ffffff" p-id="16556"></path><path d="M512 63.646c-247 0-447.231 200.23-447.231 447.23 0 246.999 200.232 447.232 447.23 447.232 247 0 447.23-200.233 447.23-447.232 0-247-200.23-447.23-447.23-447.23zM789.144 682.72s-1.876 36.328-37.863 41.444H276.297s-28.481-1.706-34.11-38.545l-1.056-218.816h548.014V682.72z m0-353.296v67.026l-548.014-0.27 1.056-68.803c5.884-29.42 34.281-30.187 34.281-30.187h473.28c39.908 4.093 39.397 32.234 39.397 32.234z" fill="#ffffff" p-id="16557"></path><path d="M651.254 615.183h40.165v39.909h-40.165v-39.909z" fill="#ffffff" p-id="16558"></path></svg>
            </div>
            <p>银行卡支付</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="weixin paymentbox" @mouseenter="enter(3)" ref="select3">
            <div class="iconBox">
              <svg t="1610953857197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17539" width="100%" height="100%"><path d="M404.96679687 616.67070313c-53.84619141 29.90039063-61.8328125-16.78535156-61.83281249-16.78535157l-67.48417969-156.85576172c-25.96640625-74.53564453 22.47363281-33.60673828 22.47363281-33.60673828s41.56259766 31.31894531 73.10654297 50.40263672c31.52636719 19.08457031 67.46308594 5.60302734 67.46308594 5.60302735l441.17929687-202.83222657C798.47685547 161.71455078 664.01826172 95.75 511.79433594 95.75 263.36621094 95.75 62 271.29570312 62 487.85556641 62 612.41855469 128.67910156 723.28378906 232.53857422 795.13964844l-18.72949219 107.24326172s-9.13095703 31.30839844 22.5131836 16.78710937c21.56308594-9.90087891 76.53339844-45.38144531 109.25683593-66.97441406 51.44238281 17.85585938 107.48759766 27.77080078 166.23984375 27.77080078 248.40703125 0 449.81542969-175.54658203 449.81542969-392.10996094 0-62.72666016-16.97167969-121.96494141-47.03554688-174.54638672-140.56083984 84.23789063-467.49902344 280.00371094-509.63203124 303.36064454z m1e-8-1e-8" p-id="17540" fill="#ffffff"></path></svg>
            </div>
            <p>微信支付</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="alipay paymentbox" @mouseenter="enter(4)" ref="select4">
            <div class="iconBox">
              <svg t="1610952598192" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14018" width="100%" height="100%"><path d="M620.544 587.264c54.272-98.304 73.728-192 73.728-192H512V326.144h216.576v-29.696H512V193.024h-98.816v103.424h-197.12v29.696h197.12v69.12H245.76v29.696h339.968c0 5.12 0 5.12-5.12 9.728 0 34.304-24.576 83.456-44.544 123.392-250.88-98.816-325.12-39.424-344.576-29.696-167.424 118.272-9.728 266.24 14.848 261.12 177.152 39.424 290.816-34.304 369.664-128 5.12 5.12 9.728 5.12 14.848 5.12 54.272 29.696 315.392 152.576 315.392 152.576v-147.968c-39.424-0.512-182.272-49.664-285.696-83.968z m-128 44.032c-123.392 157.696-270.848 108.544-295.424 98.304-58.88-14.848-78.848-123.392-5.12-157.696 123.392-39.424 231.424 5.12 310.272 44.544-5.12 10.24-9.728 14.848-9.728 14.848z" fill="#ffffff" p-id="14019"></path></svg>
            </div>
            <p>支付宝支付</p>
          </div>
        </el-col>
      </el-row>

      <div class="explain"><div ref="explain">现金支付是交易中最简单的价款支付方式</div></div>
    </div>
  </div>
</template>

<style>
.blackBox {
  background-color: rgb(250, 248, 248);
  width: 100%;
}
.payment {
  margin: 0 auto;
  padding-top: 100px;
  width: 80%;
  overflow: hidden;
}

.paymentbox {
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
}
.paymentbox:hover {
  width: 160px;
  height: 160px;
  transition: all 0.5s;
}

.paymentbox p{
    width: 80px;
    margin: 20px auto;
}

.iconBox {
  margin: 5px auto;
  /* padding-top:20px; */
  width: 50%;
  height: 50%;
  /* background: #fff; */
}
.cash {
  background: linear-gradient(to left, #b2fefa, #0ed2f7); 
  color: white;
}
.bankcard {
  background: linear-gradient(to left, #74ebd5, #acb6e5);
  color: white;
}
.weixin {
  background: linear-gradient(to left, #4fee4f, #1ce7aa);
  color: white;
}
.alipay {
   background: linear-gradient(to left, #000046, #1cb5e0);
  color: white;
}
.explain {
  width: 100%;
  height: 80px;
  background-color: rgb(255, 255, 255);
  margin: 50px auto;
  overflow: hidden;
}
.explain div{
    margin: 30px 50px;
}
</style>

<script>
export default {
  name: "Payment",
  data() {
    return {};
  },
  methods: {
    enter(n) {
      switch (n) {
        case 1:
          this.$refs.select1.style.width = "160px";
          this.$refs.select1.style.height = "160px";
          this.$refs.select2.style.width = "150px";
          this.$refs.select2.style.height = "150px";
          this.$refs.select3.style.width = "150px";
          this.$refs.select3.style.height = "150px";
          this.$refs.select4.style.width = "150px";
          this.$refs.select4.style.height = "150px";
          this.$refs.explain.innerText = "现金支付是交易中最简单的价款支付方式";
          break;
        case 2:
          this.$refs.select1.style.width = "150px";
          this.$refs.select1.style.height = "150px";
          this.$refs.select2.style.width = "160px";
          this.$refs.select2.style.height = "160px";
          this.$refs.select3.style.width = "150px";
          this.$refs.select3.style.height = "150px";
          this.$refs.select4.style.width = "150px";
          this.$refs.select4.style.height = "150px";
          this.$refs.explain.innerText = "银行卡支付";
          break;
        case 3:
          this.$refs.select1.style.width = "150px";
          this.$refs.select1.style.height = "150px";
          this.$refs.select2.style.width = "150px";
          this.$refs.select2.style.height = "150px";
          this.$refs.select3.style.width = "160px";
          this.$refs.select3.style.height = "160px";
          this.$refs.select4.style.width = "150px";
          this.$refs.select4.style.height = "150px";
          this.$refs.explain.innerText = "微信支付";
          break;
        case 4:
          this.$refs.select1.style.width = "150px";
          this.$refs.select1.style.height = "150px";
          this.$refs.select2.style.width = "150px";
          this.$refs.select2.style.height = "150px";
          this.$refs.select3.style.width = "150px";
          this.$refs.select3.style.height = "150px";
          this.$refs.select4.style.width = "160px";
          this.$refs.select4.style.height = "160px";
          this.$refs.explain.innerText = "支付宝支付";
          break;
        default:
          break;
      }
    },
  },
};
</script>