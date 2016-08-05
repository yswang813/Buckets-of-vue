<template>
  <div>
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>

import Editor from './Editor.vue'
import NotesList from './NotesList.vue'
import Toolbar from './Toolbar.vue'
import store from '../vuex/store'

export default {
  components: {
    Editor,
    NotesList,
    Toolbar
  },
  store
}
</script>

<style scoped>
html, #app {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}

#toolbar {
  float: left;
  width: 75px;
  height: 100%;
  background-color: #444444;
  color: #888888;
  padding: 35px 25px 25px 25px;
}

#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

#list-header {
  padding: 5px 25px 25px 25px;
}

#list-header h2 {
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  padding-bottom: 8px;
}

#notes-list .container {
  height: calc(100% - 137px);
	max-height: calc(100% - 137px);
	overflow: auto;
  width: 100%;
  padding: 0;
}

#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}

.list-group-item-heading {
  font-weight: 300;
  font-size: 15px;
}

#note-editor {
  height: 100%;
  margin-left: 375px;
}

#note-editor textarea {
  height: 100%;
  border: 0;
  border-radius: 0;
}

#toolbar i {
  font-size: 25px;
  margin-bottom: 30px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}

#toolbar i:hover {
  opacity: 1;
}

.starred {
  color: #60F74F;
}
</style>
