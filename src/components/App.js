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
    <VisibleTodoList status='進行中' />
    <VisibleTodoList status='已完成' />
    <Footer />
  </div>
)

export default App
