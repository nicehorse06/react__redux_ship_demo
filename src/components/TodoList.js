import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { VisibilityFilters } from '../actions'

// TodoList 是一個顯示可見 todos 的清單。
// todos: Array 是一個有著 { id, text, completed } 形狀的 todo 項目的陣列

const TodoList = ({ todos, filter }) => {
  if (filter.FILTER_CODE === VisibilityFilters.SHOW_FINISH) {
    todos = todos.filter(t => { return t.status.code == 3 || t.status.code == 4 })
  } else if (filter.FILTER_CODE === VisibilityFilters.SHOW_TODO) {
    todos = todos.filter(t => { return t.status.code == 1 || t.status.code == 2 })
  }
  return (
    <div className="container">
      <div className="Status">
        <div className="title">
          <div className="bar"></div>
          <h1>{filter.STATUS}</h1>
        </div>
        {todos.map(todo => <Todo key={todo.id} {...todo} />)}
      </div>
    </div>
  )
}

// 宣告TodoList的參數型態
// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
// }

export default TodoList
