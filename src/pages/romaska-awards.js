import React, { useState, useEffect } from 'react'
import { API_URL, api } from '../api/index'

import { Title, Laureate } from '../components/romaska-awards'
import Loader from '../components/loader'

function getLaureatesData(arr) {
  if (arr !== null) {
    const review = arr.map((item) => {
      const plays = item.attributes?.plays.map((plays) => {
        const role = plays?.role.map((role) => {
          return {
            id: role?.actor?.data.id,
            role: role.role,
            name: role?.actor?.data?.attributes?.fullname,
            src:
              API_URL +
              role?.actor?.data?.attributes?.cover?.data?.attributes.url,
          }
        })
        return {
          id: plays?.id,
          play: plays?.play,
          role: role,
        }
      })
      return {
        id: item.id,
        year: item.attributes?.year,
        plays: plays,
      }
    })
    return review
  } else {
    return []
  }
}

export function RomaskaAwards() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api
      .exportRomaskaData()
      .then((response) => {
        setData(getLaureatesData(response))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <main>
      <Title />
      {isLoading ? <Loader /> : <Laureate data={data} />}
    </main>
  )
}
