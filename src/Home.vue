<template>
  <div>
    <group>
      <cell title='Items:'>
      </cell>
    </group>
    <group>
      <cell title="Calculation" is-link v-link="{ name: 'calculation'}">
      </cell>
      <cell title="MdEditor" is-link v-link="{ name: 'markdown'}">
      </cell>
      <cell title="Vuex++--" is-link v-link="{ name: 'vuex'}">
      </cell>
      <!-- <cell title="Notebook" is-link v-link="{ name: 'note'}">
      </cell> -->
      <cell title="UniCode" is-link v-link="{ name: 'uniCode'}">
      </cell>
      <cell title="Transition" is-link v-link="{ name: 'transition'}">
      </cell>
      <cell title="Crud" is-link v-link="{ name: 'crud'}">
      </cell>
      <cell title="WowList" is-link v-link="{ name: 'wowTable'}">
      </cell>
      <cell title="CnodeList" is-link v-link="{ name: 'page', params: { pageNum: 1 }}">
      </cell>
      <cell title="Notification" is-link v-link="{ name: 'notification'}">
      </cell>
      <cell title="Address" is-link v-link="{ name: 'address'}">
      </cell>
    </group>
  </div>
</template>

<script>
import Group from 'vux/src/components/group/index.vue'
import Cell from 'vux/src/components/cell/index.vue'
export default {
  components: {
    Cell,
    Group
  },
}
</script>

<style>
@import '~vux/dist/vux.css';
</style>
