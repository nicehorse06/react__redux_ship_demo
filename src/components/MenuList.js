import React, { Component } from 'react'
import Menu from './Menu'
import { SHIP_FILTER, addShipList } from '../actions'
import { store } from '../index'

export default class MenuList extends Component {
  constructor({ menus, filter }) {
    super();
    this.state = {
      menus: menus,
      filter: filter,
    }
  }

  render() {
    if (this.state.filter.CODE === SHIP_FILTER.SHOW_TODO.CODE) {
      this.state.menus = this.state.menus.filter(t => { return t.status.code >= 3 })
    } else if (this.state.filter.CODE === SHIP_FILTER.SHOW_FINISH.CODE) {
      this.state.menus = this.state.menus.filter(t => { return t.status.code <= 2 })
    }
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
