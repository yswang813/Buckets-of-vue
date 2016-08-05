// action 会收到 store 作为它的第一个参数
// 在 store 里我们只需要 dispatch （在有些情况下需要 state）
// 我们可以利用 ES6 的解构（destructuring）语法来简化参数的使用
export const incrementCounter = function ( { dispatch, state }) {
  dispatch('INCREMENT', state.inputVal)
}

export const decrementCounter = function ( { dispatch, state }) {
  dispatch('DECREMENT', state.inputVal)
}

export const inputValue = function ( { dispatch }, e) {
  dispatch('INPUT_VALUE', e.target.value)
}

export const addNote = function ( { dispatch } ) {
  dispatch('ADD_NOTE')
}
export const deleteNote = function ( { dispatch } ) {
  dispatch('DELETE_NOTE')
}
export const toggleFavorite = function ( { dispatch } ) {
  dispatch('TOGGLE_FAVORITE')
}
export const editNote = function ( { dispatch }, e) {
  dispatch('EDIT_NOTE', e.target.value)
}
export const updateActiveNote = function ( { dispatch }, note) {
  dispatch('SET_ACTIVE_NOTE', note)
}
