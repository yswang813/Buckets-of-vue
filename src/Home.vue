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
  </div>
</template>

<script>
import { Cell, Group } from 'vux'
export default {
  components: {
    Cell,
    Group
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
