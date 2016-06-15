<template>
  <div>
    <x-button type="primary" @click='decrement'>Decrement</x-button>
  </div>
</template>

<script>
import { decrementCounter } from '../vuex/actions'
import { XButton, Cell, Group } from 'vux'
export default {
  components: {
    XButton,
    Cell,
    Group
  },
  vuex: {
    actions: {
      decrement: decrementCounter
    }
  }
}
</script>
