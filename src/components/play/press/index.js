import React from 'react'
import styles from './press.module.scss'
import { CreatePressLine } from '../../createElement'
import { IsMobile } from '../../../assets'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './style.css'
import { Grid, Navigation, Pagination } from 'swiper'

export function Press({ press, actor = false }) {
  const grid = IsMobile ? false : { rows: 3, fill: 'row' }
  const pagination = IsMobile
    ? { clickable: true, dynamicBullets: true }
    : { type: 'fraction' }

  const navigation = IsMobile ? false : press.length > 3 ? true : false

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
            <div className={styles.pressSlider}>
              <Swiper
                slidesPerView='auto'
                centeredSlides={true}
                grid={grid}
                spaceBetween={20}
                pagination={pagination}
                navigation={navigation}
                modules={[Navigation, Grid, Pagination]}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                    centeredSlides: false,
                  },
                }}
                className='pressSwiper'
                style={{
                  '--swiper-pagination-bullet-inactive-color': '#fff',
                  '--swiper-pagination-color': '#8CABFA',
                  '--swiper-pagination-bullet-inactive-opacity': '0.6',
                }}
              >
                {press.map((item, key) => (
                  <SwiperSlide key={item.id}>
                    <CreatePressLine data={item} key={key} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
