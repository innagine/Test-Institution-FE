<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-03-01 10:22:12
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-03 16:41:54
-->
<template>
  <div class="service-scope">
     <ul class="ul-1">
       <li @click="show(1)" ref="select1">污水除臭工程</li>
       <li @click="show(2)" ref="select2">废气处理工程</li>
       <li @click="show(3)" ref="select3">废水处理工程</li>
       <li @click="show(4)" ref="select4">油水分离工程</li>
     </ul>
     <div class="service-item">
       <div class="left">
          <img src="../images/sewage.jpg">
          <div class="l-title">垃圾、污水除臭工程</div>
          <div class="introduce">方案简介 : 垃圾臭气来源、垃圾臭气处理方案设计原则、垃圾臭气处理工程范围及标准、垃圾臭气处理排放标准。</div>
       </div>
       <div class="right">
         <div class="item">
           <div class="title">方案设计原则</div>
           <div class="advantages">
             <ul>
               <li>科学合理的收集方式</li>
               <li>采用新技术、新设备</li>
               <li>避免二次污染</li>
               <li>严格执行</li>
               <li>节能降耗</li>
             </ul>
           </div>
           <div class="price">2500元起</div>
         </div>
         <div class="item">
           <div class="title">工程范围及标准</div>
           <div class="advantages">
             <ul>
               <li>科学合理的收集方式</li>
               <li>采用新技术、新设备</li>
               <li>避免二次污染</li>
               <li>严格执行</li>
               <li>节能降耗</li>
             </ul>
           </div>
           <div class="price">2500元</div>
         </div>
         <div class="item">
           <div class="title">处理排放标准</div>
           <div class="advantages">
             <ul>
               <li>科学合理的收集方式</li>
               <li>采用新技术、新设备</li>
               <li>避免二次污染</li>
               <li>严格执行</li>
               <li>节能降耗</li>
             </ul>
           </div>
           <div class="price">2500元</div>
         </div>
       </div>
     </div>
     <div class="button">立即预约</div>
  </div>
</template>

<style lang="scss" scoped>
.service-scope{
  .ul-1{
    text-align:center;
    width: 80%;
    margin: 0 auto;
    list-style-type: none;
    font-size: 16px;
    border-bottom: 1px solid rgb(196, 196, 196);
    margin-bottom: 20px;
    li{
      display: inline-block;
      margin: 0 45px;
      padding: 0 0 30px 0;
      cursor:pointer;
      // height: 100px;
      // background-image: url(../../../svg/line.svg) ;
      background-size: 100px 80px;
      background-position: center -42%;
    }
    li:hover{
      color: rgb(117, 186, 243);
    }
  }
  .service-item{
    width: 80%;
    height: 250px;
    margin: 40px auto;
    display: flex;
    .left{
      flex: 2;
      color: rgb(255, 250, 250);
      .l-title{
        position: relative;
        top: -90%;
        left: 5%;
        font-size: 18px;
        font-weight: 600;
      }
      .introduce{
        width: 80%;
        position: relative;
        top: -80%;
        left: 5%;
        font-size: 14px;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .right{
      flex: 3;
      display: flex;
      .item{
        margin-left: 20px;
        flex: 1;
        background-color: white;
        box-shadow: 1px 1px 4px 1px rgb(224, 224, 224);
        .title{
          width: 100%;
          height: 50px;
          font-size: 18px;
          font-weight: 400;
          color: white;
          text-align: center;
          line-height: 50px;
          background-image: linear-gradient(to right, #51a4db, #a8e4fa);
        }
        .advantages{
          width: 100%;
          height: 160px;
          ul{
            margin: 0;
            list-style-type: none;
            padding: 0 0 0 20px;
            color: rgb(194, 191, 191);
            li{
              padding-left: 30px;
              background-image: url(../../../svg/right.svg);
              background-repeat: no-repeat;
              background-size: 20px 20px;
              background-position: 0 center;
              margin-top: 10px;
            }
          }
        }
        .price{
          padding-left: 50px;
          color: #51a4db;
        }
      }
    }
  }
  .button{
    margin: 80px auto;
    padding: 10px 0;
    text-align: center;
    font-weight: 600;
    width: 200px;
    background-image: linear-gradient(to right, #51a4db, #a8e4fa);
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
  }
  .button:hover {
    background: #a8e4fa;
  }
}
</style>

<script>
export default {
  name:'service-scope',
  methods:{
    show(n){
      switch (n) {
        case 1:
          this.$refs.select1.style.fontWeight = "600";
          this.$refs.select1.style.color = "#51a4db";
          this.$refs.select1.style.backgroundImage = "url(/img/line.4fa26ffc.svg)";
          
          this.$refs.select2.style.fontWeight = "normal";
          this.$refs.select2.style.color = "black";
          this.$refs.select2.style.backgroundImage = "none"; 

           this.$refs.select3.style.fontWeight = "normal";
          this.$refs.select3.style.color = "black";
          this.$refs.select3.style.backgroundImage = "none";

          this.$refs.select4.style.fontWeight = "normal";
          this.$refs.select4.style.color = "black";
          this.$refs.select4.style.backgroundImage = "none";
          break;
        case 2:
          this.$refs.select1.style.fontWeight = "normal";
          this.$refs.select1.style.color = "black";
          this.$refs.select1.style.backgroundImage = "none";
          
          this.$refs.select2.style.fontWeight = "600";
          this.$refs.select2.style.color = "#51a4db";
          this.$refs.select2.style.backgroundImage = "url(/img/line.4fa26ffc.svg)"; 

           this.$refs.select3.style.fontWeight = "normal";
          this.$refs.select3.style.color = "black";
          this.$refs.select3.style.backgroundImage = "none";

          this.$refs.select4.style.fontWeight = "normal";
          this.$refs.select4.style.color = "black";
          this.$refs.select4.style.backgroundImage = "none";          
          break;
        case 3:
          this.$refs.select1.style.fontWeight = "normal";
          this.$refs.select1.style.color = "black";
          this.$refs.select1.style.backgroundImage = "none";
          
          this.$refs.select2.style.fontWeight = "normal";
          this.$refs.select2.style.color = "black";
          this.$refs.select2.style.backgroundImage = "none"; 

           this.$refs.select3.style.fontWeight = "600";
          this.$refs.select3.style.color = "#51a4db";
          this.$refs.select3.style.backgroundImage = "url(/img/line.4fa26ffc.svg)";

          this.$refs.select4.style.fontWeight = "normal";
          this.$refs.select4.style.color = "black";
          this.$refs.select4.style.backgroundImage = "none";         
          break;
        case 4:
          this.$refs.select1.style.fontWeight = "normal";
          this.$refs.select1.style.color = "black";
          this.$refs.select1.style.backgroundImage = "none";
          
          this.$refs.select2.style.fontWeight = "normal";
          this.$refs.select2.style.color = "black";
          this.$refs.select2.style.backgroundImage = "none"; 

          this.$refs.select3.style.fontWeight = "normal";
          this.$refs.select3.style.color = "black";
          this.$refs.select3.style.backgroundImage = "none";

          this.$refs.select4.style.fontWeight = "600";
          this.$refs.select4.style.color = "#51a4db";
          this.$refs.select4.style.backgroundImage = "url(/img/line.4fa26ffc.svg)";          
          break;
        default:
          break;
      }
    }
  }
}
</script>