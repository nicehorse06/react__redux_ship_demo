import React from 'react'
import PropTypes from 'prop-types'

// Todo 是單一一個 todo 項目。
// text: string 是要顯示的文字。
// completed: boolean 是 todo 是否應該顯示為被劃掉。
// onClick() 是一個當 todo 被點擊時呼叫的 callback。
const Todo = ({ completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <tr class="notice-row2">
      <td rowspan="2">
        <img src="https://static.oopocket.com/store/iconTreemall@3x.png"></img>
      </td>
      <td>已成立</td>
      <td colspan="2">隨機出貨</td>
    </tr>
    <tr class="notice-row3">
      <td colspan="3">{text}</td>
    </tr>
  </li>
)

// 宣告Todo的參數型態
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
