import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Language from './components/Language.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Router)
Vue.use(Buefy)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index.html',
      name: 'home',
      component: Home
    },
    {
      path: '/:language',
      name: 'language',
      component: Language
    },
  ]
})
