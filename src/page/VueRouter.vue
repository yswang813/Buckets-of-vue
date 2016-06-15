<template>
  <div>
    <x-header style="background:#000;"></x-header>
    <!-- <h1>vue-router is a router for vue.js.</h1>
    <div v-for="src in list" style="background-color:yellow;text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" @success="success" @error="error" class="ximg-demo" error-class="ximg-error" :offset=-300></x-img>
    </div> -->
    <template v-for="(index, item) of subs">
      <h2>index:{{ index }}</h2>
      <h2>{{ item.title }}</h2>
      <h3>{{ item.class }}</h3>
      <div v-for="lititem in item.sub">
        <h4>{{ lititem.title }}</h4>
        <h4>{{ lititem.url }}</h4>
      </div>
      <hr>
    </template>
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
      ],
      subs:[
        {
          "title":"hello world 1",
          "class":"service",
          "sub":[
            {
              "title":"sub1-1",
              "url":"www"
            },
            {
              "title":"sub1-2",
              "url":"www"
            },
            {
              "title":"sub1-3",
              "url":"www"
            },
          ]
        },
        {
          "title":"hello world 2",
          "class":"service",
          "sub":[
            {
              "title":"sub2-1",
              "url":"www"
            },
            {
              "title":"sub2-2",
              "url":"www"
            },
            {
              "title":"sub2-3",
              "url":"www"
            },
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
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
