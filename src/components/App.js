import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { SHIP_FILTER } from '../actions'

// App 是 render 所有事物的 root component。
const App = () => (
  <div className='app'>
    <Header />
    <AddTodo />
    <VisibleTodoList filter={SHIP_FILTER.SHOW_TODO} />
    <VisibleTodoList filter={SHIP_FILTER.SHOW_FINISH} />
    <Footer />
  </div>
)

export default App
