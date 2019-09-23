import React from 'react'
import PropTypes from 'prop-types'

// Todo 是單一一個 todo 項目。
// text: string 是要顯示的文字。
// completed: boolean 是 todo 是否應該顯示為被劃掉。
// onClick() 是一個當 todo 被點擊時呼叫的 callback。
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

// 宣告Todo的參數型態
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
