import React from 'react'
import moment from 'moment'

const Header = (props) => {
  //for time, date and day
  const date = moment(props.date, 'DD/MM/YYYY')
  const week = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
  const dayOfWeek = date.day()
  const day = date.format('D')
  const month = date.format('MMM').toLocaleLowerCase()
  const year = date.format('YYYY')
  return (
    <div className="header">
      <div className="header-content">
        <h3>{`${week[dayOfWeek]} ${day} ${month}. ${year}`}</h3>
      </div>
    </div>
  )
}

export default Header
