import React from 'react'
import PosterEl from './posterEl'
import styles from './postercontent.module.scss'

let PosterContent = (props) => {
  if (props.filterState.items.length === 0) {
    return (
      <div className={styles.antibBlockBlock}>
        <div className={styles.antiBlock}>
          По указанным фильтрам ничего не найдено
        </div>
      </div>
    )
  } else if (
    props.filterState.itemsCal.length === 0 &&
    props.filterState.checkFilter != 0
  ) {
    return (
      <section>
        <div className={styles.antibBlockBlock}>
          <div className={styles.antiBlock}>
            В выбранный день спектаклей нет.
          </div>
        </div>
        <div className={styles.antibBlockBlock_2}>
          <div className={styles.antiBlock_2}>
            Ближайшие к вашей дате постановки
          </div>
        </div>
        {props.filterState.items.map((item) => (
          <PosterEl
            key={item.id}
            date={parseInt(item.attributes.date_str.match(/\d+/))}
            time={item.attributes.time}
            day={props.getWeekDay(item.attributes.date)}
            title={item.attributes.play.data.attributes.title}
            premier={
              item.attributes.play.data.attributes.isPremiere ? 'ПРЕМЬЕРА' : ''
            }
            location={item.attributes.place}
            rating={item.attributes.play.data.attributes.rating}
            buy={item.attributes.tickets_link}
          />
        ))}
      </section>
    )
  } else if (
    props.filterState.checkFilter === 1 &&
    props.filterState.items.length != 0
  ) {
    return (
      <section>
        {props.filterState.itemsCal.map((item) => (
          <PosterEl
            key={item.id}
            date={parseInt(item.attributes.date_str.match(/\d+/))}
            time={item.attributes.time}
            day={props.getWeekDay(item.attributes.date)}
            title={item.attributes.play.data.attributes.title}
            premier={
              item.attributes.play.data.attributes.isPremiere ? 'ПРЕМЬЕРА' : ''
            }
            location={item.attributes.place}
            rating={item.attributes.play.data.attributes.rating}
            buy={item.attributes.tickets_link}
          />
        ))}
      </section>
    )
  } else {
    return (
      <section>
        {props.filterState.items.map((item) => (
          <PosterEl
            key={item.id}
            date={parseInt(item.attributes.date_str.match(/\d+/))}
            time={item.attributes.time}
            day={props.getWeekDay(item.attributes.date)}
            title={item.attributes.play.data.attributes.title}
            premier={
              item.attributes.play.data.attributes.isPremiere ? 'ПРЕМЬЕРА' : ''
            }
            location={item.attributes.place}
            rating={item.attributes.play.data.attributes.rating}
            buy={item.attributes.tickets_link}
          />
        ))}
      </section>
    )
  }
}

export default PosterContent
