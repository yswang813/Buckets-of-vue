<template>
  <div id='container' @click.self='reset'>
    <div v-for='(index, item) in addressList | absFilter undefined' style='display:inline-block'>
      <span class='triangle' @click='showSec(item.value)'>></span>
      <span @click='showSec(item.value)'>{{item.name}}</span>
      <input type='checkbox'
             value={{item.name}}
             v-model='provinceIds'
             @click='selectAllCity($event, item.value)'>
    </div>
    <hr>
    <div v-for='item in addressList | absFilter provinceId' style='display:inline-block'>
      <span class='triangle' @click='showThird(item)'>></span>
      <span @click='showThird(item)'>{{item.name}}</span>
      <input type='checkbox'
             value={{item.name}}
             v-model='cityIds'>
    </div>
    <hr>
    <!-- <div v-for='item in addressList | absFilter areaId' style='display:inline-block'>
      <span>{{item.name}}</span>
      <input type='checkbox'
             value={{item.name}}
             v-model='areaIds'>
    </div> -->
    <hr>
    <p>Checked Province: {{ provinceIds | json }}</p>
    <p>Checked City: {{ cityIds | json }}</p>
    <p>Checked Area: {{ areaIds | json }}</p>
  </div>
</template>

<script>
import addressList from './address.json'
export default {
  data () {
    return {
      addressList: addressList,
      provinceId: null,
      areaId: null,
      provinceIds: [],
      cityIds: [],
      areaIds: [],
    }
  },
  methods: {
    showSec: function (parameter) {
      this.provinceId = parameter
      this.areaId = null
    },
    showThird: function (parameter) {
      this.areaId = parameter
    },
    // selectAllCity: function (e, parameter) {
    //   if (e.target.checked) {
    //     let arr = []
    //     addressList.forEach( (item) => {
    //       if (item.parent === parameter) {
    //         arr.push(item)
    //         // console.log(arr)
    //       }
    //     })
    //     this.cityIds = this.cityIds.concat(arr)
    //   } else {
    //     let arr = []
    //     this.cityIds.forEach( (item) => {
    //       if (item.parent === parameter) {
    //         return false
    //       } else {
    //         arr.push(item)
    //       }
    //     })
    //     this.cityIds = arr
    //   }
    // },
    reset: function () {
      this.provinceId = null
      this.areaId = null
    }
  },
  filters: {
    absFilter: function (list, value) {
      let arr = []
      for (let i = 0; i < list.length; i++) {
        if (list[i]['parent'] === value) {
          arr.push(list[i])
        }
      }
      return arr
    },
  },
  ready () {
    // console.log(this.$els)
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  p{
    margin: 0;
  }
  #container{
    padding: 20px;
  }
  .triangle{
    display: inline-block;
    transform: rotate(90deg);
  }
  input[type='checkbox']{
    margin-right: 5px;
  }
</style>