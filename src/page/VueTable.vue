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
      <x-button type="primary" style="color:#fff" @click="save">提交</x-button>
    </group>
    <div>{{{ str }}}</div>
  </div>
</template>

<script>
import XInput from 'vux/src/components/x-input/index.vue'
import XButton from 'vux/src/components/x-button/index.vue'
import Group from 'vux/src/components/group/index.vue'
export default {
  methods: {
    components: {
      XInput,
      XButton,
      Group
    },
    save () {
      this.$http.post('http://localhost:8888/submit', {
        name: this.name,
        phone: this.phone
      }).then( (ret) => {
        console.log(ret)
      })
    },
    alert () {
      console.log('woo')
    }
  },
  data () {
    return {
      name: '',
      phone: '',
      str: '<a @click="alert()">??</a>'
    }
  }
}
</script>

<style scoped>
label{
  margin-bottom: 0;
}
</style>
