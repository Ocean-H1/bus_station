import Vue from 'vue'
import VueRouter from 'vue-router'

const First = () => import('../views/first/first.vue')
const second = () => import('../views/second/second.vue')
const third =() => import('../views/third/third.vue')
const fourth =() => import('../views/fourth/fourth.vue')
const fifth =() => import('../views/fifith/fifth.vue')
const buy = () => import('../components/content2/help-Main/buy.vue')

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
    path:'/second',
    component:second
  },
  {
    path:'/third',
    component:third,
    children:[
        {
          path: '/',
          redirect: '/buy'
        }
    ]
  },
  {
    path:'/fourth',
    component:fourth
  },
  {
    path:'/fifith',
    component:fifth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
