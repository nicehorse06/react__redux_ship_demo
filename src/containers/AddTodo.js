import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// AddTodo 是一個有 "Add" 按鈕的輸入欄位
const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input type='text' ref={node => input = node} />
        <button className='btn' type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
