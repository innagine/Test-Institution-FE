/*
 * @Description: file contentIMAGINE
 * @Author: IMAGINE
 * @Date: 2020-12-07 14:56:18
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-03-09 20:26:57
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//配置使用element UI
import './plugins/element.js'
import ElementUI from 'element-ui';
ElementUI.Dialog.props.lockScroll.default = false;

//配置使用.svg格式的图片
import Icon from 'vue-svg-icon/Icon.vue'
//引入svg-icon
Vue.component('Icon',Icon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
