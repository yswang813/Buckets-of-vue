<template>
  <div class="container">
    <p style='text-align:center'>这个页面未做移动端自适应处理</p>
    <v-table
    :rows="rows"></v-table>
  </div>
</template>

<script>
import arena from '../api/arena'
import vTable from '../components/Table.vue'

export default {
  components: { vTable },
  data () {
    return {
      region: 'CN',
      laddar: '3v3',
      rows: []
    }
  },
  methods: {
    getLaddar (region, laddar) {
      arena.getLaddar(region, laddar, (err, val) => {
        if (!err) {
          this.rows = val.rows
        }
      })
    }
  },
  created () {
    this.getLaddar(this.region, this.laddar)
  }
}
</script>

<style scoped>
@import '../assets/milligram.min.css';
</style>