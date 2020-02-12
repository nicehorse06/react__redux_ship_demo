import React from 'react'
import PropTypes from 'prop-types'

// Todo 是單一一個 todo 項目。
// text: string 是要顯示的文字。
const Todo = (data) => (
  <div class="order">
    <div class="icon">
      <img src={data.logo} alt=""></img>
    </div>
    <div class="text">
      <div class="top">
        <div class="status">{data.status.type}</div>
        <div class="date">預計出貨：{data.date}</div>
      </div>
      <div class="bottom">{data.name}</div>
    </div>
    <div class="mark">
      <img src="https://image.flaticon.com/icons/svg/271/271228.svg" alt="" />
    </div>
  </div>
)


// 宣告Todo的參數型態
// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Todo
