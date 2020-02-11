import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

// VisibleTodoList 根據目前的顯示篩選器來篩選 todos 並 render 一個 TodoList。
// 真正的filter在這裡執行
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_TODO:
      return todos.filter(t => t.status.code == 1 || 2)
    case VisibilityFilters.SHOW_FINISH:
      return todos.filter(t => t.status.code == 3 || 4)
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
