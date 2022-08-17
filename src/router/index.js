//引入VueRouter
import VueRouter from 'vue-router'
// 首页
const index = [{
    path: '/',
    name: 'index',
    component: () => import('@/views/index/Index')
}]
//创建router实例对象，去管理整个应用中一组一组的路由规则
export default new VueRouter({
    routes:[
        ...index
    ]
})