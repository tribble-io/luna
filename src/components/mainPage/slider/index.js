import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../api'
import { getDateStr } from '../../../assets'
import styles from './slider.module.scss'
import { TicketPopUp } from '../../ticketPopup'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './styles.css'
// import required modules
import { Pagination, Autoplay, EffectFade } from 'swiper'

export function Slider(props) {
  const { items, firstDate, setTicketPlayID, ticketData } = props
  const [open, setOpen] = useState(false)
  return (
    <>
      <section id='mainSlider'>
        <TicketPopUp
          closePopup={() => setOpen(false)}
          open={open}
          data={ticketData}
        />
        <Swiper
          effect={'fade'}
          centeredSlides={true}
          autoplay={false}
          pagination={{ clickable: true }}
          modules={[Pagination, EffectFade, Autoplay]}
          className='mySwiper'
          style={{
            '--swiper-pagination-bullet-inactive-color': '#fff',
            '--swiper-pagination-color': '#7A97F8',
            '--swiper-pagination-bullet-inactive-opacity': '0.8',
          }}
        >
          {items.map((offer) => (
            <SwiperSlide
              key={offer.id}
              style={{
                background: `url(${
                  API_URL + offer?.cover?.url
                }) no-repeat top / cover`,
                backgroundColor: '#08091D',
              }}
            >
              <div className={styles.slide}>
                <div className={styles.wrapper}>
                  <div className={styles.sliderContent}>
                    <div className={styles.sliderTopCont}>
                      <p className={styles.typeShow}>спектакль</p>
                      {offer?.isPremiere ? (
                        <p className={styles.premiere}>Премьера</p>
                      ) : (
                        <></>
                      )}
                    </div>
                    <p className={styles.title}>{offer?.title}</p>
                    <p className={styles.description}>{offer?.description}</p>
                    <div className={styles.ticket}>
                      <button
                        type='button'
                        className={styles.link}
                        onClick={() => {
                          setOpen(true)
                          setTicketPlayID(offer.id)
                        }}
                      >
                        БИЛЕТЫ
                      </button>
                      <div className={styles.rating}>{offer?.rating}+</div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottomBlock}>
                  <div className={styles.blurContainer}>
                    <div
                      className={styles.startCalendar}
                      style={{
                        backgroundImage: `url('${
                          API_URL + offer?.cover?.url
                        }')`,
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
      </section>
    </>
  )
}
