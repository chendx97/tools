import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            alias: '/color',
            name: 'color',
            component: () => import(/* webpackChunkName: "color" */ './views/color.vue')
        },
        {
            path: '/pwd',
            name: 'pwd',
            component: () => import(/* webpackChunkName: "pwd" */ './views/pwd.vue')
        },
        {
            path: '/time',
            name: 'timeTrans',
            component: () => import(/* webpackChunkName: "time" */ './views/timeTrans.vue')
        },
        {
            path: '*',
            name: 'notFound',
            component: () => import(/* webpackChunkName: "notFound" */ './views/notFound.vue')
        },
    ]
})
