<template>
  <div>
    <h3>Count is {{ counterValue }}</h3>
    <input type="number" :value="inputVal" @input="inputValue">
  </div>
</template>

<script>
import { getCount, getinputVal } from '../vuex/getters'
import { inputValue } from '../vuex/actions'
export default {
  vuex: {
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      counterValue: getCount,
      inputVal: getinputVal
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
