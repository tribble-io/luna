import React, { useState, useEffect, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import './styles.css'
// import required modules
import { HashNavigation } from 'swiper'

import styles from './item.module.scss'

const PLACES = {
  'Малый зал': {
    name: 'малый зал',
    text_color: '#FEFFBB',
  },
  'Большой зал': {
    name: 'большой зал',
    text_color: '#C5C5C5',
  },
  'Зал "Маленькая Луна"': {
    name: 'маленькая луна',
    text_color: '#9FDDFF',
  },
}

const useElementWidth = () => {
  const ref = useRef()
  const [width, setWidth] = useState(null)

  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect
      setWidth(width)
    })
  )

  useEffect(() => {
    observer.current.observe(ref.current)
  }, [ref, observer])

  return [ref, width]
}

export function Item({ items }) {
  const [ref, CURRENT_WIDTH] = useElementWidth()
  const ITEM_WIDTH = 270

  const checkSlides = () => {
    // find the maximum amount of slides
    const slidesAmount = Math.floor(CURRENT_WIDTH / ITEM_WIDTH)
    // find free pixels
    const freePixels = CURRENT_WIDTH - slidesAmount * ITEM_WIDTH
    // Check if we have enough margint for each slide
    const checkMargin = freePixels / slidesAmount
    const resultSlidesAmount =
      checkMargin >= 25
        ? slidesAmount
        : slidesAmount > 1
        ? slidesAmount - 1
        : slidesAmount
    // Return amount of slides and margint for each slide
    return {
      slidesPerView: window.screen.width > 992 ? resultSlidesAmount : 'auto',
      spaceBetween: resultSlidesAmount > 3 ? checkMargin : 25,
      centeredSlides: window.screen.width > 576 ? false : true,
    }
  }
  const { slidesPerView, spaceBetween, centeredSlides } = checkSlides()

  function itemCheckDate(item) {
    return new Date(item.attributes.date)
  }

  function itemCheckPlace(item) {
    return PLACES[item.attributes.place]
  }

  function assignDataHash(item) {
    return `${item.attributes.date}`
  }

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        spaceBetween={spaceBetween}
        modules={[HashNavigation]}
        hashNavigation={{ watchState: true }}
        className='posterSlider'
        ref={ref}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} data-hash={assignDataHash(item)}>
            <div
              className={styles.mainBlock}
              style={{
                '--item-width': `${ITEM_WIDTH}px`,
                '--place-color': itemCheckPlace(item).color,
                '--place-text-color': itemCheckPlace(item).text_color,
              }}
            >
              <a
                href={`http://theatre.restomatik.ru:1337/play/${item.id}`}
                className={styles.imgLink}
              >
                <img
                  className={styles.cardImg}
                  src={`http://theatre.restomatik.ru:1337${item.attributes.play.data.attributes.cover.data.attributes.formats.small.url}`}
                  alt=''
                />
              </a>
              <div className={styles.meta}>
                <img
                  src='/img/item_curtain.png'
                  alt=''
                  className={styles.curtain}
                />
                <div className={styles.mid}>
                  <div className={styles.dateTimeContainer}>
                    <div className={styles.date}>
                      {itemCheckDate(item).getDate()}.
                      {itemCheckDate(item).getMonth() + 1}
                      <img
                        src='/img/moon_poster.png'
                        alt=''
                        className={styles.moonPoster}
                      />
                    </div>
                    <div className={styles.time}>
                      {item.attributes.time.slice(0, 5)}
                    </div>
                  </div>
                  <div className={styles.title}>
                    {item.attributes.play.data.attributes.title}
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div
                    className={styles.place}
                    style={{
                      '--text-color': itemCheckPlace(item).text_color,
                    }}
                  >
                    {itemCheckPlace(item).name}
                  </div>
                  <div className={styles.buy}>
                    <a
                      className={styles.link}
                      href={item.attributes.tickets_link}
                    >
                      БИЛЕТЫ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
