import React from 'react'
import { IsMobile } from '../../../assets'
import RolesCard from './RolesCard'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

// import required modules
import { Pagination } from 'swiper'

import styles from './TheaterRoles.module.scss'

const TheaterRoles = ({ content }) => {
  return (
    <section className={styles.boxTheaterRoles}>
      <p className={styles.theatricalRolesTitle}>РОЛИ В ТЕАТРЕ ЛУНЫ</p>

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
            {content.map((item) => (
              <SwiperSlide key={item.id}>
                <RolesCard content={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={styles.roleCards}>
          {content?.map((item) => (
            <RolesCard content={item} key={`roles-card-${item.id}`} />
          ))}
        </div>
      )}
    </section>
  )
}

export default TheaterRoles
