import React from 'react'
import styles from './sort_news.module.scss'
import NewsEl from './newsEl'
import { getDateStr } from '../../../assets'

let NewsContent = (props) => {
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
      <section className={styles.newsList}>
        {props.filterState.items.map((item) => (
          <NewsEl
            key={item.id}
            date={getDateStr(item.createdAt).date}
            month={getDateStr(item.createdAt).month_name_case}
            title={item.title}
            cover={item.cover.url}
            items={item}
            location={'/news/' + item.id}
            shows={item.shows.data}
            itemsMiniNews={props.itemsMiniNews}
          />
        ))}
      </section>
    )
  } else if (
    props.filterState.checkFilter === 1 &&
    props.filterState.items.length != 0
  ) {
    return (
      <section className={styles.newsList}>
        {props.filterState.itemsCal.map((item) => (
          <NewsEl
            key={item.id}
            date={getDateStr(item.createdAt).date}
            month={getDateStr(item.createdAt).month_name_case}
            title={item.title}
            cover={item.cover.url}
            items={item}
            location={'/news/' + item.id}
            shows={item.shows.data}
            itemsMiniNews={props.itemsMiniNews}
          />
        ))}
      </section>
    )
  } else {
    return (
      <section className={styles.newsList}>
        {props.filterState.items.map((item) => (
          <NewsEl
            key={item.id}
            date={getDateStr(item.createdAt).date}
            month={getDateStr(item.createdAt).month_name_case}
            title={item.title}
            cover={item.cover.url}
            items={item}
            location={'/news/' + item.id}
            shows={item.shows.data}
            itemsMiniNews={props.itemsMiniNews}
          />
        ))}
      </section>
    )
  }
}

export default NewsContent
