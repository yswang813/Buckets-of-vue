<template>
  <div>
    <x-button type="warn" @click='increment'>Increment</x-button>
  </div>
</template>

<script>
import { incrementCounter } from '../vuex/actions'
import { XButton, Cell, Group } from 'vux'
export default {
  components: {
    XButton,
    Cell,
    Group
  },
  vuex: {
    actions: {
      increment: incrementCounter
    }
  }
}
</script>
