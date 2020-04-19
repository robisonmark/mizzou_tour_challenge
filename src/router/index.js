import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
// import registration from '../views/registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/register/:eventSlug',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/registration.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
