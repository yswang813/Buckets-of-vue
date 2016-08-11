<template>
  <div>
    <h3>Count is {{ counterValue }}</h3>
    <input type="number" :value="inputVal" @input="inputValue">
  </div>
</template>

<script>
// 暂时注解
import { inputValue } from '../store/crement/actions.js'
export default {
  vuex: {
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      counterValue: state => state.crement.count,
      inputVal: state => state.crement.inputVal
    },
    actions: {
      inputValue
    }
  },
}
</script>

<style scoped>
  h3{
    text-align: center;
  }
</style>
