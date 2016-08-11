<template>
  <div>
    <router-view transition="expand" 
                 transition-mode="out-in" 
                 class="animated">
    </router-view>
    <loading v-if='isLoading'></loading>
    <toast v-if='isShowToast' :content='toastContent'></toast>
  </div>
</template>

<script>
// 暂时注解
import store from './store'
import loading from './components/global/loading.vue'
import toast from './components/global/toast.vue'

export default {
  components: {
    loading,
    toast,
  },
  vuex: {
    getters: {
      isLoading: state => state.global.loading.isShow,
      isShowToast: state => state.global.toast.isShow,
      toastContent: state => state.global.toast.content,
    }
  },
  store,
  ready () {
    console.log('store:' + store)
  }
}

</script>

<style>

html,body{
  height: 100%;
}

body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
}

.expand-transition {
  transition: all .3s ease;
  padding: 0px;
  overflow: hidden;
}

.expand-enter, .expand-leave {
  padding: 0 10px;
  opacity: 0;
}

</style>
