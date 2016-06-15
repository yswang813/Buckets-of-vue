<template>
    <div id="note-editor">
        <textarea :value="activeNoteText" @input="editNote" class="form-control" style="height:100vh;" :readonly="notelen"></textarea>
    </div>
</template>

<script>
import { editNote } from '../vuex/actions'
import { activeNoteText } from '../vuex/getters'

export default {
  computed:{
    notelen:function(){
      return this.$store.state.notes.length == 0?true:false
    }
  },
  vuex:{
    getters:{
      activeNoteText
    },
    actions:{
      editNote
    }
  },
}
</script>
