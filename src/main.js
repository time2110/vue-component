import Vue from 'vue'
import App from './App.vue'
import VueAnimateNumber from 'vue-animate-number'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import VueXss from 'vue-xss'
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入markdown样式
import 'github-markdown-css'
// 代码高亮
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'
Vue.directive('highlight', function(el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
// 引入normalize.css
import 'normalize.css'

/*使用例子 this.$xss(message) */
Vue.use(VueXss)
Vue.use(Avue);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueAnimateNumber)
new Vue({
  render: h => h(App),
}).$mount('#app')
