import {
  INCREMENT,
  DECREMENT,
  INPUT_VALUE
} from './mutation-types'


export function incrementCounter ( { dispatch, state } ) {
  dispatch(INCREMENT, state.crement.inputVal)
}
export function decrementCounter ( { dispatch, state } ) {
  dispatch(DECREMENT, state.crement.inputVal)
}
export function inputValue ( { dispatch }, e) {
  dispatch(INPUT_VALUE, e.target.value)
}