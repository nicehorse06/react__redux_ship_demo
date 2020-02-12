import React from 'react'
import PropTypes from 'prop-types'

// Todo 是單一一個 todo 項目。
// text: string 是要顯示的文字。
const Todo = (data) => (
  <div className="order">
    <div className="icon">
      <img src={data.logo} alt=""></img>
    </div>
    <div className="text">
      <div className="top">
        <div className="status">{data.status.type}</div>
        <div className="date">預計出貨：{data.date}</div>
      </div>
      <div className="bottom">{data.name}</div>
    </div>
    <div className="mark">
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
