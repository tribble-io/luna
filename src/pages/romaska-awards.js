import React, { useState, useEffect } from 'react'
import { API_URL, api } from '../api/index'

import { Title, Laureate } from '../components/romaska-awards'
import noPhoto from '../assets/img/no-photo-actor.jpg'
import Loader from '../components/loader'

function getLaureatesData(arr) {
  if (arr !== null) {
    var result = arr.reduce(function (r, a) {
      r[a.year] = r[a.year] || []
      r[a.year].push(a)
      return r
    }, Object.create(null))

    const resYears = []
    for (const [, years] of Object.entries(result)) {
      years.forEach((year) => {
        resYears.push(year)
      })
    }
    const groupedByPlay = []
    resYears.forEach((year) => {
      let awards = year.awards
      if (awards.length) {
        var result = awards.reduce(function (r, a) {
          r[a.play] = r[a.play] || []
          r[a.play].push(a)
          return r
        }, Object.create(null))

        const plays = []
        Object.entries(result).forEach(([key, winner]) => {
          const roles = winner?.map((role) => {
            return {
              id: role?.artist?.id,
              role: role.role,
              name: role?.artist?.fullname,
              src:
                role.artist.cover !== null
                  ? API_URL + role?.artist?.cover?.url
                  : noPhoto,
            }
          })
          plays.push({ id: winner[0].id, playTitle: key, roles: roles })
        })
        groupedByPlay.push({ id: year.id, year: year.year, plays: plays })
      }
    })
    return groupedByPlay
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
