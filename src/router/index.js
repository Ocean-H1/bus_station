import Vue from 'vue'
import VueRouter from 'vue-router'

const buy = () => import('../views/buy&pay/buy.vue')
const declare = () => import('../views/declare/declare.vue')
const first = () => import('../views/first/first.vue')
const inquire = () => import('../views/inquire/inquire.vue')
const login = () => import('../views/login&register/login.vue')
const profile = () => import('../views/profile/profile.vue')
const pay = () => import('../views/buy&pay/pay.vue')
const register = () => import('../views/login&register/register.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/first'
  },
  {
    path: '/buy',
    component: buy
  },
  {
    path: '/declare',
    component: declare
  },
  {
    path: '/first',
    component: first
  },
  {
    path: '/inquire',
    component: inquire
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/pay',
    component: pay
  },
  {
    path: '/register',
    component: register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
