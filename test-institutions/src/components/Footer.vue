<!--
 * @Description: 网站页尾
 * @Author: IMAGINE
 * @Date: 2021-02-22 17:03:15
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-02-22 18:27:09
-->
<template>
  <div class="footer">
    <div class="information">
      <div class="left">
        <div class="company-phone">400-831-0631</div>
        <div class="work-time">周一至周五 9:00—21:00</div>
        <div class="company-address">总部地址：浙江省杭州市西湖区西溪路525号浙大科技园A座西区218-219</div>
        <div class="company-email">加入我们：hr@sciclubs.com</div>
        <div class="other-options">
          <div class="option">公司简介</div>
          <div class="option">合作加盟</div>
          <div class="option">用户协议</div>
          <div class="option">隐私条款</div>
          <div class="option">意见反馈</div>
          <div class="option">新手帮助</div>
          <div class="option">媒体报道</div>
        </div>
      </div>
      <div class="right">
        <div class="logo">
          <div class="QRcode"></div>
          <div class="text">关注环保开拓者公众号</div>
        </div>
        <div class="logo">
          <div class="QRcode"></div>
          <div class="text">进入测试万事屋</div>
        </div>
      </div>
    </div>
    <div class="record">浙ICP备15010793号-1     杭州研趣信息技术有限公司</div>
  </div>
</template>

<style lang="scss" scoped>
.footer{
  font-size: 14px;
  color: rgb(219, 219, 219);
  background-color: rgb(63, 62, 62);
  width: 100%;
  .information{
    width: 80%;
    height: 250px;
    margin: 0 auto;
    padding-top: 60px;
    display: flex;
    .left{
      flex: 1;
      .company-phone{
        font-size: 46px;
        color: white;
        margin-bottom: 20px;
      }
      .company-address{
        margin: 10px 0;
      }
      .other-options{
        margin-top: 20px;
        display: flex;
        .option{
          padding: 0 12px;
          cursor: pointer;
          border-right: 1px solid white;
        }
        .option:hover{
          color: white;
        }
        .option:nth-child(1){
          padding-left: 0;
        }
        .option:nth-child(7){
          padding-right: 0;
          border-right: 1px solid transparent;
        }
      }
    }
    .right{
      flex: 1;
      background-color: blue;
      display: flex;
      justify-items: center;
      .logo{
        background-color: rgb(153, 47, 47);
      }
    }
  }
  .record{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-top: 1px solid white;
  }
}
</style>

<script>
export default {
  name:'Footer',

}
</script>