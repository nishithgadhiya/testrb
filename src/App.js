import React, { useEffect, useState } from 'react'
//import styles
import './styles/app.scss'
//import axios from 'axios'
//imports for unique key, jsondata and momentjs
import { v4 as uuid } from 'uuid'
import { jsonData } from './jsonData'
import moment from 'moment'

//import components
import Header from './components/Header'
import DataList from './components/DataList'

function App() {
  const [apidata, setApiData] = useState(jsonData)
  let dateChange
  let count = 0
  let layoverTime, tempTime, i
  //Below code is for fetching data from api
  // useEffect(() => {
  //   async function getData() {
  //     await axios(
  //       'https://rosterbuster.aero/wp-content/uploads/dummy-response.json',
  //       {
  //         method: 'GET',
  //       },
  //     )
  //       .then((res) => {
  //         setApiData(res.data)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  //   getData()
  // }, [])
  return (
    <div>
      {apidata.map((data, key) => {
        //code for calculating layover time
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

        //code for datewise header and data
        if (data.Date !== dateChange) {
          dateChange = data.Date
          return (
            <>
              <Header key={uuid()} date={data.Date} />
              <DataList
                key={uuid()}
                individualData={data}
                layoverTime={layoverTime}
              />
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
