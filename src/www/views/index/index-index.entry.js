// import ydheader from "../../components/ydheader/ydheader";

import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './rootvue/App.vue';
import router from './rootvue/router/router.js';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')

//import header from '../../components/header/header'
//ydheader.init()