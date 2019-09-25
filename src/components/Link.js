import React from 'react'
import PropTypes from 'prop-types'

// Link 是一個有 callback 的 link。
// onClick() 是一個當 link 被點擊時呼叫的 callback。
const Link = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       className='btn'
    >
      {children}
    </button>
)

// 檢查Link的參數設置
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
