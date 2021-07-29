import React, { useEffect, useState } from 'react'
//Import Styles
import './styles/app.scss'
//import axios from 'axios'
import { v4 as uuid } from 'uuid'

import { jsonData } from './jsonData'

//import Components
import Header from './components/Header'
import DataList from './components/DataList'
import moment from 'moment'

function App() {
  //const [layover, setLayover] = useState('')
  const [apidata, setApiData] = useState(jsonData)
  let dateChange
  let count = 0
  let layoverTime, tempTime, i
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
  }, [])
  return (
    <div>
      {apidata.map((data, key) => {
        count++
        if (data.DutyCode === 'LAYOVER') {
          console.log(count)
          tempTime = 1440 - moment.duration(data.Time_Depart).asMinutes()

          for (i = count; i < apidata.length; i++) {
            if (apidata[i].DutyCode == 'FLIGHT') {
              layoverTime =
                tempTime + moment.duration(apidata[i].Time_Depart).asMinutes()
              break
            } else {
              tempTime = tempTime + 1440
            }
          }
          var minutes = layoverTime % 60
          var hours = (layoverTime - minutes) / 60
          console.log(hours + ':' + minutes)
          layoverTime = `${hours}:${minutes ? minutes : '00'}`
        }

        if (data.Date !== dateChange) {
          dateChange = data.Date
          return (
            <>
              <Header key={uuid()} date={data.Date} />
              <DataList key={uuid()} individualData={data} />
            </>
          )
        }

        return (
          <DataList
            key={uuid()}
            individualData={data}
            layoverTime={layoverTime}
          />
        )
      })}
    </div>
  )
}

export default App
