import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/read/:id',
    name: 'Article',
    component: () => import(/* webpackChunkName: "article" */ '../views/Article.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'AdminList',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminList.vue')
      },
      {
        path: 'add',
        name: 'AdminAdd',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminAdd.vue')
      },
      {
        path: 'mod/:id',
        name: 'AdminMod',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminAdd.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
