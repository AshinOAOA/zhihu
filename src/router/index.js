import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import main from '@/pages/main'
import mainDetial from '@/pages/main-detail'
import themes from '@/pages/themes'
import themesDetial from '@/pages/themes-detial'
import description from '@/pages/description'
import test from '@/pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/mainDetial/:id',
      name: 'mainDetial',
      component: mainDetial
    },
    {
      path: '/themes',
      name: 'themes',
      component: themes
    },
    {
      path: '/themesDetial/:id',
      name: 'themesDetial',
      component: themesDetial
    },
    {
      path: '/description',
      name: 'description',
      component: description
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
    	path: '*',
    	redirect: '/main'
    }
  ]
})
