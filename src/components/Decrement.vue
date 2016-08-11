<template>
  <div>
    <x-button type="primary" @click='decrement'>Decrement</x-button>
  </div>
</template>

<script>
// 暂时注解
import { decrementCounter } from '../store/crement/actions'
import XButton from 'vux/src/components/x-button/index.vue'
export default {
  components: {
    XButton
  },
  vuex: {
    actions: {
      decrement: decrementCounter
    }
  }
}
</script>
