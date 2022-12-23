import React, { useState, useEffect } from 'react'
import styles from './MovieRoles.module.scss'
// import { CreatePressLine } from '../../createElement'
import { IsMobile } from '../../../assets'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

// import required modules
import { Pagination } from 'swiper'
import ListMovies from './ListMovies'

const MovieRoles = ({ movies }) => {
  const [moviesArr, setMoviesArr] = useState(movies)
  const pressLineaAmount = 7
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
    setMoviesArr(
      movies.slice(
        pressLineaAmount * actPage - pressLineaAmount,
        pressLineaAmount * actPage
      )
    )
    setAllPages(Math.ceil(movies.length / pressLineaAmount))
  }, [actPage])

  const pagesSlides = Array(allPages).fill(0)

  return (
    <section id='press'>
      <div className={styles.wrapper}>
        {movies.length > 0 && (
          <div className={styles.pressContent}>
            <h2>Роли в кино</h2>
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
                  {pagesSlides.map((index) => (
                    <SwiperSlide key={index}>
                      {moviesArr.map((item, key) => (
                        <ListMovies
                          data={item}
                          key={item.id}
                          lastItem={key + 1 === moviesArr.length}
                        />
                      ))}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className={styles.pressGrid}>
                {moviesArr.map((item, key) => (
                  <ListMovies
                    data={item}
                    key={key}
                    lastItem={key + 1 === moviesArr.length}
                  />
                ))}
                <div className={styles.pressNavigation}>
                  <img
                    src='/img/newsLarr.png'
                    alt='<'
                    className={
                      actPage === 1 ? styles.arrowDisable : styles.prev
                    }
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
                    className={
                      actPage === allPages ? styles.arrowDisable : styles.next
                    }
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

export default MovieRoles
