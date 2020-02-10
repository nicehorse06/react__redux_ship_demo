import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

// TodoList 是一個顯示可見 todos 的清單。
// todos: Array 是一個有著 { id, text, completed } 形狀的 todo 項目的陣列。
const TodoList = ({ todos }) => (
  <table>
    <thead className="thead-dark">
      <tr>
        <th colSpan="4">進行中</th>
      </tr>
    </thead>
    <tbody className='movie-list'>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
        />
      )}
    </tbody>

  </table>
)

// 宣告TodoList的參數型態
// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
// }

export default TodoList
