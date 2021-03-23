import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolioDetail/:id',
      name: 'portfolioDetail',
      component: () => import('@/components/PortfolioDetail')
    },
    // {
    //   path: '/gallery',
    //   name: 'gallery',
    //   component: Gallery
    // }
  ]
})
