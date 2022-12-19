import React, { useRef } from 'react'
import styles from './photo-slider.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import './styles.css'
// import required modules
import { Navigation, Pagination } from 'swiper'

import { Fancybox } from '../../createElement'
import { IsMobile } from '../../../assets'

export function PhotoSlider(props) {
  const { items } = props
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  // slider parameters for mobile
  const slidesPerView = IsMobile ? 'auto' : 2
  const navigation = IsMobile
    ? false
    : { prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current }
  const pagination = IsMobile
    ? { clickable: true, dynamicBullets: true }
    : false
  const centeredSlides = IsMobile ? true : false

  const bigSlides = items.filter((item, index) => index % 5 === 0)

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        navigation={navigation}
        pagination={pagination}
        centeredSlides={centeredSlides}
        modules={[Navigation, Pagination]}
        className='photoSwiper'
        style={{
          '--swiper-pagination-bullet-inactive-color': '#fff',
          '--swiper-pagination-color': '#8CABFA',
          '--swiper-pagination-bullet-inactive-opacity': '0.6',
        }}
      >
        <Fancybox>
          {IsMobile
            ? items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.cardImg}>
                    <a
                      data-fancybox='gallery'
                      href={item.href}
                      data-caption={item.caption}
                      className={styles.sliderLink}
                    >
                      <img className={styles.sliderImg} alt='' src={item.src} />
                    </a>
                  </div>
                </SwiperSlide>
              ))
            : bigSlides.map((bigSlide, index) => (
                <div key={index}>
                  <SwiperSlide key={bigSlide.id}>
                    <div className={styles.slidePhoto}>
                      <div className={styles.cardImg}>
                        <a
                          data-fancybox='gallery'
                          href={bigSlide.href}
                          data-caption={bigSlide.caption}
                          className={styles.sliderLink}
                        >
                          <img
                            className={styles.sliderImg}
                            alt=''
                            src={bigSlide.src}
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={bigSlide.id + 500}>
                    <div className={styles.slidePhoto}>
                      <div className={styles.smallPhoto}>
                        {items
                          .slice(5 * index + 1, 5 * (index + 1))
                          .map((item) => (
                            <div className={styles.cardImg} key={item.id}>
                              <a
                                data-fancybox='gallery'
                                href={item.href}
                                data-caption={item.caption}
                                className={styles.sliderLink}
                              >
                                <img
                                  className={styles.sliderImg}
                                  alt=''
                                  src={item.src}
                                />
                              </a>
                            </div>
                          ))}
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
        </Fancybox>
        <div className={styles.sliderNavigation}>
          <img
            src='/img/newsLarr.png'
            alt='<'
            className={styles.prev}
            ref={navigationPrevRef}
          />

          <img
            src='/img/newsRarr.png'
            alt='>'
            className={styles.next}
            ref={navigationNextRef}
          />
        </div>
      </Swiper>
    </>
  )
}
