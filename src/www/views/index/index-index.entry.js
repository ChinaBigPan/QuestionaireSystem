// import ydheader from "../../components/ydheader/ydheader";

import Vue from 'vue';
import App from './rootvue/App.vue';


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#root')

//import header from '../../components/header/header'
//ydheader.init()