let nextTodoId = 0
let nextShipId = 0

// 用function 回傳 action 為 action creator
// 實際被使用的狀況為 dispatch(addTodo(text))
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const addShipList = ship_data => ({
  type: 'ADD_SHIP_LIST',
  id: nextShipId++,
  name: ship_data.name,
  logo: ship_data.logo,
  status: ship_data.status,
  date: ship_data.date,
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

export const SHIP_FILTER = {
  SHOW_TODO: {
    FILTER_CODE: 'SHOW_TODO',
    STATUS: '進行中',
  },
  SHOW_FINISH: {
    FILTER_CODE: 'SHOW_FINISH',
    STATUS: '已完成',
  },
}
