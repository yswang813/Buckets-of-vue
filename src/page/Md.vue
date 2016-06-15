<template>
  <div id="editor">
    <textarea v-model="input" debounce="300"></textarea>
    <div v-html="input | marked"></div>
  </div>
</template>

<script>
  import marked from 'marked'
  export default {
    data(){
      return{
        input: '## 活跃社区\n\
\n\
- [segmentfault](http://segmentfault.com/u/aha2mao)\n\
- [div.io](http://div.io/user/2274)\n\
\n\
# 技能清单\n\
以下均为我熟练使用的技能\n\
\n\
- 开发系统：OS X EI Capitan\n\
- 命令行工具：iTerm2\n\
- 开发工具：Atom/Sublime Text/Webstorm\n\
- Web开发：Html/JavaScript/Css\n\
- 设计工具：Adobe PhtotShop/Abobe Illustrator\n\
- Web框架：JQuery/fis2/Vue.js\n\
- 前端框架：Bootstrap/Weui\n\
- 前端工具：Bower/Gulp/Sass\n\
- 版本管理、文档和自动化部署工具：Svn/Git\n\
- 云和开放平台：微信应用开发\n\
\n\
---\n\
\n\
# 致谢\n\
\n\
感谢您花时间阅读我的简历，期待能有机会和您共事。'
      }
    },
    filters: {
      marked: marked
    }
  }
</script>

<style scoped>
html, body, #editor {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #editor div {
  display: inline-block;
  width: 50%;
  height: 90vh;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
  float:left;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
