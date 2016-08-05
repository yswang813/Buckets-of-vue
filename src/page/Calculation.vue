<template>
  <div>
    <x-header style="background:#000;"></x-header>
    <group-title>calculation</group-title>
    <box gap="10px 10px">
      <flexbox>
        <flexbox-item><input v-model="show" readonly="readonly" id="monitor"></flexbox-item>
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item><x-button type="primary" @click="update(7)">7</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="update(8)">8</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="update(9)">9</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="division">/</x-button></flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item><x-button type="primary" @click="update(4)">4</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="update(5)">5</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="update(6)">6</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="multiplication">*</x-button></flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item><x-button type="primary" @click="update(1)">1</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="update(2)">2</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="update(3)">3</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="reduce">-</x-button></flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item><x-button type="primary" @click="update(0)">0</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="update('.')">.</x-button></flexbox-item>
        <flexbox-item><x-button type="warn" @click="del">c</x-button></flexbox-item>
        <flexbox-item><x-button type="primary" @click="add">+</x-button></flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item><x-button type="warn" @click="cal">=</x-button></flexbox-item>
      </flexbox>
    </box>
  </div>
</template>

<script>
import XButton from 'vux/src/components/x-button/index.vue'
import XHeader from 'vux/src/components/x-header/index.vue'
import GroupTitle from 'vux/src/components/group-title/index.vue'
import Box from 'vux/src/components/box/index.vue'
import Flexbox from 'vux/src/components/flexbox/index.vue'
import FlexboxItem from 'vux/src/components/flexbox-item/index.vue'

export default {
  components: {
    XButton,
    XHeader,
    GroupTitle,
    Box,
    Flexbox,
    FlexboxItem
  },
  methods: {
    update: (val) => {
      if (this.restill) {
        this.hold = this.lastnum = 0
        this.clickcal = false
        this.clacfun = ''
        this.restill = false
        if (val === '.') {
          this.show = '0.'
        } else {
          this.show = val
        }
        return false
      }
      // .
      if ( val === '.' && (this.show).toString().match(/\./) != null ) {
        return false
      }
      // 如果点击了计算符号
      if (this.clickcal) {
        this.hold = this.show
        this.show = val
        this.clickcal = false
      } else {
        // 如果0 直接+
        if (this.show === 0) {
          this.show += val
        } else {
          // 非0 按字符串形式加
          this.show += val + ''
        }
      }
    },
    // c
    del: () => {
      this.show = this.hold = this.lastnum = 0
      this.clickcal = false
      this.clacfun = ''
      this.restill = false
    },
    add: () => {
      if (this.clickcal) {
        return false
      }
      this.lastnum = this.show
      this.clickcal = true
      this.calcfun = 'add'
      this.restill = false
    },
    reduce: () => {
      if (this.clickcal) {
        return false
      }
      this.lastnum = this.show
      this.clickcal = true
      this.calcfun = 'reduce'
      this.restill = false
    },
    multiplication: () => {
      if (this.clickcal) {
        return false
      }
      this.lastnum = this.show
      this.clickcal = true
      this.calcfun = 'multiplication'
      this.restill = false
    },
    division: () => {
      if (this.clickcal) {
        return false
      }
      this.lastnum = this.show
      this.clickcal = true
      this.calcfun = 'division'
      this.restill = false
    },
    cal: () => {
      this.clickcal = false
      if (this.hold === 0) {
        return false
      }
      switch (this.calcfun) {
        case 'add':
          if (this.clickcal) {
            return false
          }
          this.hold = this.show
          this.show = Number(this.lastnum) + Number(this.hold)
          this.calcfun = 'stilladd'
          break
        case 'stilladd':
          this.show = Number(this.show) + Number(this.hold)
          this.calcfun = 'stilladd'
          break
        case 'reduce':
          if (this.clickcal) {
            return false
          }
          this.hold = this.show
          this.show = Number(this.lastnum) - Number(this.hold)
          this.calcfun = 'stillreduce'
          break
        case 'stillreduce':
          this.show = Number(this.show) - Number(this.hold)
          this.calcfun = 'stillreduce'
          break
        case 'multiplication':
          if (this.clickcal) {
            return false
          }
          this.hold = this.show
          this.show = Number(this.lastnum) * Number(this.hold)
          this.calcfun = 'stillmultiplication'
          break
        case 'stillmultiplication':
          this.show = Number(this.show) * Number(this.hold)
          this.calcfun = 'stillmultiplication'
          break
        case 'division':
          if (this.clickcal) {
            return false
          }
          this.hold = this.show
          this.show = Number(this.lastnum) / Number(this.hold)
          this.calcfun = 'stilldivision'
          break
        case 'stilldivision':
          this.show = Number(this.show) / Number(this.hold)
          this.calcfun = 'stilldivision'
          break
        default:
          if (this.clickcal) {
            return false
          }
          this.hold = this.show
          this.show = Number(this.lastnum) + Number(this.hold)
          this.calcfun = 'stilladd'
          break
      }
      this.restill = true
    }
  },
  data () {
    return {
      show: 0,          //  显示的结果
      hold: 0,          //  暂存区
      lastnum: 0,       // 之前的结果
      clickcal: false,  //  点击了运算符号
      calcfun: '',      //  使用了什么calcfun,
      restill: false
    }
  }
}
</script>

<style scoped lang="scss">

$ddd:#ddd;

h1{
  text-align: center;
}

#monitor{
  width: 100%;
  background: $ddd;
  border:none;
  height: 50px;
  line-height: 50px;
  font-size: 36px;
  text-align: right;
  padding: 0 10px;
  box-sizing: border-box;
}

.weui_btn{
  margin-top: 15px;
}

</style>
