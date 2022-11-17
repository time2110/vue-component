import Vue from 'vue'
import App from './App.vue'
import Avue from '@smallwei/avue';
import VueAnimateNumber from 'vue-animate-number'
import '@smallwei/avue/lib/index.css';

import VueXss from 'vue-xss'
// 使用例子 this.$xss(message)

// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入markdown样式
import 'github-markdown-css'

// 代码高亮
import 'highlight.js/styles/github.css'
import highlight from 'highlight.js'
Vue.directive('highlight', function(el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    highlight.highlightBlock(block)
  })
})
// 引入normalize.css
import 'normalize.css'

//引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入项目所编写的路由器（项目单独的router文件夹下的index.js文件）
import router from '@/router'

import * as filters from './filters'

Vue.use(VueXss)
Vue.use(Avue);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueAnimateNumber)

// 加载过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
