import Vue from 'vue'
import Router from 'vue-router'

import food from 'components/food/food'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/food',
      component: food
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    }
  ]
})
