<template>
  <div>
    <div class="box">
      <Display></Display>
      <br>
      <Increment></Increment>
      <br>
      <Decrement></Decrement>
    </div>
  </div>
</template>

<script>
// 暂时注解
import store from '../store' // import 我们刚刚创建的 store

export default {
  // store: store // 在根组件加入 store，让它的子组件和 store 连接
  // 或者
  store
}
</script>

<style scoped>
  .box{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
