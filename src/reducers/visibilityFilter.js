import { VisibilityFilters } from '../actions'

// 在此Reducer過濾的state的初始值為SHOW_ALL
const visibilityFilter = (state = VisibilityFilters.SHOW_TODO, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter