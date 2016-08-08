<template>
  <div>
    <p>It's child</p>
    <p v-if='show'>prop show现在是true啦</p>
    <slot>
      未分发则显示我~ 
    </slot>
    <button @click='emit("hello")'>$emit</button>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      emit (a) {
        this.$emit('child-ready', a)
      },
    }
  }
</script>