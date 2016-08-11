import {
  GLOBAL_SHOW_LOADING,
  GLOBAL_HIDE_LOADING,
  GLOBAL_SHOW_TOAST,
  GLOBAL_HIDE_TOAST,
} from './mutation-types'

export function showLoading ({ dispatch }) {
  dispatch(GLOBAL_SHOW_LOADING)
}

export function hideLoading ({ dispatch }) {
  dispatch(GLOBAL_HIDE_LOADING)
}

export function showGlobalToast ({ dispatch }, content) {
  dispatch(GLOBAL_SHOW_TOAST, content)
}

export function hideGlobalToast ({ dispatch }) {
  dispatch(GLOBAL_HIDE_TOAST)
}
