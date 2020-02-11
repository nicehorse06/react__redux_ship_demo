let nextTodoId = 0

// 用function 回傳 action 為 action creator
// 實際被使用的狀況為 dispatch(addTodo(text))
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_TODO: 'SHOW_TODO',
  SHOW_FINISH: 'SHOW_FINISH'
}
