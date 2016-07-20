<template>
  <div>
    <!-- <prop :number1="2" :number2="3"></prop> -->
    <group>
      <cell title="This project include:">
      </cell>
    </group>
    <group>
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
    </group>
    <group>
      <cell title="calculation" is-link v-link="'/calculation'">
      </cell>
      <cell title="md" is-link v-link="'/markdown'">
      </cell>
      <cell title="VuexIncrement" is-link v-link="'/vuex'">
      </cell>
      <cell title="Notebook" is-link v-link="'/note'">
      </cell>
      <cell title="UniCode" is-link v-link="'/UniCode'">
      </cell>
      <cell title="Transition" is-link v-link="'/transition'">
      </cell>
    </group>
    <group>
      <cell title="List" is-link v-link="'/List'">
      </cell>
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
