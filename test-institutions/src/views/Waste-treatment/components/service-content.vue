<!--
 * @Description: file 危废处理服务内容
 * @Author: IMAGINE
 * @Date: 2021-02-24 17:46:26
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-02-26 16:21:14
-->
<template>
  <div class="service-content">
    <div class="service-item" v-for="(item,index) in serviceList" :key="index">
      <div class="left">
        <img :src="item.backgroundUrl" alt="" class="background-icon">
        <div class="service-title">{{item.title}}</div>
        <div class="service-explain">{{item.explain}}</div>
      </div>
      <div class="right">
        <div class="service-label">
          <el-tag v-for="(label,index) in item.labels" :key="index">{{label}}</el-tag>
        </div>
        <div class="handle-content">{{item.content}}</div>
        <div class="service-advantages">
          <div class="advantage" v-for="(advantage,index) in item.advantages" :key="index">
            <Icon name='right' class="icon"></Icon>
            <span>{{advantage}}</span>
            </div>
        </div>
        <div class="button">立即预约</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-content{
  width: 80%;
  margin: 0 auto;
  .service-item{
    margin-bottom: 30px;
    display: flex;
    height: 250px;
    .left{
      flex:1;
      background-color: pink;
      color: white;
      position: relative;
      .service-title{
        position: absolute;
        top: 0;
        font-size: 24px;
        margin-top: 40px;
        margin-left: 20px;
        margin-right: 20px;
      }
      .service-explain{
        position: absolute;
        top: 100px;
        margin-left: 20px;
        margin-right: 20px;
      }
      .background-icon{
        width: 100%;
      }
    }
    .right{
      flex: 3;
      background-color: rgb(255, 255, 255);
      padding-left: 40px;
      .service-label{
        margin-top: 20px;
        margin-bottom: 10px;
        .el-tag{
          margin-right: 10px;
          background-color: #fff;
          color: rgb(143, 208, 238);
        }
      }
      .handle-content{
        font-size: 22px;
        font-weight: 300;
      }
      .service-advantages{
        margin: 10px 0;
        font-size: 14px;
        color: rgb(120, 121, 121);
        .advantage{
          margin-bottom: 5px;
          .icon{
            width: 12px;
            height: 12px;
            margin-right: 4px;
          }
        }
      }
      .button{
        padding: 10px 0;
        text-align: center;
        width: 12%;
        color: #51a4db;
      }
    }
    .right:hover{
      box-shadow: 2px 1px 4px 1px rgb(214, 214, 214);
      .button{
        background-image: linear-gradient(to right, #51a4db, #a8e4fa);
        color: #fff;
      }
    }
  }
}
</style>

<script>
export default {
  name:'service-content',
  data(){
    return {
      serviceList:[
        {
          backgroundUrl:require('../images/background.png'),
          title:'实验室危废处理',
          explain:'实验室危险化学废物的分类、验室化学废液的收集、收集周转桶上的标示说明、废试剂(液)转运要求',
          labels:['土壤','土壤','土壤','土壤'],
          content:'有机废液类,无机废液类,剧毒类废液,实验室固态废物',
          advantages:['环保一站式服务','量身订造','经验丰富','售后贴心'],
        },
        {
          backgroundUrl:require('../images/background.png'),
          title:'线路板厂电镀危废处理',
          explain:'实验室危险化学废物的分类、验室化学废液的收集、收集周转桶上的标示说明、废试剂(液)转运要求',
          labels:['土壤','土壤','土壤','土壤'],
          content:'有机废液类,无机废液类,剧毒类废液,实验室固态废物',
          advantages:['环保一站式服务','量身订造','经验丰富','售后贴心'],
        },{
          backgroundUrl:require('../images/background.png'),
          title:'医药、医疗制造危废处理',
          explain:'实验室危险化学废物的分类、验室化学废液的收集、收集周转桶上的标示说明、废试剂(液)转运要求',
          labels:['土壤','土壤','土壤','土壤'],
          content:'有机废液类,无机废液类,剧毒类废液,实验室固态废物',
          advantages:['环保一站式服务','量身订造','经验丰富','售后贴心'],
        },{
          backgroundUrl:require('../images/background.png'),
          title:'废包装桶危废处理',
          explain:'实验室危险化学废物的分类、验室化学废液的收集、收集周转桶上的标示说明、废试剂(液)转运要求',
          labels:['土壤','土壤','土壤','土壤'],
          content:'有机废液类,无机废液类,剧毒类废液,实验室固态废物',
          advantages:['环保一站式服务','量身订造','经验丰富','售后贴心'],
        },{
          backgroundUrl:require('../images/background.png'),
          title:'危废打包分拣服务',
          explain:'实验室危险化学废物的分类、验室化学废液的收集、收集周转桶上的标示说明、废试剂(液)转运要求',
          labels:['土壤','土壤','土壤','土壤'],
          content:'有机废液类,无机废液类,剧毒类废液,实验室固态废物',
          advantages:['环保一站式服务','量身订造','经验丰富','售后贴心'],
        },
      ]
    }
  },
}
</script>