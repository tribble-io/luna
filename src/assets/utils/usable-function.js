import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// get scroll position
export const useWindowScrollPositions = () => {
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

export function uniqueBy(a, cond) {
  return a.filter((e, i) => a.findIndex((e2) => cond(e, e2)) === i)
}

// check screen width
export const IsMobile = window.screen.width > 500 ? false : true

// function for scroll page to top on every transition
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return null
}

const WEEK_DAY = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
const MONTH_NAMES = [
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
]

let MONTH_NAMES_CASE = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

export function getDateStr(date) {
  const newDate = new Date(date)

  return {
    date: newDate.getDate(),
    month: newDate.getMonth() + 1,
    year: newDate.getFullYear(),
    day_of_week: WEEK_DAY[newDate.getDay()],
    month_name: MONTH_NAMES[newDate.getMonth()],
    month_name_case: MONTH_NAMES_CASE[newDate.getMonth()],
  }
}
