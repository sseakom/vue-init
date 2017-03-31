import * as types from '../constants'
import store from '../index.js'

const state = {
    main: 0
}

const mutations = {
    [types.DECREMENT_MAIN_COUNTER](state) {
        state.main--
    },
    [types.INCREMENT_MAIN_COUNTER](state) {
        state.main++
    }
}

export default {
    state,
    mutations,
}
