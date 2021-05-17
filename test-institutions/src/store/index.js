/*
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2020-12-07 14:56:18
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-14 14:41:43
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user1:null, // 存放用户信息
    baseUrl:'http://1.116.104.104:8556/', // 存放后台接口基本url
    // baseUrl:'http://49.235.72.171:8556/', // 存放后台接口基本url
    demandRow:null, // 存放被选择的需求项
    institutionInfo:null, // 存放机构信息
    choiceInstitutionList:[], // 存放被选择的机构
  },
  mutations: {
    LOGIN(state,info){ // 将用户信息存入
      state.user1=info;
    },
    CHOICE_DEMAND_ROW(state,row){ // 将选择的需求项存入
      state.demandRow = row;
    },
    SET_INSTITUTION_INFO(state,info){ // 将获取的机构信息存入
      state.institutionInfo = info;
    },
    CHOICE_INSTITUION(state,institution){ // 将选择的机构存入
      state.choiceInstitutionList.push(institution);
    },
    DELETE_INSTITUTION(state){ // 清除被选择的机构
      state.choiceInstitutionList.pop();
    }
  },
  actions: {
  },
  modules: {
  }
})
