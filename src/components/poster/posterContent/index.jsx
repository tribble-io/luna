import React from 'react'
import PosterEl from './posterEl'
import styles from './postercontent.module.scss'
import { getDateStr } from '../../../assets'

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
            date={getDateStr(item.date).date}
            time={item.time}
            day={getDateStr(item.date).day_of_week}
            title={item.play.title}
            premier={item.play.isPremiere ? 'ПРЕМЬЕРА' : ''}
            location={item.play.scene.name}
            rating={item.play.rating}
            buy={item.tickets_link}
            id={item.play.id}
            month={getDateStr(item.date).month_name}
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
            date={getDateStr(item.date).date}
            time={item.time}
            day={getDateStr(item.date).day_of_week}
            title={item.play.title}
            premier={item.play.isPremiere ? 'ПРЕМЬЕРА' : ''}
            location={item.play.scene.name}
            rating={item.play.rating}
            buy={item.tickets_link}
            id={item.play.id}
            month={getDateStr(item.date).month_name}
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
            date={getDateStr(item.date).date}
            time={item.time}
            day={getDateStr(item.date).day_of_week}
            title={item.play.title}
            premier={item.play.isPremiere ? 'ПРЕМЬЕРА' : ''}
            location={item.play.scene.name}
            rating={item.play.rating}
            buy={item.tickets_link}
            id={item.play.id}
            month={getDateStr(item.date).month_name}
          />
        ))}
      </section>
    )
  }
}

export default PosterContent
