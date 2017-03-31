import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import modules from './modules'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
    platform: (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPad') != -1) ?
        true : false, //设备识别 IOS true 其它 false
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules,
	strict: process.env.NODE_ENV !== 'production'
})
