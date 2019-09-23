import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

// TodoList 是一個顯示可見 todos 的清單。
// todos: Array 是一個有著 { id, text, completed } 形狀的 todo 項目的陣列。
// toggleTodo(id: number) 是一個當 todo 被點擊時呼叫的 callback。
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

// 宣告TodoList的參數型態
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
