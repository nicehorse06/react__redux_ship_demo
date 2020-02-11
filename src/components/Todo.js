import React from 'react'
import PropTypes from 'prop-types'

// Todo 是單一一個 todo 項目。
// text: string 是要顯示的文字。
const Todo = (data) => (
  <div>
    <tr className="notice-row2">
      <td rowSpan="2">
        <img src={data.logo}></img>
      </td>
      <td>{data.status.type}</td>
      <td colSpan="2">預計出貨：{data.date}</td>
    </tr>
    <tr className="notice-row3">
      <td colSpan="3">{data.name}</td>
    </tr>
  </div>
)


// 宣告Todo的參數型態
// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Todo
