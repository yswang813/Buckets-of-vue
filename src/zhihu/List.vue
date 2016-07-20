<template>
  <div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          result: '',
        }
      },
      ready: function() {
        // this.$http.jsonp('http://news-at.zhihu.com/api/4/news/latest').then(function (response) {
        //       // success callback
        //       // get status
        //       console.log("response.status:"+response.status);

        //       // set data on vm
        //       this.$set('result', response.data)
        //   }, function (response) {
        //       // error callback
        //       console.log("vue-resource 连接失败")
        //   });
        this.$http.jsonp('http://news-at.zhihu.com/api/4/news/latest', {
          // client_id: 'xxxxxxxxxxxxxxxxxxxxxxxx'
        }, function(data) {
          // this.result = _map(data.data, this.transFormInstagramModelToLocalModel);
        }, {
          'jsonp': 'callback'
        });

      }
  }
</script>

<style scoped>
  @import '~vux/vux.css';
  #iframe {
    /*display: none;*/
  }
</style>