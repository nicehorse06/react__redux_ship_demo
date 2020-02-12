import data from '../../data'

const todos = (state = data.orders, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

// url = 'https://nicehorse06.github.io/test_ship_data/data.json'






export default todos
