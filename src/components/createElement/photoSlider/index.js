import React from 'react'
import styles from './photo-slider.module.scss'
import { API_URL } from '../../../api/index'
import noPhoto from '../../../assets/img/no-photo-actor.jpg'

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
  // Find every fifth slider, these will be 'big'sliders
  const bigSlides = items.filter((item, index) => index % 5 === 0)
  // slider parameters for mobile
  const navigation = IsMobile ? false : bigSlides.length > 1 ? true : false
  const pagination = IsMobile
    ? { clickable: true, dynamicBullets: true }
    : false
  return (
    <>
      <Swiper
        slidesPerView='auto'
        spaceBetween={20}
        navigation={navigation}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
        }}
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
                      href={item.original ?? noPhoto}
                      data-caption={item.caption ?? ''}
                      className={styles.sliderLink}
                    >
                      <img
                        className={styles.sliderImg}
                        alt={item.caption ?? ''}
                        src={
                          API_URL +
                            (item.preview?.medium?.url ??
                              item.preview?.small?.url ??
                              item.preview?.thumbnail?.url) ?? noPhoto
                        }
                      />
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
                          href={bigSlide.original}
                          data-caption={bigSlide.caption ?? ''}
                          className={styles.sliderLink}
                        >
                          <img
                            className={styles.sliderImg}
                            alt={bigSlide.caption ?? ''}
                            src={
                              API_URL +
                              (bigSlide.preview?.medium?.url ??
                                bigSlide.preview?.small?.url ??
                                bigSlide.preview?.thumbnail?.url)
                            }
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
                                href={item.original ?? noPhoto}
                                data-caption={item.caption ?? ''}
                                className={styles.sliderLink}
                              >
                                <img
                                  className={styles.sliderImg}
                                  alt={item.caption ?? ''}
                                  src={
                                    API_URL +
                                      (item.preview?.medium?.url ??
                                        item.preview?.small?.url ??
                                        item.preview?.thumbnail?.url) ?? noPhoto
                                  }
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
      </Swiper>
    </>
  )
}
