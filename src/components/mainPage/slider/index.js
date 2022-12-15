import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

import styles from './slider.module.scss'

import './styles.css'

// import required modules
import { Autoplay, EffectFade } from 'swiper'

const MONTHS = [
  'ЯНВАРЬ',
  'ФЕВРАЛЬ',
  'МАРТ',
  'АПРЕЛЬ',
  'МАЙ',
  'ИЮНЬ',
  'ИЮЛЬ',
  'АВГУСТ',
  'СЕНТЯБРЬ',
  'ОКТЯБРЬ',
  'НОЯБРЬ',
  'ДЕКАБРЬ',
]

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
              background: `url('http://theatre.restomatik.ru:1337${offer.play.cover.url}') no-repeat top / cover`,
              backgroundColor: '#15141e',
            }}
          >
            <div className={styles.slide}>
              <div className={styles.wrapper}>
                <div className={styles.block1}>
                  <p className={styles.author}>
                    {offer.play.director.fullname}
                  </p>
                  <p className={styles.title}>{offer.play.title}</p>
                  {offer.play.isPremiere ? (
                    <div className={styles.premiere}>
                      <a href={offer.webSite}>Премьера</a>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className={styles.block2}>
                  <p className={styles.date}>{offer.date_str.split(' ')[0]}</p>
                  <p className={styles.month}>{offer.date_str.split(' ')[1]}</p>
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
                      background: `url('http://theatre.restomatik.ru:1337${offer.play.cover.url}')no-repeat bottom / cover`,
                    }}
                  >
                    <div className={styles.overlay}></div>
                  </div>
                </div>
                <div className={styles.startCalendarText}>
                  <h1>{MONTHS[firstDate.getMonth()]}</h1>
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
