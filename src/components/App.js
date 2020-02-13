import React, { Component } from 'react'
import VisibleMenuList from '../containers/VisibleMenuList'
import { SHIP_FILTER } from '../actions'

// App 是 render 所有事物的 root component。
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <VisibleMenuList filter={SHIP_FILTER.SHOW_TODO} />
        <VisibleMenuList filter={SHIP_FILTER.SHOW_FINISH} />
      </div>
    )
  }
}