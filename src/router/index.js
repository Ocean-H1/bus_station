import Vue from 'vue'
import VueRouter from 'vue-router'


const First = () => import('../views/first/first.vue')
const refund = () => import('../views/second/second.vue')
const help = () => import('../views/third/third.vue')
const advise = () => import('../views/fourth/fourth.vue')
const about = () => import('../views/fifith/fifth.vue')
const buy = () => import('../components/content/help-Main/buy.vue')
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
  routes
})

export default router
