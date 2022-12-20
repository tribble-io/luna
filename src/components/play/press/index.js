import React, { useRef } from 'react'
import styles from './press.module.scss'
import { CreatePressLine } from '../../createElement'
import { IsMobile } from '../../../assets'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

import './style.css'
import { Grid, Navigation, Pagination } from 'swiper'

export function Press({ press, actor = false }) {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const customFraction = useRef(null)
  const slidesPerView = IsMobile ? 'auto' : 1
  const centeredSlides = IsMobile ? true : false
  const grid = IsMobile ? false : { rows: 3, fill: 'row' }
  const pagination = IsMobile
    ? { clickable: true, dynamicBullets: true }
    : {
        el: customFraction.current,
        type: 'fraction',
        formatFractionCurrent: function (number) {
          return number
        },
      }

  const navigation = IsMobile
    ? false
    : { prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current }

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
                slidesPerView={slidesPerView}
                centeredSlides={centeredSlides}
                grid={grid}
                spaceBetween={20}
                pagination={pagination}
                navigation={navigation}
                modules={[Navigation, Grid, Pagination]}
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
                {press.length > 1 ? (
                  <div className={styles.pressNavigation}>
                    <img
                      src='/img/newsLarr.png'
                      alt='<'
                      className={styles.prev}
                      name='prev'
                      ref={navigationPrevRef}
                    />

                    <div
                      className={styles.pressFraction}
                      ref={customFraction}
                    ></div>

                    <img
                      src='/img/newsRarr.png'
                      alt='>'
                      className={styles.next}
                      name='next'
                      ref={navigationNextRef}
                    />
                  </div>
                ) : (
                  <div className={styles.pressNavigation}>
                    <div className={styles.pressFraction}>1 / 1</div>
                  </div>
                )}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
