<template>
  <div>
    <x-button type="warn" @click='increment'>Increment</x-button>
  </div>
</template>

<script>
// 暂时注解
import { incrementCounter } from '../store/crement/actions'
import XButton from 'vux/src/components/x-button/index.vue'
export default {
  components: {
    XButton
  },
  vuex: {
    actions: {
      increment: incrementCounter
    }
  }
}
</script>
