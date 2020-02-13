import React from 'react'

const Menu = (data) => (
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

export default Menu
