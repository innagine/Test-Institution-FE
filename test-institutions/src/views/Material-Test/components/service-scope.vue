<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-03-01 10:22:12
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-07 01:01:24
-->
<template>
  <div class="service-scope">
     <ul class="ul-1">
       <li @click="show(1)" ref="select1">X射线光电子能谱（XPS）</li>
       <li @click="show(2)" ref="select2">透射电子显微镜（TEM）</li>
       <li @click="show(3)" ref="select3">扫描电子显微镜（SEM）</li>
       <li @click="show(4)" ref="select4">比表面及孔隙分析仪（BET）</li>
     </ul>
     <div class="service-item">
       <div class="left">
          <img :src="serviceItem.url">
          <div class="l-title">{{serviceItem.title}}</div>
          <div class="introduce">{{serviceItem.introduce}}</div>
       </div>
       <div class="right">
         <div class="item">
           <div class="title">测试项目</div>
           <div class="advantages">
             <ul v-for="(item,index) in serviceItem.designPhilosophy" :key="index">
               <li>{{item}}</li>
             </ul>
           </div>
         </div>
         <div class="item">
           <div class="title">样品要求</div>
           <div class="advantages">
             <ul v-for="(item,index) in serviceItem.engineeringStandard" :key="index">
               <li>{{item}}</li>
             </ul>
           </div>
         </div>
         <div class="item">
           <div class="title">常见问题及回答</div>
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
        url:require('../images/pencils.jpg'),
        title:'垃圾、污水除臭工程',
        introduce:'方案简介 : 垃圾臭气来源、垃圾臭气处理方案设计原则、垃圾臭气处理工程范围及标准、垃圾臭气处理排放标准。',
        designPhilosophy:['科学合理的收集方式', '采用新技术、新设备', '避免二次污染', '严格执行', '节能降耗1'],
        engineeringStandard:['科学合理的收集方式', '采用新技术、新设备', '避免二次污染', '严格执行', '节能降耗2'],
        emissionStandard:['科学合理的收集方式', '采用新技术、新设备', '避免二次污染', '严格执行', '节能降耗3'],
      },
      itemList:[
        {
          url:require('../images/pencils.jpg'),
          title:'XPS',
          introduce:'型号：Thermo Kalpha；Thermo ESCALAB 250XI; Axis Ultra DLD Kratos AXIS SUPRA; PHI-5000versaprobeIII',
          designPhilosophy:['1. XPS可以做的项目：常规全谱窄谱测试，俄歇谱，价带谱，深度溅射，MAPPING,角分辨', '2. XPS测试的元素范围是Li-Cm, H,He元素不能测试', '3. XPS数据分析可以等到元素的价态及半定量数据。原子百分含量小于5%的元素可能测不出明显信号。', '4. 无特殊说明，默认是使用单色化AlKa源（Mono AlKa）能量是1486.6eV', '5. 使用Al Kα X-ray会出现的重叠谱峰，当有重叠谱峰的时候直接定量的结果不能参考。'],
          engineeringStandard:['1. 样品状态：可为粉末、块状、薄膜样品', '2. 粉末样品：20-30mg', '3. 块状、薄膜样品：块体/薄膜样品尺寸小于5*5*3mm'],
          emissionStandard:['样品精细谱扫出谱峰？为什么全谱里没有呢？-- 全谱主要是用来定性分析的，设置参数的步长比较大，含量低的在全谱里扫不出谱峰。但是精细谱扫出谱峰就表示有该元素。', 
          '每种元素的检测限一样么？-- 不一样。每种元素的主峰的灵敏度因子都不一样。',
          '怎么判断拟合是好是坏，是拟合了两个峰算好还是拟合了三个峰算好？-- 看波动大小，越小越好；还要看对应的物理意义。波动如下图所示。具体拟合几个峰，要参考样品本身的情况，以及拟合的贴合度，没有严格的界定哪个更好。'],
        },
        {
          url:require('../images/pencils.jpg'),
          title:'透射电子显微镜TEM',
          introduce:'型号：FEI Tecnai F20, TF30，JEOL JEM 2100F，FEI Talos F200X等',
          designPhilosophy:['形貌、能谱点扫', '能谱线扫', 'mapping', 'HAADF(STEM)', '衍射'],
          engineeringStandard:['粉末、液体样品均可，薄膜和块体等无法直接测试，需要离子减薄、双喷、FIB、切片制样请提前说明并确认'],
          emissionStandard:['能现场测试吗？寄样的话，我不在旁边怎么才能拍到我要的图片？-- 现场测试：指南针不同城市，可以现场安排的样品及要求不同，具体可咨询当地的对接人员； 寄样测试：SEM或TEM，会给到您一个测试单，您把对应的制样要求（分散剂、超声时间、铜网等）、测试要求（标尺、拍摄位置、形貌效果等）、测试目的等写清楚，测试老师会按您指定的要求来拍',
           '一个样品会提供几张图片？-- 每样品15张左右，具体根据样品的拍摄情况而定',
            'JPG、TIFF、DM3的区别？-- JPG和TIFF均是图片格式，可以直接打开； DM3是源文件，需用DM软件打开'],
        },
        {
          url:require('../images/pencils.jpg'),
          title:'扫描电子显微镜SEM',
          introduce:'型号：SU8010；ZEISS MERLIN Compact；Zeiss Gemini 300，S4800；SEU8010；Quanta FEG 250等',
          designPhilosophy:['科学合理的收集方式', '采用新技术、新设备', '避免二次污染', '严格执行', '节能降耗'],
          engineeringStandard:['生化处理工艺', '漆雾凝聚剂处理工艺', '结构紧凑'],
          emissionStandard:['无二次污染', '达到国家排放标准', '无异味无颜色', '可灌溉植物'],
        },
        {
          url:require('../images/pencils.jpg'),
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