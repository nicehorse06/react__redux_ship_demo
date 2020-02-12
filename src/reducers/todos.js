import data from '../../data'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SHIP_LIST':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          logo: action.logo,
          status: action.status,
          date: action.date,
        }
      ]
    default:
      return state
  }
}

export default todos