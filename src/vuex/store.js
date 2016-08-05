import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个 object 存储应用启动时的状态
const state = {
  // 应用启动时，count 置为0
  count: 0,
  inputVal: 1,
  notes: [],
  activeNote: {}
}

// 创建一个 object 存储 mutation 函数
const mutations = {
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state
  INCREMENT (state, amount) {
    state.count = state.count + amount
  },
  DECREMENT (state, amount) {
    state.count = state.count - amount
  },
  INPUT_VALUE (state, val) {
    state.inputVal = Number(val)
  },
  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  },
  ADD_NOTE (state) {
    const newNote = {
      text: '未命名',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },
  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },
  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },
}

// 通过 new Vuex.Store 结合初始 state 和 mutations，创建 store
// 这个 store 将和我们的 vue 应用链接起来
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations
})
