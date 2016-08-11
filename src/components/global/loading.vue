<template lang="jade">
backdrop(:z-index='9999', animate='none')
  .loading-wrapper
    .spinner
      .spinner-blade
      .spinner-blade
      .spinner-blade
      .spinner-blade
      .spinner-blade
      .spinner-blade
      .spinner-blade
      .spinner-blade
      .spinner-blade
      .spinner-blade
      .spinner-blade
      .spinner-blade
    span(v-if='text') {{text}}
    | 请稍后...
</template>

<script>
import backdrop from '../../components/backdrop/backdrop.vue'

export default{
  props: ['text'],
  components: {
    backdrop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.loading-wrapper {
  padding: 30px 50px;
  border-radius: 10Px;
  background-color: rgba(0, 0, 0, 0.65);
  text-align: center;
  color: #fff;
  font-size: 14px;
}

.spinner {
  position: relative;
  width: 1em;
  height: 1em;
  margin: 10px auto 20px;
  font-size: 3em;
}

.spinner .spinner-blade {
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 0.074em;
  height: 0.2777em;
  background-color: #fff;
  border-radius: 0.0555em;
  animation: spinner-fade 1s linear infinite;
}

for i in (1..12)
  .spinner .spinner-blade:nth-child({i}) {
    animation-delay: (1 / 12 * (i - 21))s;
    transform: rotate((360 / 12 * i)deg) translate(0, -150%);
  }

@keyframes spinner-fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
}
</style>
