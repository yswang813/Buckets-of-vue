import VueRouter from 'vue-router'
import routes from './routes'
import Vue from 'vue'

// router
Vue.use(VueRouter)

const router = new VueRouter()

router.map(routes)

// save position for demo page
let demoScrollTop = 0
function saveDemoScrollTop () {
  demoScrollTop = window.scrollY
}

router.beforeEach( (transition) => {
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

router.afterEach( (transition) => {
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
      setTimeout( () => {
        window.scrollTo(0, demoScrollTop)
      }, 100)
    }
    setTimeout( () => {
      window.addEventListener('scroll', saveDemoScrollTop, false)
    }, 1000)
  }
})

export default router
