import React from 'react'

const DataList = (props) => {
  const stylePlane = { fontSize: '250%' }
  const individualData = props.individualData
  const layoverTime = props.layoverTime

  const getPlace = (code) => {
    switch (code) {
      case 'FLIGHT':
        return ''
        break
      case 'Standby':
        return `SBY (${individualData.Departure})`
        break
      case 'LAYOVER':
        return `${individualData.Departure}`
        break
      case 'OFF':
        return `OFF (${individualData.Departure})`
        break
      case 'POSITIONING':
        return `POSITIONING`
        break
      default:
        return ''
        break
    }
  }
  const getDeparToDesti = (code) => {
    switch (code) {
      case 'FLIGHT':
        return `${individualData.Departure} ${
          individualData.Departure ? `-` : ``
        } ${individualData.Destination}`
        break
      case 'Standby':
        return `Standby`
        break
      case 'LAYOVER':
        return `Layover`
        break
      case 'OFF':
        return `Day OFF`
        break
      case 'POSITIONING':
        return `${individualData.Departure} ${
          individualData.Departure ? `-` : ``
        } ${individualData.Destination}`
        break
      default:
        return ''
        break
    }
  }
  const getTimeDetails = (code) => {
    switch (code) {
      case 'FLIGHT':
        return `${individualData.Time_Depart} ${
          individualData.Time_Depart ? `-` : ``
        } ${individualData.Time_Arrive}`
        break
      case 'Standby':
        return `02:00 - 02:00`
        break
      case 'LAYOVER':
        return `${layoverTime} hours`
        break
      case 'POSITIONING':
        return `${individualData.Time_Depart} ${
          individualData.Time_Depart ? `-` : ``
        } ${individualData.Time_Arrive}`
        break
      default:
        return ''
        break
    }
  }
  return (
    <div className="data-list">
      <div className="icon">
        <img
          src={`/icons/${individualData.DutyCode}.svg`}
          alt={individualData.DutyCode}
        />
      </div>
      <div className="details">
        <div className="upper-details">
          <h4>{getDeparToDesti(individualData.DutyCode)}</h4>
          <h5>{individualData.DutyCode == 'Standby' ? 'Match Crew' : ''}</h5>
        </div>
        <div className="lower-details">
          <h4>{getPlace(individualData.DutyCode)}</h4>
          <h5>{getTimeDetails(individualData.DutyCode)}</h5>
        </div>
      </div>
    </div>
  )
}

export default DataList
