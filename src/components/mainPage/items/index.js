import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDateStr, WINDOW_SCREEN } from '../../../assets'
import { API_URL } from '../../../api'
import { TicketPopUp } from '../../ticketPopup'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import './styles.css'

import styles from './item.module.scss'

const PLACES = {
  'Малая сцена': {
    name: 'малый зал',
    text_color: '#FEFFBB',
  },
  'Большая сцена': {
    name: 'большой зал',
    text_color: '#C5C5C5',
  },
  'Зал «Маленькая Луна»': {
    name: 'маленькая луна',
    text_color: '#9FDDFF',
  },
}

export function Item(props) {
  const { items, selected, setTicketPlayID, ticketData } = props
  const [swiper, setSwiper] = useState(null)
  const [addSliders, setAddSliders] = useState([])
  const [open, setOpen] = useState(false)

  function getSelectedDate(element, index) {
    const selectedDate = getDateStr(selected)
    const getDateHref =
      selectedDate.date < 10 ? '0' + selectedDate.date : selectedDate.date
    const getMonthHref =
      selectedDate.month < 10 ? '0' + selectedDate.month : selectedDate.month
    const selecteDate = `${selectedDate.year}-${getMonthHref}-${getDateHref}`

    if (element.date !== selecteDate) {
      return false
    }

    return index
  }

  useEffect(() => {
    if (WINDOW_SCREEN > 1440) {
      setAddSliders([{}, {}, {}])
    } else if (WINDOW_SCREEN > 992) {
      setAddSliders([{}, {}])
    } else if (WINDOW_SCREEN > 500) {
      setAddSliders([{}])
    }
  }, [])

  useEffect(() => {
    //Find the index of the first needed slide when we get new selected date
    const selectedSlideIndex = items.findIndex(getSelectedDate)
    //Use API method to swipe
    swiper && swiper.slideTo(selectedSlideIndex)
  }, [selected])

  function itemCheckPlace(item) {
    return PLACES[item.play.scene.name]
  }

  return (
    <>
      <TicketPopUp
        closePopup={() => setOpen(false)}
        open={open}
        data={ticketData}
      />
      <Swiper
        onSwiper={setSwiper}
        slidesPerView='auto'
        centeredSlides={true}
        spaceBetween={25}
        className='posterSlider'
        breakpoints={{
          500: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,
          },
          1400: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item?.id}>
            <div
              className={styles.posterBlock}
              style={{
                '--text-color': itemCheckPlace(item)?.text_color,
              }}
            >
              <Link to={`play/${item?.play?.id}`} className={styles.imgLink}>
                <img
                  className={styles.cardImg}
                  src={API_URL + item?.play?.cover?.formats?.small?.url}
                  alt=''
                />
              </Link>
              <div className={styles.posterInfo}>
                <div className={styles.mainInfo}>
                  <div className={styles.title}>{item?.play?.title}</div>
                  <div className={styles.dateRatingContainer}>
                    <div className={styles.date}>
                      {getDateStr(item?.date).date}
                      {'.'}
                      {getDateStr(item?.date).month}
                      <img
                        src='/img/moon_poster.png'
                        alt=''
                        className={styles.moonPoster}
                      />
                    </div>
                    <div className={styles.rating}>{item?.play?.rating}+</div>
                  </div>
                </div>
                <div className={styles.buyTicket}>
                  <div className={styles.place}>
                    {itemCheckPlace(item).name}
                  </div>
                  <button
                    type='button'
                    className={styles.buy}
                    onClick={() => {
                      setOpen(true)
                      setTicketPlayID(item?.play?.id)
                    }}
                  >
                    БИЛЕТЫ
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {addSliders.map((slider, key) => (
          <SwiperSlide key={key}></SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
