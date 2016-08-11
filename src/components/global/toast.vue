<template lang="jade">
backdrop(@click='close', :z-index='99')
  section.mui-flex.center
    .cell
      p {{content}}
</template>

<script type="text/babel">
import toast from '../../utils/toast'
import backdrop from '../../components/backdrop/backdrop.vue'

export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },

  components: {
    backdrop
  },

  ready () {
    document.body.appendChild(this.$el)
  },

  beforeDestroy () {
    document.body.removeChild(this.$el)
  },

  methods: {
    close () {
      toast.hide()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
section {
  //msg
  width: 420px;
  min-height: 146px;
  padding: 1.5em 1em;
  border-radius: 4Px;
  background-color: rgba(0, 0, 0, 0.65);
  text-align: center;
  color: #fff;
  word-break: break-all;
  .cell {
    background-color: transparent;
  }
  p {
    white-space: pre-line;
    margin: 0;
  }
  .btn {
    margin-top: 1em;
  }
}

.fade-out {
  &-leave {
    opacity: 0;
    transition: all .25s;
  }
}
</style>
