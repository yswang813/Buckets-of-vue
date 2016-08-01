<template>
  <div>
    <router-view
    transition
    transition-mode="out-in"></router-view>
    <!-- <tabbar>
      <tabbar-item selected is-link v-link="'/'">
        <img slot="icon" src="../src/assets/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot is-link v-link="'vue-router'">
        <img slot="icon" src="../src/assets/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item is-link v-link="'webpack'">
        <img slot="icon" src="../src/assets/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item is-link v-link="'weui'">
        <img slot="icon" src="../src/assets/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar> -->
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}

</script>

<style>
html,body{
  height: 100%;
}

body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
}

.v-transition{
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
}

</style>
