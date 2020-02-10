import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

// VisibleTodoList 根據目前的顯示篩選器來篩選 todos 並 render 一個 TodoList。

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// 結合getVisibleTodos，把state的結果轉換成props中
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
