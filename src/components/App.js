import React, { Component } from 'react'
import VisibleMenuList from '../containers/VisibleMenuList'
import { SHIP_FILTER, addShipList } from '../actions'
import { store } from '../index'

// App 是 render 所有事物的 root component。
export default class App extends Component {
  componentDidMount() {
    store.dispatch(addShipList({ "name": "Jimmy", "logo": "https: //static.oopocket.com/store/iconTreemall@3x.png", "status": { "code": 3, "type": "已取消" }, "date": "107/6/12" }))
  }
  render() {
    return (
      <div className='app'>
        <VisibleMenuList filter={SHIP_FILTER.SHOW_TODO} />
        <VisibleMenuList filter={SHIP_FILTER.SHOW_FINISH} />
      </div>
    )
  }
}