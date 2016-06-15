<template>
  <div>
    <x-header style="background:#000;"></x-header>
    <cell v-for="item in result.data" :title="$index + '.' +item.toString()">
    </cell>
</template>

<script>
import { XHeader,Cell } from 'vux'


export default {
  components: {
    XHeader,
    Cell
  },
  data (){
    return {
      result:'',
    }
  },
  ready: function() {

      // GET request
      // this.$http({url: 'http://dkmall.weixun66.com/dkmall/user!info.action?debug=1', method: 'GET'}).then(function (response) {
      this.$http({url: '/static/t.json', method: 'GET'}).then(function (response) {
          // success callback
          // get status
          console.log("response.status:"+response.status);

          // set data on vm
          this.$set('result', response.data)
      }, function (response) {
          // error callback
          console.log("vue-resource 连接失败")
      });

    }
}
</script>

<style scoped>
@import '~vux/vux.css';
</style>
