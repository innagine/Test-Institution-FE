<!--
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2021-03-01 10:22:12
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-01 11:47:15
-->
<template>
  <div class="service-scope">
     <ul>
       <li>污水除臭工程</li>
       <li>废气处理工程</li>
       <li>废水处理工程</li>
       <li>油水分离工程</li>
     </ul>
  </div>
</template>

<style lang="scss" scoped>
.service-scope{
  ul{
    text-align:center;
    width: 60%;
    padding: 0 0 20px 0;
    margin: 0 auto;
    list-style-type: none;
    font-size: 16px;
    border-bottom:1px solid rgb(209, 209, 209);
    li{
      display: inline-block;
      margin: 0 45px;
      cursor:pointer;
    }
    li:hover{
      color: rgb(117, 186, 243);
    }
  }
}
</style>

<script>
export default {
  name:'service-scope',
}
</script>