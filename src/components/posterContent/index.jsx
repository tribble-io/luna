import React from 'react'
import PosterEl from './posterEl'
import styles from './postercontent.module.scss'

let PosterContent = (props) => {
  if (props.filterState.items.length === 0) {
    return (
      <div className={styles.antiBlock}>
        По указанным фильтрам ничего не найдено
      </div>
    )
  } else {
    return (
      <section>
        {props.filterState.items.map((item) => (
          <PosterEl
            key={item.id}
            date={parseInt(item.date_str.match(/\d+/))}
            time={item.time}
            day={props.getWeekDay(item.date)}
            title={item.play..title}
            premier={
              item.play..isPremiere ? 'ПРЕМЬЕРА' : ''
            }
            location={item.place}
            rating={item.play..rating}
            buy={item.tickets_link}
          />
        ))}
      </section>
    )
  }
}

export default PosterContent
