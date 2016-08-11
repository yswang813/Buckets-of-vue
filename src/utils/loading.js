import store from 'store'
import {
  GLOBAL_SHOW_LOADING,
  GLOBAL_HIDE_LOADING,
} from 'store/mutation-types'

export function showLoading () {
  store.dispatch(GLOBAL_SHOW_LOADING)
}

export function hideLoading () {
  store.dispatch(GLOBAL_HIDE_LOADING)
}

export default {
  show () {
    showLoading()
  },

  hide () {
    hideLoading()
  }
}
