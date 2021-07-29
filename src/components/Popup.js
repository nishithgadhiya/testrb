import React from 'react'

const Popup = (props) => {
  //handler for enabelling scroll when popup is closed
  const enableScroll = () => {
    const scrollY = document.body.style.top
    document.body.setAttribute('style', '')
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            enableScroll()
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
