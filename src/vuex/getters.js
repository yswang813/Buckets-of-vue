// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
export const getCount = state => state.count
export const getinputVal = state => state.inputVal

export const notes = state => state.notes
export const activeNote = state => state.activeNote
export const activeNoteText = state => state.activeNote.text
