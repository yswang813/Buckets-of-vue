import {
  INCREMENT,
  DECREMENT,
  INPUT_VALUE
} from './mutation-types'

const initialState = {
  count: 0,
  inputVal: 1
}

const mutations = {
  [INCREMENT] (state, amount) {
    console.log(state + ' ' + amount)
    state.count = state.count + amount
  },
  [DECREMENT] (state, amount) {
    console.log(state + ' ' + amount)
    state.count = state.count - amount
  },
  [INPUT_VALUE] (state, val) {
    console.log(state + ' ' + val)
    state.inputVal = Number(val)
  }
}

export default {
  state: initialState,
  mutations,
}

