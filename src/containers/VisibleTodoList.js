import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { addShipList } from '../actions'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  addShipList: menu => dispatch(addShipList(menu))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
