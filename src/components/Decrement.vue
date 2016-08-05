<template>
  <div>
    <x-button type="primary" @click='decrement'>Decrement</x-button>
  </div>
</template>

<script>
import { decrementCounter } from '../vuex/actions'
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
