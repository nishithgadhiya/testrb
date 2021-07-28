import React from 'react'
import moment from 'moment'

const Header = (props) => {
  const date = moment(props.date, 'DD/MM/YYYY')
  const day = date.format('D')
  const month = date.format('MMM').toLocaleLowerCase()
  const year = date.format('YYYY')
  return (
    <div className="header">
      <div className="header-content">
        <h3>{`${day} ${month}. ${year}`}</h3>
      </div>
    </div>
  )
}

export default Header
