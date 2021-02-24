<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-01-19 17:57:08
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-02-24 10:23:28
-->
<template>
    <div class="item-rang">
        <div class="items-list">
            <el-card shadow="hover" class="car-margin"> <img src="../images/soil.jpg" class="image"><p>土壤、底质、固体废物、污泥、生活垃圾、农林土壤</p></el-card>
            <el-card shadow="hover" class="car-margin"> <img src="../images/water.jpg" class="image"><p>水、废水、大气降水、海水、生活饮用水</p></el-card>
            <el-card shadow="hover" class="car-margin"> <img src="../images/air.jpg" class="image"><p>空气、废气</p></el-card>
        </div>
        <div class="items-list">
            <el-card shadow="hover" class="car-margin"> <img src="../images/food.jpg" class="image"><p>粮食、油、乳制品、肉制品</p></el-card>
            <el-card shadow="hover" class="car-margin"> <img src="../images/fertilizer.jpg" class="image"><p>有机肥料、尿素、复合肥料</p></el-card>
            <el-card shadow="hover" class="car-margin"> <img src="../images/botany.jpg" class="image"><p>草本、木本、蔬菜</p></el-card>
        </div>
    </div>
</template>

<style >
.items-list{
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding-bottom: 30px;
    text-align: center;
}
.items-list img{
    width: 100%;
}
.car-margin{
    margin: 0 30px;
    width: 280px;
}
</style>

<script>
export default {
    name:'ItemRang'
}
</script>