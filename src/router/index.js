import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

// 解决报错
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

// 路由懒加载
const First = () => import('../views/first/first.vue')
const ticketquery = () => import('../views/Ticket-query/ticket-query.vue')
const refund = () => import('../views/refund/refund.vue')
const help = () => import('../views/help/help.vue')
const advise = () => import('../views/advise/advise.vue')
const about = () => import('../views/about/about.vue')
const StaionMap = () => import('../views/stationMap/stationMap.vue')
const Login = () => import('@/components/content/Login/login.vue')
const Register = () => import('@/components/content/Register/register')
// 找回密码
const reback = () => import('@/components/content/rebackPsd/rebackPsd.vue')
const Placeorder = () => import('../components/content/query/place-order.vue')
const Confirm =() => import('../views/confirm/confirm.vue')
const QRcode =() => import('../components/content/query/QRcode.vue')
const Success =() => import('../views/success/success.vue')
const Menglogin =()=>import('../components/content/mengceng/denglu.vue')
const Yanzheng =()=>import('../components/content/mengceng/yanzheng.vue')

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
    path: '/ticketquery',
    component: ticketquery,
    meta: {
      title: '车票查询'
    }
  },
  {
    path: '/stationMap',
    component: StaionMap,
    meta: {
      title: '车站地图'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/rebackPsd',
    component: reback,
    meta: {
      title: '找回密码'
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      title: '注册'
    }
  },
  {
    path:'/placeorder',
    component:Placeorder,
    meta:{
      title:'提交订单'
    }
  },
  {
    path:'/confirm',
    component:Confirm,
    meta:{
      title:'确认并支付'
    }
  },
  {
    path:'/qrcode',
    component:QRcode,
    meta:{
      title:'付款界面'
    }
  },{
    path:'/success',
    component:Success,
    meta:{
      title:'购票成功'
    }
  },{
    path:'/menglogin',
    component:Menglogin,
    meta:{
      title:'蒙层登录'
    }
  },{
    path:'/yanzheng',
    component:Yanzheng,
    meta:{
      title:'蒙层验证'
    }
  },
  {
    path: '/person',
    component: () => import('../views/person'),
    meta: {
      title: '个人中心'
    },
    children: [{
      path: '',
      meta: {
        title: '基本资料'
      },
      component: () => import('@/components/content/person/children/info'),
    },
      {
        path: 'changePassword',
        meta: {
          title: '修改密码'
        },
        component: () => import('@/components/content/person/children/changePassword'),
      },
      {
        path: 'passenger',
        meta: {
          title: '常用乘车人'
        },
        component: () => import('@/components/content/person/children/passenger'),
      },
      {
        path: 'contacts',
        meta: {
          title: '常用联系人'
        },
        component: () => import('@/components/content/person/children/contacts'),
      },

      {
        path: 'allOrder',
        meta: {
          title: '所有订单'
        },
        component: () => import('@/components/content/person/children/allOrder'),
      },
      {
        path: 'paidOrder',
        meta: {
          title: '已支付单'
        },
        component: () => import('@/components/content/person/children/paidOrder'),
      },
      {
        path: 'waitOrder',
        meta: {
          title: '待支付单'
        },
        component: () => import('@/components/content/person/children/waitOrder'),
      },
      {
        path: 'refundOrder',
        meta: {
          title: '退款完成'
        },
        component: () => import('@/components/content/person/children/refundOrder'),
      },
    ]
  }
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


router.afterEach((to, from, next) => {
  // 关闭进度条
  NProgress.done()
})

router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start()
  // 根据路由动态设置网页标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
