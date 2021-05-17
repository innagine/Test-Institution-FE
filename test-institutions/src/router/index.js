/*
 * @Description: file 路由文件
 * @Author: IMAGINE
 * @Date: 2020-12-07 14:56:18
 * @LastEditors: IMAGINE
 * @LastEditTime: 2021-05-11 16:30:56
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InstitutionApplication from '../views/Institution-Application/components/InstitutionApplication.vue'
import InstitutionPass from '../views/Institution-Application/components/institution-pass.vue'
import InstitutionFail from '../views/Institution-Application/components/institution-fail.vue'
import FactoryCheck from '../views/Factory-application/components/FactoryApplication.vue'
import Factorypass from '../views/Factory-application/components/factory-pass.vue'
import FactoryFail from '../views/Factory-application/components/factory-fail.vue'
import InstitutionMatch from '../views/Institution-match/components/choice-institution.vue'
import CustomerDemand from '../views/Customer-Demand/components/DemandList.vue'
import PostOrder from '../views/Customer-Demand/components/PostOrder.vue'
import Search from '../views/Search.vue'
import Equipments from '../views/Treatment-equipment/components/equipments.vue'
import EquipmentDetails from '../views/Treatment-equipment/components/equipment-details.vue'
import ServiceUser from '../views/User-Control/components/service-user.vue'
import AdminUser from '../views/User-Control/components/admin-user.vue'
import CommonUser from '../views/User-Control/components/common-user.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {path: '/institution-check', name: 'institution-check', component: InstitutionApplication},
      {path: '/institution-pass', name: 'institution-pass', component: InstitutionPass},
      {path: '/institution-fail', name: '/institution-fail', component: InstitutionFail},
      {path: '/factory-check', name: '/factory-check', component: FactoryCheck},
      {path: '/factory-pass', name: '/factory-pass', component: Factorypass},
      {path: '/factory-fail', name: '/factory-fail', component: FactoryFail},
      {path: '/institution-match', name: '/institution-match', component: InstitutionMatch},
      {path: '/search', name: '/search', component: Search},
      {path: '/customer-demand', name: '/customer-demand', component: CustomerDemand},
      {path: '/post-order', name: '/post-order', component: PostOrder},
      {path: '/equipments', name: '/equipments', component: Equipments},
      {path: '/equipment-details', name: '/equipment-details', component: EquipmentDetails},
      {path: '/service-user', name: '/service-user', component: ServiceUser},
      {path: '/admin-user', name: '/admin-user', component: AdminUser},
      {path: '/common-user', name: '/common-user', component: CommonUser},
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/register',
    name:'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
