<template lang="jade">
.backdrop.mui-flex.center(:transition='animateType', :style='{zIndex: zIndex}')
  slot
</template>

<script>
export default {
  props: {
    zIndex: {
      type: Number,
      default: 70
    },
    animate: {
      type: String
    }
  },

  data () {
    return {
      animateType: this.animate === 'none' ? null : 'fade' // loading组件不要fade效果
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.backdrop
  background-color: rgba(0, 0, 0, .3)
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
</style>

