import React from 'react'
import styles from './title.module.scss'
import ReactMarkdown from 'react-markdown'

export function ContactsTitle() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.contactsContent}>
          <div className={styles.contactsTitle}>
            <h1>контакты</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

function returnNumberFormat(number, type) {
  if (type === 'link') {
    //eslint-disable-next-line
    return number.replace(/[^\d\+]/g, '')
  } else if (type === 'number') {
    //eslint-disable-next-line
    return number.replace(/([^\d  \+\-]+[()])/g, '')
  } else if (type === 'text') {
    //eslint-disable-next-line
    return number.replace(/[\d \+\-()]/g, '')
  }
  //eslint-disable-next-line
  return number.replace(/[^\d\+]/g, '')
}

export function ContactsList(props) {
  const { items } = props
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.contactsInfo}>
          <div className={styles.contactsList}>
            {items?.map((item) => (
              <div
                className={styles.contactsBlock}
                key={`contact-item-${item.id}`}
              >
                <h2>{item?.title}</h2>
                {item?.person.length > 0 ? (
                  <div className={styles.contactItem}>
                    {item?.person.map((person) => (
                      <p
                        className={styles.text}
                        key={`contact-item-${person.id}-person`}
                      >
                        {person?.enum}
                      </p>
                    ))}
                  </div>
                ) : (
                  <></>
                )}

                {item?.phone.length > 0 ? (
                  <div className={styles.contactItem}>
                    <p className={styles.subTitle}>
                      {item.id !== 2 ? 'телефон' : 'телефон кассы'}
                    </p>
                    {item?.phone.map((phone) => (
                      <p
                        className={styles.contactsLink}
                        key={`contact-item-${phone.id}-phone`}
                      >
                        <a
                          href={`tel:${returnNumberFormat(
                            phone?.enum,
                            'link'
                          )}`}
                        >
                          {returnNumberFormat(phone?.enum, 'number')}
                        </a>
                        <span className={styles.linkText}>
                          {/* eslint-disable-next-line */}
                          {returnNumberFormat(phone?.enum, 'text')}
                        </span>
                      </p>
                    ))}
                  </div>
                ) : (
                  <></>
                )}

                {item.workHours ? (
                  <p className={styles.workHours}>
                    <ReactMarkdown children={item.workHours} />
                  </p>
                ) : (
                  <></>
                )}

                {item?.email.length > 0 ? (
                  <div className={styles.contactItem}>
                    <p className={styles.subTitle}>email</p>
                    {item?.email.map((email) => (
                      <p
                        className={styles.contactsLink}
                        key={`contact-item-${email.id}-email`}
                      >
                        <a href={`mailto:${email?.enum}`}>{email?.enum}</a>
                      </p>
                    ))}
                  </div>
                ) : (
                  <></>
                )}

                {item.text ? (
                  <div className={styles.proffActors}>
                    <ReactMarkdown children={item.text} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>

          <div className={styles.generalInfo}>
            <div className={styles.generalBlock}>
              <p className={styles.generalSubTitle}>Полное наименование</p>
              <p>
                Государственное бюджетное учреждение культуры города Москвы
                «Московский театр “Театр Луны”»
              </p>
            </div>

            <div className={styles.generalBlock}>
              <p className={styles.generalSubTitle}>Учредитель театра</p>
              <p>Департамент культуры города Москвы</p>
            </div>

            <div className={styles.generalBlock}>
              <p className={styles.generalSubTitle}>Сокращенное наименование</p>
              <p>ГБУК г. Москвы «Московский театр “Театр Луны”»</p>
            </div>

            <div className={styles.generalBlock}>
              <p className={styles.generalSubTitle}>
                Официальная дата создания
              </p>
              <p>5 июля 1994 года</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
