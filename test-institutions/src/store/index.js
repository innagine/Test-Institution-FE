/*
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2020-12-07 14:56:18
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-20 21:30:10
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user1:null, // 存放用户信息
    baseUrl:'http://26.140.221.230:8556/', // 存放后台接口基本url
    demandRow:null, // 存放被选择的需求项
  },
  mutations: {
    LOGIN(state,info){ // 将用户信息存入
      state.user1=info;
    },
    CHOICE_DEMAND_ROW(state,row){ // 将选择的需求项存入
      state.demandRow = row;
    }
  },
  actions: {
  },
  modules: {
  }
})
