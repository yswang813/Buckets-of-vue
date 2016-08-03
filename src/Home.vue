<template>
  <div>
    <!-- <group>
      <cell title="vue.js" is-link v-link="'vue-js'">
      </cell>
      <cell title="vue-router" is-link v-link="'vue-router'">
      </cell>
      <cell title="vue-resource" is-link v-link="'vue-resource'">
      </cell>
      <cell title="webpack" is-link v-link="'webpack'">
      </cell>
      <cell title="Weui" is-link v-link="'weui'">
      </cell>
    </group> -->
    <group>
      <cell title='Items:'>
      </cell>
    </group>
    <group>
      <cell title="Calculation" is-link v-link="'/calculation'">
      </cell>
      <cell title="MdEditor" is-link v-link="'/markdown'">
      </cell>
      <cell title="Vuex++--" is-link v-link="'/vuex'">
      </cell>
      <cell title="Notebook" is-link v-link="'/note'">
      </cell>
      <cell title="UniCode" is-link v-link="'/UniCode'">
      </cell>
      <cell title="Transition" is-link v-link="'/transition'">
      </cell>
      <cell title="Crud" is-link v-link="'/crud'">
      </cell>
      <cell title="WowList" is-link v-link="'/wowTable'">
      </cell>
      <cell title="CnodeList" is-link v-link="{ name: 'page', params: { pageNum: 1 }}">
      </cell>
      <!-- <cell title="List" is-link v-link="'/ZhihuList'">
      </cell> -->
    </group>
  </div>
</template>

<script>
import { Cell, Group } from 'vux'
import Prop from './page/Prop'
export default {
  components: {
    Cell,
    Group,
    Prop
  },
}
</script>

<style>
@import '~vux/vux.css';
</style>
