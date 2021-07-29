import React, { useState } from 'react'
//import components
import Popup from './Popup'

const DataList = (props) => {
  const individualData = props.individualData
  const layoverTime = props.layoverTime
  const [buttonPopup, setButtonPopup] = useState(false)

  //handler for popup on click on event div
  const popupHandler = (value) => {
    setButtonPopup(value)
  }

  //handler for disabelling scroll when popup is open
  const scrollDisable = () => {
    const scrollY = window.scrollY
    document.body.setAttribute(
      'style',
      `position:fixed; top:-${scrollY}px; left:0;right:0`,
    )
  }

  //function for getting name of a place
  const getPlace = (code) => {
    switch (code) {
      case 'FLIGHT':
        return ''
      case 'Standby':
        return `SBY (${individualData.Departure})`
      case 'LAYOVER':
        return `${individualData.Departure}`
      case 'OFF':
        return `OFF (${individualData.Departure})`
      case 'POSITIONING':
        return `POSITIONING`
      case 'REPORT':
        return `Report (${individualData.Departure})`
      case 'TRAINING':
        return `TRA (${individualData.Departure})`
      default:
        return ''
    }
  }

  //function for getting departure and destination location
  const getDeparToDesti = (code) => {
    switch (code) {
      case 'FLIGHT':
        return `${individualData.Departure} ${
          individualData.Departure ? `-` : ``
        } ${individualData.Destination}`
      case 'Standby':
        return `Standby`
      case 'LAYOVER':
        return `Layover`
      case 'OFF':
        return `Day OFF`
      case 'POSITIONING':
        return `${individualData.Departure} ${
          individualData.Departure ? `-` : ``
        } ${individualData.Destination}`
      case 'REPORT':
        return `Report`
      case 'TRAINING':
        return `TRAINING`
      default:
        return ''
    }
  }

  //function for getting time details
  const getTimeDetails = (code) => {
    switch (code) {
      case 'FLIGHT':
        return `${individualData.Time_Depart} ${
          individualData.Time_Depart ? `-` : ``
        } ${individualData.Time_Arrive}`
      case 'Standby':
        return `02:00 - 02:00`
      case 'LAYOVER':
        return `${layoverTime} hours`
      case 'POSITIONING':
        return `${individualData.Time_Depart} ${
          individualData.Time_Depart ? `-` : ``
        } ${individualData.Time_Arrive}`
      case 'REPORT':
        return `${individualData.Time_Depart} ${
          individualData.Time_Depart && individualData.Time_Arrive ? `-` : ``
        } ${individualData.Time_Arrive}`
      case 'TRAINING':
        return `${individualData.Time_Depart} ${
          individualData.Time_Depart ? `-` : ``
        } ${individualData.Time_Arrive}`
      default:
        return ''
    }
  }
  return (
    <div className="data-list">
      <div
        className="data"
        onClick={() => {
          scrollDisable()
          setButtonPopup(true)
        }}
      >
        <div className="icon">
          <img
            src={`/icons/${individualData.DutyCode}.svg`}
            alt={individualData.DutyCode}
          />
        </div>
        <div className="details">
          <div className="upper-details">
            <h4>{getDeparToDesti(individualData.DutyCode)}</h4>
            <h5>{individualData.DutyCode === 'Standby' ? 'Match Crew' : ''}</h5>
          </div>
          <div className="lower-details">
            <h4>{getPlace(individualData.DutyCode)}</h4>
            <h5>{getTimeDetails(individualData.DutyCode)}</h5>
          </div>
        </div>
      </div>
      {/* popup componet */}
      <Popup trigger={buttonPopup} popupHandler={popupHandler}>
        <div className="popup-details">
          {/* if event is duty off*/}
          {individualData.DutyCode === 'OFF' ? (
            <div className="off">
              <h2>Day Off. Take Proper Rest and Enjoy</h2>
              <h3>Date: {individualData.Date ? individualData.Date : 'N/A'}</h3>
              <h3>
                Place:{' '}
                {individualData.Departure ? individualData.Departure : 'N/A'}
              </h3>
            </div>
          ) : (
            // for all other event details
            <>
              <h2>FLIGHT DETAILS</h2>
              <h3>
                Flight Number:{' '}
                {individualData.Flightnr ? individualData.Flightnr : 'N/A'}
              </h3>
              <h3>
                Flight Date: {individualData.Date ? individualData.Date : 'N/A'}
              </h3>
              <h3>
                Aircraft Type:{' '}
                {individualData['Aircraft Type']
                  ? individualData['Aircraft Type']
                  : 'N/A'}
              </h3>
              <h3>Tail: {individualData.Tail ? individualData.Tail : 'N/A'}</h3>
              <h3>
                Dep - Des:{' '}
                {getDeparToDesti(individualData.DutyCode)
                  ? getDeparToDesti(individualData.DutyCode)
                  : 'N/A'}
              </h3>
              <h3>
                Time:{' '}
                {getTimeDetails(individualData.DutyCode)
                  ? getTimeDetails(individualData.DutyCode)
                  : 'N/A'}
              </h3>
              <h3>
                DutyId/DutyCode: {individualData.DutyID}/
                {individualData.DutyCode}
              </h3>
              <h3>
                Captain Name:{' '}
                {individualData.Captain ? individualData.Captain : 'N/A'}
              </h3>
              <h3>
                First Officer:{' '}
                {individualData['First Officer']
                  ? individualData['First Officer']
                  : 'N/A'}
              </h3>
              <h3>
                Flight Attendant:{' '}
                {individualData['Flight Attendant']
                  ? individualData['Flight Attendant']
                  : 'N/A'}
              </h3>
              <h4 className="note">
                Please wear mask and sanitize your hands whenever possible. Stay
                Safe
              </h4>
            </>
          )}
        </div>
      </Popup>
    </div>
  )
}

export default DataList
