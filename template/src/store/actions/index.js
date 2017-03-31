import * as types from '../constants'

export const decrementMain = ({ commit }) => {
    commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({ commit }) => {
    commit(types.INCREMENT_MAIN_COUNTER)
}
