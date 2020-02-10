import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

// App 是 render 所有事物的 root component。
const App = () => (
  <div className='app'>
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
