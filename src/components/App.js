import React, { Component } from 'react'
import Header from './Header'
import VisibleTodoList from '../containers/VisibleTodoList'
import { SHIP_FILTER, addShipList } from '../actions'
import { store } from '../index'

// App 是 render 所有事物的 root component。
export default class App extends Component {
  componentDidMount() {
    store.dispatch(addShipList({ name: 1, logo: 2, status: 3, date: 4 }))
  }
  render() {
    return (
      <div className='app'>
        <VisibleTodoList filter={SHIP_FILTER.SHOW_TODO} />
        <VisibleTodoList filter={SHIP_FILTER.SHOW_FINISH} />
      </div>
    )
  }
}