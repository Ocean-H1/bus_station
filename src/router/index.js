import Vue from 'vue'
import VueRouter from 'vue-router'

const First = () => import('../views/first/first.vue')
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
