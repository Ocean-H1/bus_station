import Vue from 'vue'
import VueRouter from 'vue-router'


const First = () => import('../views/first/first.vue')
const refund = () => import('../views/refund/refund.vue')
const help = () => import('../views/help/help.vue')
const advise = () => import('../views/advise/advise.vue')
const about = () => import('../views/about/about.vue')
const StaionMap = () => import('../views/stationMap/stationMap.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: '/first',
    component: First
  },
  {
    path: '/refund',
    component: refund
  },
  {
    path: '/help',
    component: help,
  },
  {
    path: '/advise',
    component: advise
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/stationMap',
    component: StaionMap
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 通过路由跳转页面后，窗口始终位于页面顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
