/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
// 导入Home组件
import Home from '@/components/Home'
// 导入Welcome这个组件
import Welcome from '@/components/Welcome'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
        path: '/home',
        component: Home,
        // 只要你访问了/home这个地址，我就让你重定向到/welcome这个子路由规则
        redirect: '/welcome',
        children: [
            { path: '/welcome', component: Welcome }
        ]
    } // 添加路由规则
]

const router = new VueRouter({
    routes
})

// 挂载路由导航对象
router.beforeEach((to, from, next) => {
        // to 将要访问的路径
        // from 代表从哪个路径跳转而来
        // next是一个函数，表示放行
        //       next()  直接放行  next('强制调转的路径')
        if (to.path === '/login') {
            return next()
                // eslint-disable-next-line brace-style
        } else {
            const tokenStr = window.sessionStorage.getItem('token')
            if (!tokenStr) {
                return next('/login')
            } else {
                next()
            }
        }
    })
    // eslint-disable-next-line eol-last
export default router