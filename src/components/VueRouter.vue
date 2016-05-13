<template>
  <div>
    <x-header style="background:#000;"></x-header>
    <h1>vue-router is a router for vue.js.</h1>
    <div v-for="src in list" style="background-color:yellow;text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" @success="success" @error="error" class="ximg-demo" error-class="ximg-error" :offset=-300></x-img>
    </div>
  </div>
</template>

<script>
import { XHeader,XImg } from 'vux'


export default {
  components: {
    XImg,
    XHeader
  },
  methods: {
    success: function (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error: function (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  },
  data () {
    return {
      list: [
        'http://7xpqzn.com2.z0.glb.qiniucdn.com/Flb4OqKSSm8EAzh85sj3b7bC2xg3',
        'http://7xpqzn.com2.z0.glb.qiniucdn.com/FoJOTPuQaJmBvNGhlCkkl0iXvnWR',
        'http://7xpqzn.com2.z0.glb.qiniucdn.com/Ftza8jH26NqbG-VPgpxvEy1T6h0A',
        'http://7xpqzn.com2.z0.glb.qiniucdn.com/Fle7MjNXEFmxJFm5TftRfPnc5jzp',
        'http://7xpqzn.com2.z0.glb.qiniucdn.com/Flb4OqKSSm8EAzh85sj3b7bC2xg3',
        'http://7xpqzn.com2.z0.glb.qiniucdn.com/FoJOTPuQaJmBvNGhlCkkl0iXvnWR',
        'http://7xpqzn.com2.z0.glb.qiniucdn.com/Ftza8jH26NqbG-VPgpxvEy1T6h0A',
        'http://7xpqzn.com2.z0.glb.qiniucdn.com/Fle7MjNXEFmxJFm5TftRfPnc5jzp'
      ]
    }
  }
}
</script>

<style scope>
@import '~vux/vux.css';

img{
  display: block;
}

.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
</style>
