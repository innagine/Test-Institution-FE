<!--
 * @Description: file 顾客需求列表页面
 * @Author: IMAGINE
 * @Date: 2021-04-01 14:56:48
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-04-20 23:14:07
-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'customer-demand',
  created(){
    this.$router.push('/customer-demand');
  }
}
</script>