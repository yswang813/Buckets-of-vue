<template>
  <div>
    <p>it's parent</p>
    <child @child-ready='handle' :show='isshow'>
      分发内容了 slot隐藏
    </child>
    <button @click='toggleShow'>click me</button>
  </div>
</template>

<script>
import child from './child.vue'
export default {
  data () {
    return {
      isshow: false
    }
  },
  components: {
    child
  },
  methods: {
    handle (msg) {
      console.log(msg)
    },
    toggleShow () {
      this.isshow = !this.isshow
    }
  }
}
</script>