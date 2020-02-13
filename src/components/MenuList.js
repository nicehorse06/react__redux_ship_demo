import React, { Component } from 'react'
import Menu from './Menu'
import { addShipList, SHIP_FILTER } from '../actions'
import { store } from '../index'

export default class MenuList extends Component {
  constructor({ menus, filter }) {
    super();
    this.state = {
      menus: menus,
      filter: filter,
    }
  }
  componentDidMount() {
    if (this.state.filter.FILTER_CODE === SHIP_FILTER.SHOW_TODO.FILTER_CODE) {
      this.state.menus = this.state.menus.filter(t => { return t.status.code == 3 || t.status.code == 4 })
    } else if (this.state.filter.FILTER_CODE === SHIP_FILTER.SHOW_FINISH.FILTER_CODE) {
      this.state.menus = this.state.menus.filter(t => { return t.status.code == 1 || t.status.code == 2 })
    }
    // todo add http request
    // todo add store.dispatch()
    // store.dispatch(addShipList({ "name": "Jimmy", "logo": "https: //static.oopocket.com/store/iconTreemall@3x.png", "status": { "code": 3, "type": "已取消" }, "date": "107/6/12" }))
    console.log(store.getState())
  }

  render() {
    return (
      <div className="container">
        <div className="Status">
          <div className="title">
            <div className="bar"></div>
            <h1>{this.state.filter.STATUS}</h1>
          </div>
          {this.state.menus.map(menu => <Menu key={menu.id} {...menu} />)}
        </div>
      </div>
    )
  }
}
