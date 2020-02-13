let nextShipId = 0

export const addShipList = ship_data => ({
  type: 'ADD_SHIP_LIST',
  id: nextShipId++,
  name: ship_data.name,
  logo: ship_data.logo,
  status: {
    code: ship_data.code,
    type: ship_data.type,
  },
  date: ship_data.date,
})

export const SHIP_FILTER = {
  SHOW_TODO: {
    CODE: 'SHOW_TODO',
    STATUS: '進行中',
    LOGO: 'https://static.oopocket.com/store/iconTreemall@3x.png',
  },
  SHOW_FINISH: {
    CODE: 'SHOW_FINISH',
    STATUS: '已完成',
    LOGO: '',
  },
}
