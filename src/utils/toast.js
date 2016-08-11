// 暂时注解
import store from '../store'

import {
  GLOBAL_SHOW_TOAST,
  GLOBAL_HIDE_TOAST,
} from '../store/global/mutation-types'

import { TOAST_DURATION_TIME } from '../constants.js'

let timer = null
export function showToast (content) {
  store.dispatch(GLOBAL_SHOW_TOAST, content)
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    store.dispatch(GLOBAL_HIDE_TOAST)
  }, TOAST_DURATION_TIME)
}

export function hideToast () {
  if (timer) clearTimeout(timer)
  store.dispatch(GLOBAL_HIDE_TOAST)
  timer = null
}

export default {
  show (msg) {
    showToast(msg)
  },

  hide () {
    hideToast()
  }
}
