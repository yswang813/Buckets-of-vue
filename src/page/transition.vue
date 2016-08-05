<template>
  <section>
    <x-input title="search"
             placeholder="请输入keyword"
             :value.sync="keyword"></x-input>
    <cell v-for="item in items | filterBy keyword"
          :title="item"
          class="animated"
          transition="bounce"
          stagger="100">
    </cell>
  </section>
</template>

<script type="text/babel">

import XInput from 'vux/src/components/x-input/index.vue'
import Cell from 'vux/src/components/cell/index.vue'

export default {
  components: {
    XInput,
    Cell
  },
  data () {
    return {
      keyword: '',
      items: [
        'John',
        'Tom',
        'Billy',
        'Coco',
        'Jerry',
        'Alfred',
        'Gay',
        'Vincent',
        'Joe',
        'Harry',
        'Peter',
        'Lush',
        'May',
        'Sky',
        'Jesse',
        'Spider',
        'Super',
        'Roy',
        'Susan'
      ]
    }
  },
  transitions: {
    bounce: {
      enterClass: 'bounceInLeft',
      leaveClass: 'bounceOutRight'
    }
  }
}
</script>

<style scoped>
@import '~animate.css/animate.min.css';
.weui_cell{
  height: initial;
}
</style>
