<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-03-01 10:22:12
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-07 22:43:14
-->
<template>
  <div class="service-scope">
     <ul class="ul-1">
       <li @click="show(1)" ref="select1">生物扫描电镜（SEM）</li>
       <li @click="show(2)" ref="select2">生物透射电镜（TEM）</li>
       <li @click="show(3)" ref="select3">荧光定量PCR</li>
       <li @click="show(4)" ref="select4">流式细胞仪</li>
     </ul>
     <div class="service-item">
       <div class="left">
          <img :src="serviceItem.url">
          <div class="l-title">{{serviceItem.title}}</div>
          <div class="introduce">{{serviceItem.introduce}}</div>
       </div>
       <div class="right">
         <div class="item">
           <div class="title">服务周期</div>
           <div class="advantages">
             <ul v-for="(item,index) in serviceItem.designPhilosophy" :key="index">
               <li>{{item}}</li>
             </ul>
           </div>
         </div>
         <div class="item">
           <div class="title">交付内容</div>
           <div class="advantages">
             <ul v-for="(item,index) in serviceItem.engineeringStandard" :key="index">
               <li>{{item}}</li>
             </ul>
           </div>
         </div>
         <div class="item">
           <div class="title">服务流程</div>
           <div class="advantages">
             <ul v-for="(item,index) in serviceItem.emissionStandard" :key="index">
               <li>{{item}}</li>
             </ul>
           </div>
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
    // height: 250px;
    margin: 40px auto;
    .left{
      height: 400px;
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
      .item{
        // margin-left: 20px;
        margin-top: 20px;
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
  data(){
    return {
      serviceItem:{
        url:require('../images/jellyfish.jpg'),
          title:'生物扫描电镜（SEM）',
          introduce:'生物扫描电镜主要利用二次电子成像拍摄材料的表面三维形貌情况，拍摄照片为黑白照片；一般用来观察细胞外表面的变形以及受损情况等，也可以观察材料在细胞表面的分布情况，广泛应用于检测生物样品、非均相有机材料、无机材料等微米、纳米范围内的表面特征。',
          designPhilosophy:['一般为样品接收后的2周左右，具体实验周期及送样时间请与科学指南针工作人员沟通确认，谢谢！'],
          engineeringStandard:['每样提供8-10张拍摄图片，结果反馈请在测试完成一周内，不建议回收样品，如有需要请提前反馈给指南针工作人员。'],
          emissionStandard:['1·提交需求', '2·沟通细节','3·付款确认','4·下载结果'],
      },
      itemList:[
        {
          url:require('../images/jellyfish.jpg'),
          title:'生物扫描电镜（SEM）',
          introduce:'生物扫描电镜主要利用二次电子成像拍摄材料的表面三维形貌情况，拍摄照片为黑白照片；一般用来观察细胞外表面的变形以及受损情况等，也可以观察材料在细胞表面的分布情况，广泛应用于检测生物样品、非均相有机材料、无机材料等微米、纳米范围内的表面特征。',
          designPhilosophy:['一般为样品接收后的2周左右，具体实验周期及送样时间请与科学指南针工作人员沟通确认，谢谢！'],
          engineeringStandard:['每样提供8-10张拍摄图片，结果反馈请在测试完成一周内，不建议回收样品，如有需要请提前反馈给指南针工作人员。'],
          emissionStandard:['1·提交需求', '2·沟通细节','3·付款确认','4·下载结果'],
        },
        {
          url:require('../images/jellyfish.jpg'),
          title:'透射电子显微镜TEM',
          introduce:'型号：FEI Tecnai F20, TF30，JEOL JEM 2100F，FEI Talos F200X等',
          designPhilosophy:['形貌、能谱点扫', '能谱线扫', 'mapping', 'HAADF(STEM)', '衍射'],
          engineeringStandard:['粉末、液体样品均可，薄膜和块体等无法直接测试，需要离子减薄、双喷、FIB、切片制样请提前说明并确认'],
          emissionStandard:['能现场测试吗？寄样的话，我不在旁边怎么才能拍到我要的图片？-- 现场测试：指南针不同城市，可以现场安排的样品及要求不同，具体可咨询当地的对接人员； 寄样测试：SEM或TEM，会给到您一个测试单，您把对应的制样要求（分散剂、超声时间、铜网等）、测试要求（标尺、拍摄位置、形貌效果等）、测试目的等写清楚，测试老师会按您指定的要求来拍',
           '一个样品会提供几张图片？-- 每样品15张左右，具体根据样品的拍摄情况而定',
            'JPG、TIFF、DM3的区别？-- JPG和TIFF均是图片格式，可以直接打开； DM3是源文件，需用DM软件打开'],
        },
        {
          url:require('../images/jellyfish.jpg'),
          title:'扫描电子显微镜SEM',
          introduce:'型号：SU8010；ZEISS MERLIN Compact；Zeiss Gemini 300，S4800；SEU8010；Quanta FEG 250等',
          designPhilosophy:['科学合理的收集方式', '采用新技术、新设备', '避免二次污染', '严格执行', '节能降耗'],
          engineeringStandard:['生化处理工艺', '漆雾凝聚剂处理工艺', '结构紧凑'],
          emissionStandard:['无二次污染', '达到国家排放标准', '无异味无颜色', '可灌溉植物'],
        },
        {
          url:require('../images/jellyfish.jpg'),
          title:'全自动比表面及孔隙度分析仪BET',
          introduce:'型号：麦克2020；麦克ASAP2460；麦克TriStar II 3flex； 康塔AUTOSORB IQ；康塔QUADRASORB SI',
          designPhilosophy:['科学合理的收集方式', '采用新技术、新设备', '避免二次污染', '严格执行', '节能降耗'],
          engineeringStandard:['一企一策方案', '针对餐饮、食堂', '全自动控制', '全封闭结构'],
          emissionStandard:['恒温、无异味', '油渣水三级分离', '无污染物','达到国家标准'],
        }
      ],
    }
  },
  methods:{
    show(n){
      switch (n) {
        case 1:
          this.serviceItem = this.itemList[0];
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
          this.serviceItem = this.itemList[1];
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
          this.serviceItem = this.itemList[2];
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
          this.serviceItem = this.itemList[3];
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