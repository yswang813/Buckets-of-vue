<template id="grid-template">
  <div>
    <div class="form-group">
      <table>
        <thead>
          <tr>
            <th v-for="col in columns">
              {{ col.name | capitalize}}
            </th>
            <th>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(index,entry) in dataList | filterBy searchKey" class="animated"
          transition="bounce"
          stagger="100">
            <td v-for="col in columns">
              <span v-if="col.isKey"><a href="javascript:void(0)" @click="openEditItemDialog(entry[col.name])">{{entry[col.name]}}</a></span>
              <span v-else>{{entry[col.name]}}</span>
            </td>
            <td class="text-center">
              <button class="btn btn-danger" @click="deleteItem(entry)">delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container">
      <button class="btn" @click="openNewItemDialog('Create New Item')">Create</button>
    </div>

    <modal-dialog :mode="mode" :title="title" :item="item" :fields="columns" v-on:create-item="createItem" v-on:update-item="updateItem">
    </modal-dialog>
  </div>

</template>

<script>
import ModalDialog from './dialog.vue'
export default {
  props: ['dataList', 'columns', 'searchKey'],
  transitions: {
    bounce: {
      enterClass: 'bounceInLeft',
      leaveClass: 'bounceOutRight'
    }
  },
  components: {
    ModalDialog
  },
  data () {
    return {
      mode: 0,
      title: '',
      keyColumn: '',
      item: {}
    }
  },
  ready: function () {
    for (let i = 0; i < this.columns.length; i++) {
      if (this.columns[i].isKey) {
        this.keyColumn = this.columns[i]['name']
        break
      }
    }
  },
  methods: {
    openNewItemDialog: function (title) {
      // 对话框的标题
      this.title = title
      // mode = 1表示新建模式
      this.mode = 1
      // 初始化this.item
      this.item = {}
      // 广播事件，showDialog是modal-dialog组件的一个方法，传入参数true表示显示对话框
      this.$broadcast('showDialog', true)
    },
    openEditItemDialog: function (key) {
      // 根据主键查找当前修改的数据
      let currentItem = this.findItemByKey(key)
      // 对话框的标题
      this.title = 'Edit Item - ' + key
      // mode = 2表示修改模式
      this.mode = 2
      // 将选中的数据拷贝到this.item
      this.item = this.initItemForUpdate(currentItem)
      // 广播事件，传入参数true表示显示对话框
      this.$broadcast('showDialog', true)
    },
    // 弹出修改数据的对话框时，使用对象的深拷贝
    initItemForUpdate (p, c) {
      c = c || {}
      for (let i in p) {
      // for ( let i = Object.keys(p)[0]; i < Object.keys(p); i++) {
        // 属性i是否为p对象的自有属性
        if (p.hasOwnProperty(i)) {
          // 属性i是否为复杂类型
          if (typeof p[i] === 'object') {
            // 如果p[i]是数组，则创建一个新数组
            // 如果p[i]是普通对象，则创建一个新对象
            c[i] = Array.isArray(p[i]) ? [] : {}
            // 递归拷贝复杂类型的属性
            this.initItemForUpdate(p[i], c[i])
          } else {
            // 属性是基础类型时，直接拷贝
            c[i] = p[i]
          }
        }
      }
      return c
    },
    findItemByKey: function (key) {
      let keyColumn = this.keyColumn
      for (let i = 0; i < this.dataList.length; i++) {
        if (this.dataList[i][keyColumn] === key) {
          return this.dataList[i]
        }
      }
    },
    itemExists: function () {
      let keyColumn = this.keyColumn
      for (let i = 0; i < this.dataList.length; i++) {
        if (this.item[keyColumn] === this.dataList[i][keyColumn]) {
          return true
        }
      }
      return false
    },
    createItem: function () {
      let keyColumn = this.keyColumn
      if (!this.itemExists()) {
        // 将item追加到dataList
        this.dataList.push(this.item)
        // 广播事件，传入参数false表示隐藏对话框
        this.$broadcast('showDialog', false)
        // 新建完数据后，重置item对象
        this.item = {}
      } else {
        console.log(keyColumn + ' "' + this.item[keyColumn] + '" is already exists')
      }
    },
    updateItem: function () {
      // 获取主键列
      let keyColumn = this.keyColumn
      for (let i = 0; i < this.dataList.length; i++) {
        // 根据主键查找要修改的数据，然后将this.item数据更新到this.dataList[i]
        if (this.dataList[i][keyColumn] === this.item[keyColumn]) {
          for (let j in this.item) {
            this.dataList[i][j] = this.item[j]
          }
          // Object.assign(this.dataList[i], this.item)
          break
        }
      }
      // 广播事件，传入参数false表示隐藏对话框
      this.$broadcast('showDialog', false)
      // 修改完数据后，重置item对象
      this.item = {}
    },
    deleteItem: function (entry) {
      let data = this.dataList
      data.forEach( (item, i) => {
        if (item === entry) {
          data.splice(i, 1)
          return
        }
      })
    }
  },
}
</script>

<style scoped>
  @import '~animate.css/animate.min.css';
</style>