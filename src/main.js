import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Vuex from 'vuex'

// components
import Home from './Home'
import VueTable from './page/VueTable'
import VueRouter from './page/VueRouter'
import VueResource from './page/VueResource'
import Webpack from './page/Webpack'
import Weui from './page/Weui'
import Calculation from './page/Calculation'
import Md from './page/Md'
import VuexIncrement from './page/VuexIncrement'
import Note from './note/Note'
import UniCode from './page/UniCode'
import Transition from './page/transition'
import Crud from './page/crud'
import Notification from './page/Notification'

import ZhihuList from './zhihu/List'
import CnodeList from './cnode/List'
import CnodeDetail from './cnode/Detail'
import wowTable from './wow/vTable'

// 调式模式
// 为所有的警告打印栈追踪。
// 把所有的锚节点以注释节点显示在 DOM 中，更易于检查渲染结果的结构。
Vue.config.debug = true

// 取消click延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

// resource
Vue.use(require('vue-resource'));
// console.log(Vue.http)

// router
Vue.use(Router)
Vue.config.devtools = true

const router = new Router()

router.map({
  '/': {
    component: Home
  },
  '/vue-js': {
    component: VueTable
  },
  '/vue-router': {
    component: VueRouter
  },
  '/vue-resource': {
    component: VueResource
  },
  '/webpack': {
    component: Webpack
  },
  '/weui': {
    component: Weui
  },
  '/calculation': {
    component: Calculation
  },
  '/markdown': {
    component: Md
  },
  '/vuex': {
    component: VuexIncrement
  },
  '/note': {
    component: Note
  },
  '/UniCode': {
    component: UniCode
  },
  '/transition': {
    component: Transition
  },
  '/ZhihuList': {
    component: ZhihuList
  },
  '/page/:pageNum': {
    component: CnodeList,
    name: 'page'
  },
  '/detail/:articleId': {
    component: CnodeDetail,
    name: 'detail'
  },
  '/wowTable': {
    component: wowTable
  },
  '/crud': {
    component: Crud,
    name: 'crud'
  },
  '/Notification': {
    component: Notification,
    name: 'notification'
  },
})



// save position for demo page
let demoScrollTop = 0
function saveDemoScrollTop () {
  demoScrollTop = window.scrollY
}

router.beforeEach(function (transition) {
  if (transition.to.fullPath !== '/demo') {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
  }
  if (/\/http/.test(transition.to.path)) {
    let url = transition.to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    if (/\/demo\/component\/\w+/.test(transition.to.path)) {
      router.go({
        replace: true,
        path: transition.to.path.replace('/demo', ''),
        append: false
      })
    } else {
      transition.next()
    }
  }
})

router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
  // 根目录为/
  // 不同路径干不同的事情
  console.log('完整链接为: ' + window.location.href)
  if (transition.to.fullPath !== '/demo') {
    window.scrollTo(0, 0)
  } else {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
    // if from component page
    if (demoScrollTop && /component/.test(transition.from.fullPath)) {
      setTimeout(function () {
        window.scrollTo(0, demoScrollTop)
      }, 100)
    }
    setTimeout(function () {
      window.addEventListener('scroll', saveDemoScrollTop, false)
    }, 1000)
  }
})

router.start(App, '#app')
