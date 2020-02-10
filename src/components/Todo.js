import React from 'react'
import PropTypes from 'prop-types'

// Todo 是單一一個 todo 項目。
// text: string 是要顯示的文字。
const Todo = (data) => (
  <tr>
    <td>{data.name}</td>

    <td>{data.logo}</td>
    <td>{data.status.type}</td>
    <td>{data.date}</td>
  </tr>
  // <div>
  //   <tr className="notice-row2">
  //     <td rowSpan="2">
  //       <img src="https://static.oopocket.com/store/iconTreemall@3x.png"></img>
  //     </td>
  //     <td>已成立</td>
  //     <td colSpan="2">隨機出貨</td>
  //   </tr>
  //   <tr className="notice-row3">
  //     <td colSpan="3">{name}</td>
  //   </tr>
  // </div>
)

// 宣告Todo的參數型態
// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Todo
