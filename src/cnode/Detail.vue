<template>
<div id="main">
  <div id="content">
    <div class="panel">
      
      <div class="header topic_header">
        <span class="topic_full_title">
          <span class="put_top" v-if="result.top">置顶</span>
          {{result.title}}
        </span>
        <div class="changes">
          <span>
            作者 <a :href=`/user/${result.author.loginname}` v-if="result.author">{{result.author.loginname}}</a>
          </span>
          <span>
            {{result.visit_count}} 次浏览
          </span>
          <span v-if="result.tab == 'share'"> 来自 分享</span>
        </div>
      </div>

      <div class="inner topic" style="border-top:0">
        <div class="topic_content">
          <div class="markdown-text">
            {{{result.content}}}
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="header">
          <span class="col_fade" v-if="result.replies">{{ result.replies.length }} 回复</span>
        </div>
        <div v-for='reply in result.replies' class="cell reply_area reply_item
        " :id=`reply${$index}` reply_id={{reply.id}} reply_to_id="">
          <a class="anchor" id={{reply.id}}></a>
          <div class="author_content">
            <a class="user_avatar">
              <img :src='reply.author.avatar_url' title="leapon"></a>
            <div class="user_info">
              <a class="dark reply_author">{{reply.author.loginname}}</a>
              <a class="reply_time" href="#578ba2a5b78759e813a579eb">{{$index+1}}楼</a></div>
          </div>
          <div class="reply_content from-leapon">
            {{{reply.content}}}
          </div>
          <div class="clearfix">
            <div class="reply2_area"></div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      result: {},
      id: this.$route.params.articleId,
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      this.$http.get(`https://cnodejs.org/api/v1/topic/${this.id}`).then(
        (response) => {
          this.result = response.data.data
          this.createTime = response.data.data.create_at
        },
        () => {
          console.log('error')
        }
      )
    },
  }
}
</script>

<style scoped>
/*@import 'https://o4j806krb.qnssl.com/public/stylesheets/index.min.b9167b70.min.css';*/
/*@import '../assets/cnode.min.css';*/
</style>