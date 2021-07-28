import React, { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  useEffect(() => {
    async function getData() {
      await axios(
        'https://rosterbuster.aero/wp-content/uploads/dummy-response.json',
        {
          method: 'GET',
        },
      )
        .then((res) => {
          console.log(res)
          console.log(res.data)
        })
        .catch((error) => {
          console.log('error')
          console.log(error)
        })
    }
    getData()
  }, [])
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
