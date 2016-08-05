<template>
  <div>
    <group title="">
      <x-input title="" placeholder="输入想转换成uniCode的文字" :value.sync="word"></x-input>
    </group>

    <group title="">
      <x-input title="" placeholder="" :value.sync="word2unicode"></x-input>
    </group>

    <br>

    <group title="">
      <x-input title="" placeholder="输入想转换成文字的unicode" :value.sync="unicode"></x-input>
    </group>

    <group title="">
      <x-input title="" placeholder="" :value.sync="unicode2word"></x-input>
    </group>
  </div>
</template>

<script>
import XInput from 'vux/src/components/x-input/index.vue'
import Group from 'vux/src/components/group/index.vue'
export default {
  components: {
    XInput,
    Group
  },
  data () {
    return {
      word: '',
      unicode: ''
    }
  },
  computed: {
    word2unicode: function () {
      let res = []
      if (this.word === '') {
        return ''
      } else {
        for (let i = 0; i < this.word.length; i++) {
          res[i] = ('000' + this.word.charCodeAt(i).toString(16)).slice(-4)
        }
        return '\\u' + res.join('\\u')
      }
    },
    unicode2word: function () {
      let str = this.unicode.replace(/\\/g, '%')
      return unescape(str)
    }
  }
}
</script>

<style scoped>
  p{
    width:100%;
  }
</style>