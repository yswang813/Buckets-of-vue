<template>
  <div>
    <router-view transition="expand" 
                 transition-mode="out-in" 
                 class="animated">
    </router-view>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}

</script>

<style>

html,body{
  height: 100%;
}

body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
}

.expand-transition {
  transition: all .3s ease;
  padding: 0px;
  overflow: hidden;
}

.expand-enter, .expand-leave {
  padding: 0 10px;
  opacity: 0;
}

</style>
