import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: resolve => require(['../pages/HomePage.vue'], resolve)
        },
    ]
})
