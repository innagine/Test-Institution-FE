/*
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2020-12-07 14:56:18
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-23 19:07:16
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user1:null, // 存放用户信息
    baseUrl:'http://1.117.99.3:8556/', // 存放后台接口基本url
    // baseUrl:'http://49.235.72.171:8556/', // 存放后台接口基本url
    demandRow:null, // 存放被选择的需求项
    institutionInfo:null, // 存放机构信息
    factoryInfo:null, // 存放工厂信息
    choiceInstitutionList:[], // 存放被选择的机构
    itemList:null, // 存放项目列表
    itemTotal:0, // 存放项目总数
    equipmentList:null, // 存放设备列表
    choiceEquipment:null // 存放设备
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
    SET_FACTORY_INFO(state,info){ // 将获取的工厂信息存入
      state.factoryInfo = info;
    },
    CHOICE_INSTITUION(state,institution){ // 将选择的机构存入
      state.choiceInstitutionList.push(institution);
    },
    DELETE_INSTITUTION(state){ // 清除被选择的机构
      state.choiceInstitutionList.pop();
    },
    SET_ITEM_LIST(state,list){ // 将搜索的项目存入
      state.itemList = list;
    },
    SET_ITEM_TOTAL(state,total){ // 将搜索的项目总数存入
      state.itemTotal = total;
    },
    SET_EQUIPMENTLIST(state,list){ // 将设备列表存入
      state.equipmentList = list;
    },
    CHOICE_EQUIPMENT(state,equipment){ // 将选择设备存入
      state.choiceEquipment = equipment;
    }
  },
  actions: {
  },
  modules: {
  }
})
