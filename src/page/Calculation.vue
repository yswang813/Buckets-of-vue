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
import { XHeader, Flexbox, FlexboxItem, XButton, Box, GroupTitle } from 'vux'

export default {
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    XButton,
    Box,
    GroupTitle
  },
  methods: {
    update: function (val){
      if(this.restill){
        this.hold = this.lastnum = 0
        this.clickcal = false
        this.clacfun = ''
        this.restill = false
        if(val == "."){
          this.show = "0."
        }else{
          this.show = val
        }
        return false
      }
      // .
      if( val == "." && (this.show).toString().match(/\./) !=null ){
        return false
      }
      // 如果点击了计算符号
      if(this.clickcal){
        this.hold = this.show
        this.show = val
        this.clickcal = false
      }else{
        // 如果0 直接+
        if(this.show == 0){
          this.show += val
        }
        // 非0 按字符串形式加
        else{
          this.show += val +''
        }
      }
    },
    // c
    del: function(){
      // // 整数
      // if(Number(this.show)%1 == 0 & this.show != 0){
      //   this.show = this.show.toString().slice(0,-1)
      // }
      // // 带小数
      // else if(this.show == 0){
      //   return false
      // }
      // else{
      //   if(this.show.toString().split(".")[1].length == 1){
      //     this.show = this.show.toString().slice(0,-2)
      //   }
      //   else{
      //     this.show = this.show.toString().slice(0,-1)
      //   }
      // }
      this.show = this.hold = this.lastnum = 0
      this.clickcal = false
      this.clacfun = ''
      this.restill = false
    },
    add: function (){
      if(this.clickcal){
        return false
      }
      this.lastnum = this.show
      this.clickcal = true
      this.calcfun = "add"
      this.restill = false
    },
    reduce: function (){
      if(this.clickcal){
        return false
      }
      this.lastnum = this.show
      this.clickcal = true
      this.calcfun = "reduce"
      this.restill = false
    },
    multiplication: function (){
      if(this.clickcal){
        return false
      }
      this.lastnum = this.show
      this.clickcal = true
      this.calcfun = "multiplication"
      this.restill = false
    },
    division: function (){
      if(this.clickcal){
        return false
      }
      this.lastnum = this.show
      this.clickcal = true
      this.calcfun = "division"
      this.restill = false
    },
    cal: function (){
      this.clickcal = false
      if(this.hold == 0){
        return false
      }
      switch (this.calcfun) {
        case "add":
          if(this.clickcal){
            return false
          }
          this.hold = this.show
          this.show = Number(this.lastnum) + Number(this.hold)
          this.calcfun = "stilladd"
          break;
        case "stilladd":
          this.show = Number(this.show) + Number(this.hold)
          this.calcfun = "stilladd"
          break;
        case "reduce":
          if(this.clickcal){
            return false
          }
          this.hold = this.show
          this.show = Number(this.lastnum) - Number(this.hold)
          this.calcfun = "stillreduce"
          break;
        case "stillreduce":
          this.show = Number(this.show) - Number(this.hold)
          this.calcfun = "stillreduce"
          break;
        case "multiplication":
          if(this.clickcal){
            return false
          }
          this.hold = this.show
          this.show = Number(this.lastnum) * Number(this.hold)
          this.calcfun = "stillmultiplication"
          break;
        case "stillmultiplication":
          this.show = Number(this.show) * Number(this.hold)
          this.calcfun = "stillmultiplication"
          break;
        case "division":
          if(this.clickcal){
            return false
          }
          this.hold = this.show
          this.show = Number(this.lastnum) / Number(this.hold)
          this.calcfun = "stilldivision"
          break;
        case "stilldivision":
          this.show = Number(this.show) / Number(this.hold)
          this.calcfun = "stilldivision"
          break;
      }
      this.restill = true
    }
  },
  data () {
    return{
      show: 0,//显示的结果
      hold: 0,//暂存区
      lastnum: 0,//之前的结果
      clickcal: false,//点击了运算符号
      calcfun: '',//使用了什么calcfun,
      restill: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '~vux/vux.css';

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
