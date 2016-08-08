// components
import Home from './Home.vue'
import VueTable from './page/VueTable.vue'
import Weui from './page/Weui.vue'
import Calculation from './page/Calculation.vue'
import Md from './page/Md.vue'
import VuexIncrement from './page/VuexIncrement.vue'
import Note from './note/Note.vue'
import UniCode from './page/UniCode.vue'
import Transition from './page/transition.vue'
import Crud from './page/Crud.vue'
import Notification from './page/Notification.vue'
import ZhihuList from './zhihu/List.vue'
import CnodeList from './cnode/List.vue'
import CnodeDetail from './cnode/Detail.vue'
import wowTable from './wow/vTable.vue'
import Address from './3level/address.vue'
import Emit from './$emit/parent.vue'

export default {
  '/': {
    component: Home,
    name: 'home'
  },
  '/vue-js': {
    component: VueTable,
    name: 'vueTable'
  },
  '/weui': {
    component: Weui,
    name: 'weui'
  },
  '/calculation': {
    component: Calculation,
    name: 'calculation'
  },
  '/markdown': {
    component: Md,
    name: 'markdown'
  },
  '/vuex': {
    component: VuexIncrement,
    name: 'vuex'
  },
  '/note': {
    component: Note,
    name: 'note'
  },
  '/uniCode': {
    component: UniCode,
    name: 'uniCode'
  },
  '/transition': {
    component: Transition,
    name: 'transition'
  },
  '/zhihuList': {
    component: ZhihuList,
    name: 'zhihuList'
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
    component: wowTable,
    name: 'wowTable'
  },
  '/crud': {
    component: Crud,
    name: 'crud'
  },
  '/notification': {
    component: Notification,
    name: 'notification'
  },
  '/address': {
    component: Address,
    name: 'address'
  },
  '/emit': {
    component: Emit,
    name: 'emit'
  },
}