<template>
  <div>
    <x-header style="background:#000;"></x-header>
    <group title="">
      <x-input title="姓名" placeholder="请输入姓名" is-type="china-name" :value.sync="name"></x-input>
    </group>

    <group title="">
      <x-input title="手机号码" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" :value.sync="phone"></x-input>
    </group>

    <group title="">
      <x-button type="primary" style="color:#fff" @click="save()">提交</x-button>
    </group>
    <div v-if=true>{{{ str }}}</div>
  </div>
</template>

<script>
import { XHeader,Group,XInput,XButton } from 'vux'


export default {
  components: {
    XHeader,
    Group,
    XInput,
    XButton
  },
  methods: {
    save () {
      this.$http.post('http://localhost:8888/submit',{
        name : this.name,
        phone : this.phone
      }).then(function(ret) {
        console.log(ret);
      })
    },
    alert () {
      console.log("woo")
    }
  },
  data () {
    return {
      name:'',
      phone:'',
      str:'<a @click="alert()">??</a>'
    }
  }
}
</script>

<style scoped>
label{
  margin-bottom: 0;
}
</style>
