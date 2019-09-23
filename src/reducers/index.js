import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// combineReducers 就只是簡易整合reducer
// 等同於寫一個大的reducer function 回傳所有reducer
export default combineReducers({
  todos,
  visibilityFilter
})
