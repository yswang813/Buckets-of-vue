<template>
  <div>
    <a class="button" @click="previous" v-link="{ name: 'page', params: { pageNum: page } }">上一页<span>当前页:{{page}}</span></a>
    <ol :page="page" :trigger.sync="finish">
      <li v-for="news of list">
        <p class="title"  v-link="{ name: 'detail', params: { articleId: news.id } }">{{ news.title }}</p>
        <p class="date">{{ news.create_at }}</p>
        <p class="author">By: {{ news.author.loginname }}</p>
      </li>
    </ol>
    <a class="button" @click="next" v-link="{ name: 'page', params: { pageNum: page } }">下一页<span>当前页:{{page}}</span></a>
    <div id="loader" v-show="!finish" :transition="up? 'up-start':'down-start'">
      <span>加载中</span>
    </div>
  </div>
</template>

<script>
// import news from '../news'
export default {
  data () {
    return {
      list: [],
      limit: 10,
      page: parseInt(this.$route.params.pageNum, 10),
      finish: true,
      up: false,
    }
  },
  created () {
    this.get()
  },
  watch: {
    page () {
      this.get()
    },
    finish (val, oldVal) {
      if (!oldVal && val && this.up) {
        document.body.scrollTop = document.body.scrollHeight
      }
    }
  },
  methods: {
    get () {
      this.$http.get(`https://cnodejs.org/api/v1/topics?page=${this.page}&limit=${this.limit}`).then(
        (response) => {
          this.list = response.data.data
          this.list.forEach((data) => {
            const d = new Date(data.create_at)
            data.create_at = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
          })
          setTimeout(() => {
            this.finish = true
          }, 500)
        },
        () => {
          console.log('error')
        }
      )
    },
    previous () {
      if (this.page === 1) {
        console.log('已是第一页')
      } else {
        this.page--
        this.up = true
        this.finish = false
      }
    },
    next () {
      this.page++
      this.up = false
      this.finish = false
      document.body.scrollTop = 0
    }
  }
}
</script>

<style scoped>
/*@import 'https://o4j806krb.qnssl.com/public/stylesheets/index.min.b9167b70.min.css';*/
/*@import '../assets/cnode.min.css';*/
  .button {
    display: block;
    background: #212121;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
  }
  .button span {
    margin-left: 2em;
    font-size: .5rem;
    color: #d6d6d6;
  }
  #loader {
    width: 100%;
    min-height: 3em;
    position: fixed;
    left: 0;
    background: #212121;
    color: #fff;
  }
  #loader span {
    display: block;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: -0.5em;
  }
  .down-start-transition {
    bottom: 0;
    height: 100%;
  }
  .down-start-enter {
    animation: expand .5s 1 cubic-bezier(0, 1, 0, 1) both;
  }
  .down-start-leave {
    animation: collapse .5s 1 cubic-bezier(0, 1, 0, 1) both;
    top: 0;
    bottom: auto;
  }
  .up-start-transition {
    top: 0;
    height: 100%;
  }
  .up-start-enter {
    animation: expand .5s 1 cubic-bezier(0, 1, 0, 1) both;
  }
  .up-start-leave {
    animation: collapse .5s 1 cubic-bezier(0, 1, 0, 1) both;
    top: auto;
    bottom: 0;
  }
  @keyframes expand {
    0% {
      height: 3em;
      transform: translate3d(0, 0, 0);
    }
    100% {
      height: 100%;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes collapse {
    0% {
      height: 100%;
      transform: translate3d(0, 0, 0);
    }
    100% {
      height: 3em;
      transform: translate3d(0, 0, 0);
    }
  }
  ol {
    margin-left: 2rem;
    list-style: outside decimal;
  }
  li {
    line-height: 1.5;
    padding: 1rem;
    border-bottom: 1px solid #b6b6b6;
  }
  .title {
    font-weight: bold;
    font-size: 1.3rem;
  }
  .date {
    font-size: .8rem;
    color: #d6d6d6;
  }
</style>