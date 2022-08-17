import Vue from 'vue'
import App from './App.vue'
import VueAnimateNumber from 'vue-animate-number'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import VueXss from 'vue-xss'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/*使用例子 this.$xss(message) */
Vue.use(VueXss)
Vue.use(Avue);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueAnimateNumber)
new Vue({
  render: h => h(App),
}).$mount('#app')
