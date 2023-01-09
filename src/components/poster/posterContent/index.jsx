import React from 'react'
import styles from './postercontent.module.scss'
import { getDateStr } from '../../../assets'
import { PlaysLine } from '../../createElement'

let PosterContent = (props) => {
  const getPlaysInfo = (item) => {
    const formatDate = getDateStr(item?.datetime)
    const playInfo = {
      id: item?.play?.id,
      show_id: item?.id,
      date: formatDate.date,
      time: item?.datetime.slice(11, 16),
      month: formatDate.month_name,
      day_of_week: formatDate.day_of_week,
      title: item?.play?.title,
      isPremiere: item?.play?.isPremiere,
      scene: item?.play?.scene?.name,
      rating: item?.play?.rating,
      buy: item?.tickets_link,
    }
    return playInfo
  }

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
        <div className={styles.wrapper}>
          <div className={styles.posterList}>
            {props.filterState.items.map((item, index) => (
              <PlaysLine
                key={`play-line-${item?.id ?? index}-${index}`}
                data={getPlaysInfo(item)}
              />
            ))}
          </div>
        </div>
      </section>
    )
  } else if (
    props.filterState.checkFilter === 1 &&
    props.filterState.items.length != 0
  ) {
    return (
      <section>
        <div className={styles.wrapper}>
          <div className={styles.posterList}>
            {props.filterState.itemsCal.map((item, index) => (
              <PlaysLine
                key={`play-line-${item?.id ?? index}-${index}`}
                data={getPlaysInfo(item)}
              />
            ))}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section>
        <div className={styles.wrapper}>
          <div className={styles.posterList}>
            {props.filterState.items.map((item, index) => (
              <PlaysLine
                key={`play-line-${item?.id ?? index}-${index}`}
                data={getPlaysInfo(item)}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default PosterContent
