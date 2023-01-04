import React from 'react'
import { Link } from 'react-router-dom'
import styles from './news-line.module.scss'
import { API_URL } from '../../../api'
import noPhoto from '../../../assets/img/no-photo-actor.jpg'

/*
Example of adding the New Line component (mobile version) to a page, you can see a demo on this page src\components\mainPage\news\index.js

Add component tag and props to the parent page where data is array with parameters for the component
<NewsLine data={data} key={`news-line-${data.id}`} />

Parameters List
data: {
  id: 1,
  image: cover: {formats: {...}},
  title: 'Эдит Пиаф. Гимн Любви'
  date: 5,
  month: 'декабря',
  year: '2022'
}

*/

export function NewsLine(props) {
  const { item } = props
  return (
    <div className={styles.newsLine}>
      <Link to={`/news/${item?.id}`} className={styles.newsLineContent}>
        <div className={styles.newsImage}>
          <img
            src={
              API_URL +
                (item.image?.formats?.medium?.url ??
                  item.image?.formats?.small?.url ??
                  item.image?.formats?.thumbnail?.url ??
                  item.image?.url) ?? noPhoto
            }
            alt={item.title ?? ''}
          />
        </div>
        <div className={styles.newsText}>
          <p className={styles.title}>{item?.title}</p>
          <p className={styles.date}>
            {item?.date} {item?.month} {item?.year}
          </p>
        </div>
      </Link>
    </div>
  )
}
