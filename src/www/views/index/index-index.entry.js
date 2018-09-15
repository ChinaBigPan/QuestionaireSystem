// import ydheader from "../../components/ydheader/ydheader";

import Vue from 'vue';
import Iview from 'iview';
import App from './rootvue/App.vue';
import router from './rootvue/router/router.js';
import 'iview/dist/styles/iview.css';

Vue.use(Iview);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')

//import header from '../../components/header/header'
//ydheader.init()