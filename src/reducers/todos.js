import data from '../../data'

const todos = (state = data.orders, action) => {
  switch (action.type) {
    case 'ADD_SHIP_LIST':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          logo: action.logo,
          status: {
            code: action.status.code,
            type: action.status.type,
          },
          date: action.date,
        }
      ]
    default:
      return state
  }
}

export default todos