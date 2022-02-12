import Vue from 'vue'
import VueRouter from 'vue-router'


const First = () => import('../views/first/first.vue')
<<<<<<< HEAD
const StaionMap = () => import('../views/stationMap/stationMap.vue')
const second = () => import('../views/second/second.vue')
const third =() => import('../views/third/third.vue')
const fourth =() => import('../views/fourth/fourth.vue')
const fifth =() => import('../views/fifith/fifth.vue')
const buy = () => import('../components/content2/help-Main/buy.vue')
const ticketquery = () => import('../views/Ticket-query/ticket-query.vue')
=======
const refund = () => import('../views/refund/refund.vue')
const help = () => import('../views/help/help.vue')
const advise = () => import('../views/advise/advise.vue')
const about = () => import('../views/about/about.vue')
const StaionMap = () => import('../views/stationMap/stationMap.vue')
>>>>>>> 400e5615a1a0871b9be58e3b0ad240b056cdadbf

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: '/first',
    component: First,
    meta: {
      title: '首页'
    }
  },
  {
<<<<<<< HEAD
    path: '/stationMap',
    component: StaionMap
  },
  {
    path:'/second',
    component:second
=======
    path: '/refund',
    component: refund,
    meta: {
      title: '退票'
    }
  },
  {
    path: '/help',
    component: help,
    meta: {
      title: '帮助中心'
    }
>>>>>>> 400e5615a1a0871b9be58e3b0ad240b056cdadbf
  },
  {
    path: '/advise',
    component: advise,
    meta: {
      title: '投诉建议'
    }
  },
  {
    path: '/about',
    component: about,
    meta: {
      title: '关于我们'
    }
  },
  {
<<<<<<< HEAD
    path:'/fifith',
    component:fifth
  },
  {
    path:'/ticketquery',
    component:ticketquery
  }
=======
    path: '/stationMap',
    component: StaionMap,
    meta: {
      title: '车站地图'
    }
  },
>>>>>>> 400e5615a1a0871b9be58e3b0ad240b056cdadbf
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 通过路由跳转页面后，窗口始终位于页面顶部
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// 根据路由动态设置网页标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
