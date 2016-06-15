<template>
    <div id="toolbar">
        <i>
            <img src="../assets/avatar.png"/>
        </i>
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
        <div class="bottom"><i class="glyphicon glyphicon-cog"></i></div>
    </div>
</template>

<script>
import { addNote, deleteNote, toggleFavorite } from '../vuex/actions'
import { activeNote } from '../vuex/getters'

export default {
    vuex:{
        getters:{
            activeNote
        },
        actions:{
            addNote,
            deleteNote,
            toggleFavorite
        }
    }
}
</script>
<style scoped>
.bottom {
    position: absolute;
    bottom: 0;
}
#toolbar i img{
    margin-bottom: 30px;
    width: 25px;
    height: 25px;
}
</style>
