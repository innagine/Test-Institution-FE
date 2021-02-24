<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-02-24 15:13:06
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-02-24 16:47:25
-->
<template>
    <div class="equipment-rang">
        <div class="equipments-list">
            <el-card shadow="hover" class="car-margin" v-for="(item,index) in list" :key="index">
              <img :src="item.url" class="image">
              <p>{{item.name}}</p>
              <div class="button">我要询价</div>
            </el-card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.equipments-list{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    cursor: pointer;
    padding-bottom: 30px;
    text-align: center;
    .el-card{
      width: 25%;
      margin-top: 40px;
      p{
        // color: #409eff;
        font-weight: 600;
      }
      .button{
        margin: 20px auto;
        padding: 10px 0;
        text-align: center;
        width: 60%;
        background-image: linear-gradient(to right, #51a4db, #a8e4fa);
        color: #fff;
        border-radius: 8px;
      }
      .button:hover {
        background: #a8e4fa;
      }
    }
}
.equipments-list img{
    width: 100%;
}
.car-margin{
    margin: 0 30px;
    width: 280px;
}
</style>

<script>
export default {
    name:'Equipments',
    data(){
      return{
        list:[{name:'高效气旋塔',url:require('../images/高效气旋塔.jpg')},
              {name:'UV光解(紫外线光催氧化)',url:require('../images/UV光解(紫外线光催氧化).png')},
              {name:'UV光解+活性炭吸附',url:require('../images/UV光解+活性炭吸附.png')},
              {name:'UV光解+低温等离子',url:require('../images/UV光解+低温等离子.png')},
              {name:'水洗打磨柜',url:require('../images/水洗打磨柜.png')},
        ]
      }
    }
}
</script>