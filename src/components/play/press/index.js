import React, { useState, useEffect } from 'react'
import styles from './press.module.scss'
import { CreatePressLine } from '../../createElement'
import { IsMobile } from '../../../assets'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import './style.css'
// import required modules
import { Pagination } from 'swiper'

export function Press({ press, actor = false }) {
  const [pressArr, setPressArr] = useState(press)
  const pressLineaAmount = 3
  const [actPage, setActPage] = useState(1)
  const [allPages, setAllPages] = useState(1)

  const navigation = (e) => {
    const type = e.target.name

    if (type === 'next' && actPage < allPages) {
      setActPage(actPage + 1)
    } else if (type === 'prev' && actPage > 1) {
      setActPage(actPage - 1)
    }
  }

  useEffect(() => {
    setPressArr(
      press.slice(
        pressLineaAmount * actPage - pressLineaAmount,
        pressLineaAmount * actPage
      )
    )
    setAllPages(Math.ceil(press.length / pressLineaAmount))
  }, [actPage])

  return (
    <section id='press'>
      <div className={styles.wrapper}>
        {press.length > 0 && (
          <div
            className={
              actor
                ? `${styles.pressContent} ${styles.pressContentActor}`
                : styles.pressContent
            }
          >
            <h2>упоминания в прессе</h2>
            {IsMobile ? (
              <div className={styles.pressSlider}>
                <Swiper
                  slidesPerView='auto'
                  centeredSlides={true}
                  spaceBetween={20}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  modules={[Pagination]}
                  className='pressSwiper'
                  style={{
                    '--swiper-pagination-bullet-inactive-color': '#fff',
                    '--swiper-pagination-color': '#8CABFA',
                    '--swiper-pagination-bullet-inactive-opacity': '0.6',
                  }}
                >
                  {pressArr.map((item, key) => (
                    <SwiperSlide key={item.id}>
                      <CreatePressLine data={item} key={key} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div
                className={
                  actor
                    ? `${styles.pressGrid} ${styles.pressGridActor}`
                    : styles.pressGrid
                }
              >
                {pressArr.map((item, key) => (
                  <CreatePressLine data={item} key={key} />
                ))}
                <div className={styles.pressNavigation}>
                  <img
                    src='/img/newsLarr.png'
                    alt='<'
                    className={styles.prev}
                    name='prev'
                    onClick={navigation}
                  />

                  <div className={styles.pressFraction}>
                    <span>{actPage}</span>
                    <span>/</span>
                    <span>{allPages}</span>
                  </div>

                  <img
                    src='/img/newsRarr.png'
                    alt='>'
                    className={styles.next}
                    name='next'
                    onClick={navigation}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
