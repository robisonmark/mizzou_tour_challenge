import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      title: '2020 Regional Meetings | Missouri Tourism'
    }
  },
  {
    path: '/register/:eventSlug',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/registration.vue'),
    meta: {
      title: '2020 Regional Meetings | Missouri Tourism'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve(async (to, from, next) => {
  if (Object.prototype.hasOwnProperty.call(to, 'meta')) {
    if (Object.prototype.hasOwnProperty.call(to.meta, 'title')) {
      document.title = to.meta.title
    }
    return next()
  }
  return next()
})

export default router
