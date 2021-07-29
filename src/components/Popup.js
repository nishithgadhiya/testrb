import React from 'react'

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.popupHandler(false)
          }}
        >
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
