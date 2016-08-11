import {
  GLOBAL_SHOW_LOADING,
  GLOBAL_HIDE_LOADING,
  GLOBAL_SHOW_TOAST,
  GLOBAL_HIDE_TOAST,
} from './mutation-types'

const initialState = {
  loading: {
    isShow: false,
  },
  toast: {
    isShow: false,
    content: '',
  },
}

const mutations = {
  [GLOBAL_SHOW_LOADING] (state) {
    state.loading.isShow = true
  },
  [GLOBAL_HIDE_LOADING] (state) {
    state.loading.isShow = false
  },
  [GLOBAL_SHOW_TOAST] (state, content) {
    if (state.toast.isShow) {
      return false
    }
    state.toast.isShow = true
    state.toast.content = content
  },
  [GLOBAL_HIDE_TOAST] (state) {
    if (!state.toast.isShow) {
      return false
    }
    state.toast.isShow = false
  },
}

export default {
  state: initialState,
  mutations,
}
