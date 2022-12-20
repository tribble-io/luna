import React, { useState, useEffect } from 'react'
import { api } from '../api/index'
import { getDateStr } from '../assets'

import { PressFilters, PressCards } from '../components/press'
import Loader from '../components/loader'

function getListYear(arr) {
  if (arr !== null) {
    const data = arr
      .map((item) => {
        // Get only value of the years
        const year = getDateStr(item.date).year
        return year
      })
      .filter((number, index, numbers) => {
        // Remove duplicates from the array
        return numbers.indexOf(number) == index
      })
      .sort((a, b) => b - a)
    return data
  } else {
    return []
  }
}

const getFullDate = (date) => {
  return `${getDateStr(date).date}.${getDateStr(date).month}.${
    getDateStr(date).year
  }`
}

function getPressData(arr) {
  if (arr !== null) {
    const review = arr.map((item) => {
      return {
        id: item.id,
        title: item.title,
        publisher: item.publisher,
        date: getFullDate(item.date),
        link: item.link,
      }
    })
    return review
  } else {
    return []
  }
}

export function Press() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [yearsList, setyearsList] = useState([])

  useEffect(() => {
    api
      .exportPressData()
      .then((response) => {
        setyearsList(getListYear(response.data))
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  const updateFilter = (index) => {
    api
      .exportPressData(yearsList[index])
      .then((response) => {
        setItems(getPressData(response.data))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }

  return (
    <main>
      {yearsList.length === 0 ? (
        <Loader />
      ) : (
        <PressFilters
          updateFilter={updateFilter}
          selectedOpt='0'
          list={yearsList}
        />
      )}

      {isLoading ? <Loader /> : <PressCards items={items} />}
    </main>
  )
}
