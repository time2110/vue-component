import Vue from 'vue'
import App from './App.vue'
import VueAnimateNumber from 'vue-animate-number'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(Avue);
Vue.config.productionTip = false
Vue.use(VueAnimateNumber)
new Vue({
  render: h => h(App),
}).$mount('#app')
