<template>
  <div>
    <h2>通过prop传递值进行计算</h2>
    <input v-model="number1">
    +
    <input v-model="number2">
    =
    <span>{{{ parseFloat(this.number1) + parseFloat(this.number2) }}}</span>
  </div>
  <div>
    <h2>计算属性computed</h2>
    <input v-model="add1">
    +
    <input v-model="add2">
    =
    <span>{{ total }}</span>
  </div>
</template>

<script>
export default {
  props: {
    number1:{
      type: Number,
      default: 0
    },
    number2:{
      type: Number,
      default: 0
    }
  },
  data () {
    return{
      add1: 0,
      add2: 0
    }
  },
  computed: {
    total: function(){
      return Number(this.add1) + Number(this.add2)
    }
  }
}
</script>

<style scoped>
  span{
    color: red
  }
</style>
