<template>
  <div>
    <div class="container">
      <div class="form-group">
        <label>Search</label>
        <input type="text" class="search-input" v-model="searchQuery" />
      </div>

    </div>
    <div class="container">
      <simple-grid :data-list="people" :columns="columns" :search-key="searchQuery">
      </simple-grid>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      columns: [{
        name: 'name',
        isKey: true
      }, {
        name: 'age'
      }, {
        name: 'sex',
        dataSource: ['Male', 'Female']
      }],
      people: [{
        name: 'Jack',
        age: 30,
        sex: 'Male'
      }, {
        name: 'Bill',
        age: 26,
        sex: 'Male'
      }, {
        name: 'Tracy',
        age: 22,
        sex: 'Female'
      }, {
        name: 'Chris',
        age: 36,
        sex: 'Male'
      }]
    }
  },
}

</script>

<style scoped>
  @import '~bootstrap/dist/css/bootstrap.min.css';
  #grid-template, #dialog-template{
    display: none;
  }
</style>