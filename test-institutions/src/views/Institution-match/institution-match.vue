<!--
 * @Description: file 匹配机构页面
 * @Author: IMAGINE
 * @Date: 2021-03-20 20:36:42
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-20 21:00:34
-->

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'institution-match',
  created(){
    this.$router.push('/institution-match');
  }
}
</script>