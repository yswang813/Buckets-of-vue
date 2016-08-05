import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

import * as components from './components'    // 组件
import * as filters from './filters'          // 过滤器
import router from './router'                 // router配置文件

// 调式模式
// 为所有的警告打印栈追踪。
// 把所有的锚节点以注释节点显示在 DOM 中，更易于检查渲染结果的结构。
Vue.config.debug = true

// 全局注册过渡动画expand用于router-view
Vue.transition('expand', { enterClass: 'expand-enter', leaveClass: 'expand-leave' })

// 取消click延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

// 注册resource
Vue.use(VueResource)

// 开启devtools
Vue.config.devtools = true

// 注册全局组件，过滤器
register('component', components)
register('filter', filters)

function register (type, sets) {
  for (let key of Object.keys(sets)) {
    Vue[type](key, sets[key])
  }
}

// 实例化router挂在到#app
router.start(App, '#app')
