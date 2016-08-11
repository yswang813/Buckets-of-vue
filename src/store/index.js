import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import createLogger from 'vuex/logger'


Vue.use(Vuex)

let middlewares = []

middlewares.push(createLogger({
  transformer (state) {
    // 输出前对 state 进行转换
    // 比如说只返回一个 sub-tree
    return state.subTree
  },
}))

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules,
  middlewares,
})

export default store
