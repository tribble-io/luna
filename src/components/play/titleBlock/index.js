import React from 'react'
import styles from './titleblock.module.scss'
import ScrollIntoView from 'react-scroll-into-view'
import Loader from '../../loader'

export function TitleBlock(props) {
  const { data, mainSliderInfo } = props
  return (
    <section className={styles.titleBlock} id='titleBlock'>
      <div
        className={styles.bgShows}
        style={{
          backgroundImage: `url('${mainSliderInfo?.bgImage ?? data?.bgImage}')`,
        }}
      >
        <div className={styles.wrapper}>
          {mainSliderInfo?.title?.length > 0 || data.title.length > 0 ? (
            <div className={styles.mainContent}>
              <p className={styles.title}>
                {mainSliderInfo?.title ?? data.title}
              </p>
              <p className={styles.description}>
                {mainSliderInfo?.description ?? data.description}
              </p>
              <div className={styles.ticket}>
                <ScrollIntoView selector={`#comingShow`} className={styles.buy}>
                  <button type='button' className={styles.link}>
                    БИЛЕТЫ
                  </button>
                </ScrollIntoView>
                <div className={styles.rating}>
                  {mainSliderInfo?.rating ?? data.rating}+
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  )
}

export function About(props) {
  const { data, aboutRef } = props
  return (
    <section className={styles.about} id='about' ref={aboutRef}>
      <div className={styles.wrapper}>
        <div className={styles.aboutContent}>
          <h2>о спектакле</h2>

          {Object.keys(data).length > 0 ? (
            <div className={styles.aboutInfo}>
              <div className={styles.intro}>
                {data.body ? (
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                      __html: data.body,
                    }}
                  ></div>
                ) : (
                  <></>
                )}

                {data.durationStr ? (
                  <div className={styles.durationStr}>
                    <p className={styles.title}>Продолжительность</p>
                    <p>{data.durationStr}</p>
                  </div>
                ) : (
                  <></>
                )}

                {data.premiereDateStr ? (
                  <div className={styles.premiereDate}>
                    <p className={styles.title}>Премьера</p>
                    <p>{data.premiereDateStr}</p>
                  </div>
                ) : (
                  <></>
                )}

                {data.rating ? (
                  <div className={styles.scene}>
                    <p>{data.scene}</p>
                    <p>{data.rating}+</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              {data.directors && data.directors.length > 0 ? (
                <div className={styles.production}>
                  {data.directors.map((director) => (
                    <div key={director.id}>
                      <span className={styles.director}>
                        {director.position} —{' '}
                      </span>
                      <span>
                        {director.person.map(
                          (data, index, arr) =>
                            data.fullname +
                            (index === arr.length - 1 ? '' : ', ')
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  )
}
