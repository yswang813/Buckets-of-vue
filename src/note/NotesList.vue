<template>
    <div id="notes-list">
        <div class="filterContainer">
            <input v-model="filterText" class="form-control" placeholder="搜索"></input>
        </div>
        <div id="list-header">
            <div class="btn-group btn-group-justified" role="group">
                <div class="btn-group" role="group">
                    <button class="btn btn-default" @click="show = 'all'" :class="{active:show === 'all'}">
                        所有笔记
                    </button>
                </div>
                <div class="btn-group" role="group">
                    <button class="btn btn-default" @click="show = 'favorites'" :class="{active:show==='favorites'}">
                        已收藏笔记
                    </button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="list-group">
                <a v-for="note in filteredNotes | filterBy filterText" class="list-group-item" :class="{active:activeNote === note}" @click="updateActiveNote(note)">
                    <h4 class="list-group-item-heading">
                        {{note.text.trim().substring(0,30)}}
                    </h4>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { updateActiveNote } from '../vuex/actions'
import { activeNote } from '../vuex/getters'

export default{
  data () {
    return {
      show: 'all',
      filterText: '',
      notes: [],
    }
  },
  vuex: {
    getters: {
      // notes,
      activeNote
    },
    actions: {
      updateActiveNote
    }
  },
  ready () {
    this.$http.get('http://localhost:8888/notessss')
    .then( (ret) => {
      this.notes = ret.data.notes
      console.log(ret)
    })
    .then( (err) => {
      console.log(err)
    })
  },
  computed: {
    filteredNotes () {
      if (this.show === 'all') {
        let notes = this.notes
        let notesF = []
        for (let i = 0, l = notes.length; i < l; i++) {
          if ((notes[i].text.toLowerCase()).includes(this.filterText.toLowerCase())) {
            notesF.push(notes[i])
          }
        }
        return this.filterText === '' ? notes : notesF
      } else if (this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }
    }
  }
}
</script>
<style scoped>
.container{
  width: 100%;
  padding:0;
}
.filterContainer{
    margin:10px 25px;
}
.list-group-item{
    padding: 10px 25px;
    background:#F5F5F5;
}
.list-group-item h4{
  overflow: hidden;
}
.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {
    color:#333;
    background-color: #CECECE;
}
a.list-group-item:focus, a.list-group-item:hover, button.list-group-item:focus, button.list-group-item:hover{
    background-color: #E5E5E5;
}
</style>
