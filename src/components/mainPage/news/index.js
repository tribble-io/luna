import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { API_URL } from '../../../api'
import { IsMobile, getDateStr } from '../../../assets'
import { NewsLine } from '../../createElement'

import styles from './news.module.scss'

function cutToLength(string, maxlength) {
  return string.length > maxlength
    ? string.substr(0, maxlength) + '\u2026'
    : string
}

export function News({ itemsNews }) {
  return (
    <>
      <section id='mainNews' className={styles.mainNews}>
        <div className={styles.wrapper}>
          <div className={styles.newsContent}>
            <div className={styles.header}>
              <div className={styles.title}>
                <h2>НОВОСТИ ТЕАТРА</h2>
              </div>
              <div className={styles.btn}>
                <Link to='/news'>Читать все</Link>
              </div>
            </div>
            {itemsNews.length === 0 ? (
              <p>Loading</p>
            ) : (
              <div className={styles.newsList}>
                {itemsNews.map((data) => (
                  <div className={styles.newsBlock} key={data.id}>
                    {IsMobile ? (
                      <NewsLine
                        key={data.id}
                        date={getDateStr(data.createdAt).date}
                        month={getDateStr(data.createdAt).month_name_case}
                        title={data?.title}
                        cover={data?.cover?.url}
                        items={data}
                        location={'/news/' + data.id}
                      />
                    ) : (
                      <>
                        <div className={styles.newsImage}>
                          <div className={styles.imageLink}>
                            <img src={API_URL + data.cover.url} alt='' />
                          </div>
                        </div>
                        <div className={styles.newsInfo}>
                          <p className={styles.newsTitle}>{data.title}</p>
                          <p className={styles.newsDate}>
                            {getDateStr(data.createdAt).date}{' '}
                            {getDateStr(data.createdAt).month_name_case}{' '}
                            {getDateStr(data.createdAt).year}
                          </p>
                          <div className={styles.newsText}>
                            <ReactMarkdown
                              children={cutToLength(data.text, 22)}
                            />
                          </div>
                          <Link
                            className={styles.readMore}
                            to={`/news/${data.id}`}
                          >
                            Читать
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className={styles.mobileButton}>
              <Link to='/news'>ЧИТАТЬ ВСЕ</Link>
            </div>
          </div>
        </div>
        <div className={`${styles.decorationLine} ${styles.lineFirst}`}></div>
        <div className={`${styles.decorationLine} ${styles.lineSecond}`}></div>
      </section>
    </>
  )
}
