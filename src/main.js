import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

// components
import Home from './Home'
import VueJs from 'components/VueJs'
import VueRouter from 'components/VueRouter'
import Webpack from 'components/Webpack'
import Weui from 'components/Weui'
import Calculation from 'components/Calculation'

// 取消click延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

// router
Vue.use(Router)
Vue.config.devtools = true

const router = new Router()

router.map({
  '/': {
    component: Home
  },
  '/vue.js': {
    component: VueJs
  },
  '/vue-router': {
    component: VueRouter
  },
  '/webpack': {
    component: Webpack
  },
  '/weui': {
    component: Weui
  },
  '/calculation': {
    component: Calculation
  }
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
