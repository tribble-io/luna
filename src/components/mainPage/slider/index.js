import React from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../api'
import { getDateStr } from '../../../assets'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

import styles from './slider.module.scss'

import './styles.css'

// import required modules
import { Autoplay, EffectFade } from 'swiper'

export function Slider({ items, firstDate }) {
  return (
    <>
      <Swiper
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className='mySwiper'
      >
        {items.map((offer) => (
          <SwiperSlide
            key={offer.id}
            style={{
              background: `url(${
                API_URL + offer.play.cover.url
              }) no-repeat top / cover`,
              backgroundColor: '#08091D',
            }}
          >
            <div className={styles.slide}>
              <div className={styles.wrapper}>
                <div className={styles.block1}>
                  <p className={styles.author}>
                    {offer.play.director.fullname}
                  </p>
                  <Link className={styles.title} to={`/play/${offer.play.id}`}>
                    {offer.play.title}
                  </Link>
                  {offer.play.isPremiere ? (
                    <div className={styles.premiere}>
                      <a href={offer.webSite}>Премьера</a>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className={styles.block2}>
                  <p className={styles.date}>{getDateStr(offer.date).date}</p>
                  <p className={styles.month}>
                    {getDateStr(offer.date).month_name_case}
                  </p>
                  <div className={styles.buy}>
                    <a href={`${offer.tickets_link}`}>КУПИТЬ БИЛЕТ</a>
                  </div>
                </div>
                <div className={styles.mobileButton}>
                  <a href={`${offer.tickets_link}`}>КУПИТЬ БИЛЕТ</a>
                </div>
              </div>
              <div className={styles.bottomBlock}>
                <div className={styles.blurContainer}>
                  <div
                    className={styles.startCalendar}
                    style={{
                      background: `url('${
                        API_URL + offer.play.cover.url
                      }')no-repeat bottom / cover`,
                    }}
                  >
                    <div className={styles.overlay}></div>
                  </div>
                </div>
                <div className={styles.startCalendarText}>
                  <h1>{getDateStr(firstDate).month_name}</h1>
                  <div className={styles.buttons}>
                    <Link to='/plays' className={styles.allPost}>
                      <p>Все спектакли</p>
                    </Link>
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
