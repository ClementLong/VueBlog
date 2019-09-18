import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articles/:filter?',
      name: 'listing',
      component: () => import(/* webpackChunkName: "listing" */ './views/Listing/Listing.vue')
    },
    {
      path: '/article/:slug',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ './views/Post/Post.vue')
    }
  ]
})
