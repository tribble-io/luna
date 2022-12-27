import React from 'react'
import { IsMobile } from '../../../assets'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

// import required modules
import { Pagination } from 'swiper'

import styles from './TheaterRoles.module.scss'
import { CreatePlaysCard } from '../playsCard'

const TheaterRoles = ({ content, isLoading, popupOpen }) => {
  return (
    <section className={styles.boxTheaterRoles}>
      <p className={styles.theatricalRolesTitle}>РОЛИ В ТЕАТРЕ ЛУНЫ</p>

      {IsMobile ? (
        <div className={styles.pressSlider}>
          {isLoading ? null : (
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
              {content?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <CreatePlaysCard
                    data={item}
                    role={true}
                    popupOpen={popupOpen}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      ) : (
        <div className={styles.roleCards}>
          {isLoading
            ? null
            : content?.map((item) => (
                <CreatePlaysCard
                  data={item}
                  role={true}
                  key={`roles-card-${item?.id}`}
                  popupOpen={popupOpen}
                />
              ))}
        </div>
      )}
    </section>
  )
}

export default TheaterRoles
