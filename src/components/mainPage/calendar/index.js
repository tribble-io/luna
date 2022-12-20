import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Separator } from '../../mainPage'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import './styles.css'
// import required modules
import { Navigation } from 'swiper'

import styles from './calendar.module.scss'
const CALENDAR_WIDTH = window.screen.width

const ARR_OFFSET = 3
const DAY = 1000 * 60 * 60 * 24

const DATE_WIDTH = 43 // 3
const DATE_NUMBER = CALENDAR_WIDTH > 573 ? 15 : 8

// const WINDOW_OFFSET = 5.3;

const DATE_LOAD_LENGTH = DATE_NUMBER + 20 * ARR_OFFSET

const SLIDER_HEIGHT = CALENDAR_WIDTH > 573 ? 33 : 40

function DateBtn({ date: { date, free }, isselected, setSelected }) {
  const week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

  function assignDateHref(date) {
    const newDateHref = new Date(date)
    const getDateHref =
      newDateHref.getDate() < 10
        ? '0' + newDateHref.getDate()
        : newDateHref.getDate()
    const monthHref = newDateHref.getMonth() + 1
    const getMonthHref = monthHref < 10 ? '0' + monthHref : monthHref
    const fullDate = `${newDateHref.getFullYear()}-${getMonthHref}-${getDateHref}`
    return `#${fullDate}`
  }

  return (
    <>
      <div
        className={
          isselected
            ? styles.dateBtnContainerSelected
            : free
            ? styles.dateBtnContainer
            : styles.dateBtnContainerHover
        }
        style={{
          '--date-width': `${DATE_WIDTH}px`,
        }}
      >
        <img src='/img/calendar_luna.png' alt='' />
        <div
          className={styles.dateContainer}
          onClick={() => {
            !free && setSelected(date)
          }}
        >
          <div className={styles.dateNum}>
            <a href={assignDateHref(date)}> {date.getDate()}</a>
          </div>
          <div className={styles.weekDay}>{week[date.getDay()]}</div>
        </div>
      </div>
    </>
  )
}

export function Calendar({ setFirstDate, items }) {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  const [selected, setSelected] = React.useState(() => {
    const date = new Date(items[0].date)
    return date
  })

  const dates = React.useMemo(() => {
    const today = new Date()
    return Array.from({ length: DATE_LOAD_LENGTH }, (_, i) => {
      const date = new Date()
      date.setTime(today.getTime() + (i - ARR_OFFSET) * DAY)
      return {
        date: date,
        free: !items.some((item) => {
          const itemdate = new Date(item.date)
          return itemdate.getTime() === date.getTime()
        }),
      }
    })
  }, [items])

  const initialSlide = dates.map((date) => date.free).indexOf(false)

  function moveDate(index) {
    setFirstDate(dates[index].date)
  }

  return (
    <>
      <div
        className={styles.datesStrip}
        style={{
          '--strip-height': `${SLIDER_HEIGHT}px`,
        }}
      >
        <img
          src='/img/larr.png'
          alt='<'
          className={styles.larr}
          ref={navigationPrevRef}
        />
        <div className={styles.dateWindow}>
          <Swiper
            slidesPerView={5}
            slidesPerGroup={3}
            spaceBetween={10}
            grabCursor={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            initialSlide={initialSlide}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 10,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 15,
                slidesPerGroup: 10,
              },
            }}
            onActiveIndexChange={(swiper) => moveDate(swiper.activeIndex)}
            className='calendarSlider'
          >
            {dates.map((date, i) => (
              <SwiperSlide key={i}>
                {
                  <DateBtn
                    key={i}
                    date={date}
                    isselected={date.date.getTime() === selected.getTime()}
                    setSelected={setSelected}
                  />
                }
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <img
          src='/img/rarr.png'
          alt='>'
          className={styles.rarr}
          ref={navigationNextRef}
        />
      </div>
      <div className={styles.cardsWindowContainer}>
        <Item items={items} />
        <div className={styles.mobileButton}>
          <Link to={'/shows'}>все спектакли</Link>
        </div>
      </div>
      <Separator />
    </>
  )
}
