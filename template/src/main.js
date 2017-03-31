import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import store from './store/index.js'
import router from './routers/index.js'
import './assets/css/base.css'

Vue.use(Vuex)

Vue.prototype.$http = axios

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

//路由钩子函数
// router.beforeEach((to, from, next) => {
//     next()
// })

// router.afterEach(route => {
// })
