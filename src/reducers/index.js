import { combineReducers } from 'redux'
import menus from './menus'

// combineReducers 就只是簡易整合reducer
// 等同於寫一個大的reducer function 回傳所有reducer
export default combineReducers({
  menus,
})
