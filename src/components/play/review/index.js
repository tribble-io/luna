import React, { useState, useEffect } from 'react'
import styles from './review.module.scss'
import ReactMarkdown from 'react-markdown'

function cutToLength(text, length) {
  if (text.length > length) {
    return text.slice(0, length) + '...'
  } else {
    return text
  }
}

export function Review({ review }) {
  const [reviewArr, setReviewArr] = useState(review)
  const reviewLineaAmount = 2
  const [actPage, setActPage] = useState(1)
  const [allPages, setAllPages] = useState(1)

  const [openReviewId, setOpenReviewId] = useState(null)

  const navigation = (e) => {
    const type = e.target.name

    if (type === 'next' && actPage < allPages) {
      setActPage(actPage + 1)
    } else if (type === 'prev' && actPage > 1) {
      setActPage(actPage - 1)
    }
  }

  useEffect(() => {
    setReviewArr(
      review.slice(
        reviewLineaAmount * actPage - reviewLineaAmount,
        reviewLineaAmount * actPage
      )
    )
    setAllPages(Math.ceil(review.length / reviewLineaAmount))
  }, [actPage])

  return (
    <section id='review'>
      <div className={styles.wrapper}>
        {review.length > 0 && (
          <div className={styles.reviewContent}>
            <h2>Отзывы</h2>
            <div className={styles.reviewGrid}>
              {reviewArr.map((data) => (
                <div className={styles.reviewBlock} key={data.id}>
                  <div className={styles.avatar}>{data.name[0]}</div>
                  <div className={styles.authorName}>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.title}>{data.title}</div>
                  </div>
                  <div className={styles.date}>{data.createdAt}</div>
                  <div className={styles.text}>
                    {data.text.length > 690 ? (
                      <>
                        <ReactMarkdown>
                          {data.id === openReviewId
                            ? data.text
                            : cutToLength(data.text, 690)}
                        </ReactMarkdown>
                        <span
                          className={`${styles.fullReview} ${
                            data.id === openReviewId ? styles.hidden : ''
                          }`}
                          onClick={() => setOpenReviewId(data.id)}
                        >
                          Развернуть полностью
                        </span>
                      </>
                    ) : (
                      <ReactMarkdown>{data.text}</ReactMarkdown>
                    )}
                  </div>
                  {data.theaterAnswer ? (
                    <div className={styles.adminBlock}>
                      <div className={styles.avatar}>{data.name[0]}</div>
                      <div className={styles.authorName}>
                        <div className={styles.name}>
                          <img
                            src='/img/vector.png'
                            alt=''
                            className={styles.vector}
                          />
                          Администрация &#171;Театра Луны&#187;
                        </div>
                      </div>
                      <div className={styles.date}>{data.createdAt}</div>
                      <div className={styles.adminText}>
                        <ReactMarkdown children={data.theaterAnswer} />
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.reviewNavigation}>
              <img
                src='/img/newsLarr.png'
                alt='<'
                className={styles.prev}
                name='prev'
                onClick={navigation}
              />

              <div className={styles.reviewFraction}>
                <span>{actPage}</span>
                <span>/</span>
                <span>{allPages}</span>
              </div>

              <img
                src='/img/newsRarr.png'
                alt='>'
                className={styles.next}
                name='next'
                onClick={navigation}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
