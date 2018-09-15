import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Header from '../components/vheader.vue'
import Footers from '../components/footers.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
  	name:'home',
    path: '/home',
    component:Home
  }, 
  {
    name: 'header',
    path: '/head',
    component:Header
  },
  {
  	name:'footers',
  	path:'/footers',
  	component:Footers
  }
  ]
})

export default router