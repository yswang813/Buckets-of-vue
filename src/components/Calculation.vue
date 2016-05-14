<template>
  <div>
    <x-header style="background:#000;"></x-header>
    <group-title>calculation</group-title>
    <box gap="10px 10px">
      <flexbox>
        <flexbox-item><input v-model="nownum" readonly="readonly" id="monitor"></flexbox-item>
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
        <flexbox-item><x-button type="primary" @click="del">c</x-button></flexbox-item>
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
      // 如果点击了计算符号
      if(this.clickcal){
        this.nownum = 0
        this.clickcal = false
      }
      // .
      if( val == "." && (this.nownum).toString().match(/\./) !=null ){
        return false
      }
      // 如果0 直接+
      if(this.nownum == 0){
        this.nownum += val
      }
      // 非0 按字符串形式加
      else{
        this.nownum += val +''
      }
    },
    // c
    del :function(){
      // 整数
      if(Number(this.nownum)%1 == 0 & this.nownum != 0){
        this.nownum = this.nownum.toString().slice(0,-1)
      }
      // 带小数
      else if(this.nownum == 0){
        return false
      }
      else{
        if(this.nownum.toString().split(".")[1].length == 1){
          this.nownum = this.nownum.toString().slice(0,-2)
        }
        else{
          this.nownum = this.nownum.toString().slice(0,-1)
        }
      }
    },
    add: function (){
      this.lastnum = this.nownum
      this.clickcal = true
      this.calcfun = "add"
    },
    reduce: function (){
      this.lastnum = this.nownum
      this.clickcal = true
      this.calcfun = "reduce"
    },
    multiplication: function (){
      this.lastnum = this.nownum
      this.clickcal = true
      this.calcfun = "multiplication"
    },
    division: function (){
      this.lastnum = this.nownum
      this.clickcal = true
      this.calcfun = "division"
    },
    cal: function (){
      switch (this.calcfun) {
        case "add":
          this.nownum = Number(this.lastnum) + Number(this.nownum)
          break;
        case "reduce":
          this.nownum = Number(this.lastnum) - Number(this.nownum)
          break;
        case "multiplication":
          this.nownum = Number(this.lastnum) * Number(this.nownum)
          break;
        case "division":
          this.nownum = Number(this.lastnum) / Number(this.nownum)
          break;
        default:
        // 默认加法
          this.nownum = Number(this.lastnum) + Number(this.nownum)
      }
    }
  },
  data () {
    return{
      operation: "",
      nownum: 0,
      lastnum: 0,
      clickcal: false,
      calcfun: ''
    }
  },
  computed: {
    result: function (){
      return 0;
    },
  }
}
</script>

<style scope>
@import '~vux/vux.css';

h1{
  text-align: center;
}

#monitor{
  width: 100%;
  background: #ddd;
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
