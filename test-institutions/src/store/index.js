/*
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2020-12-07 14:56:18
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-03 22:27:44
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user1:null, // 存放用户信息
  },
  mutations: {
    LOGIN(state,info){ // 将用户信息放入
      state.user1=info;
    },
  },
  actions: {
  },
  modules: {
  }
})
