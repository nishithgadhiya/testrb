import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import './App.css'
import { jsonData } from './jsonData'

function App() {
  const [apidata, setApiData] = useState(jsonData)
  useEffect(() => {
    // async function getData() {
    //   await axios(
    //     'https://rosterbuster.aero/wp-content/uploads/dummy-response.json',
    //     {
    //       method: 'GET',
    //     },
    //   )
    //     .then((res) => {
    //       setApiData(res.data)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // }
    // getData()
    console.log(apidata)
  }, [])
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
