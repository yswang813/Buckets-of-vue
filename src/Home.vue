<template>
  <div>
    <group>
      <cell title="This project include:">
      </cell>
    </group>
    <group>
      <cell title="vue.js" is-link v-link="'/vue.js'">
      </cell>
      <cell title="vue-router" is-link v-link="'vue-router'">
      </cell>
      <cell title="webpack" is-link v-link="'webpack'">
      </cell>
      <cell title="Weui" is-link v-link="'weui'">
      </cell>
    </group>
    <tabbar>
      <tabbar-item selected>
        <img slot="icon" src="../src/assets/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../src/assets/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../src/assets/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../src/assets/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Cell, Group, Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Cell,
    Group,
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
@import '~vux/vux.css';
body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
  padding-bottom: 50px;
}
</style>
