import React from 'react'
import styles from './title.module.scss'

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

export function ContactsList() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.contactsInfo}>
          <div className={styles.contactsList}>
            <div className={styles.contactsBlock}>
              <h2>администрация театра</h2>
              <p className={styles.subTitle}>телефон кассы</p>
              <a className={styles.contactsLink} href='tel:84959531317'>
                +7 (495) 953-13-17
              </a>
              <p className={styles.text}>ежедневно с 11:00 до 21:00</p>
              <p className={styles.text}>перерыв с 15:00 до 16:00</p>
              <p className={styles.subTitle}>email</p>
              <a
                className={styles.contactsLink}
                href='mailto:director.moon@list.ru'
              >
                director.moon@list.ru
              </a>
            </div>

            <div className={styles.contactsBlock}>
              <h2>техническая поддержка</h2>
              <p className={styles.text}>Самойленко Екатерина Викторовна</p>
              <p className={styles.subTitle}>телефон</p>
              <a className={styles.contactsLink} href='tel:84959377737'>
                +7 (495) 937-77-37
              </a>
              <p className={styles.subTitle}>email</p>
              <a
                className={styles.contactsLink}
                href='mailto:support@ticketland.ru'
              >
                support@ticketland.ru
              </a>
            </div>

            <div className={styles.contactsBlock}>
              <h2>Главныe администраторы</h2>
              <p className={styles.text}>Самойленко Екатерина Викторовна</p>
              <p className={styles.text}>Губанихина Валерия Александровна</p>
              <p className={styles.subTitle}>телефон</p>
              <a className={styles.contactsLink} href='tel:84959531121'>
                +7 (495) 953-11-21
              </a>
              <p className={styles.text}>
                ежедневно с 12:00 до 18:00, перерыв с 14:00 до 15:00
              </p>
              <p className={styles.subTitle}>email</p>
              <a
                className={styles.contactsLink}
                href='mailto:moscow_moon@list.ru'
              >
                moscow_moon@list.ru
              </a>
            </div>

            <div className={styles.contactsBlock}>
              <h2>Билетный стол (коллективные заявки)</h2>
              <p className={styles.subTitle}>телефон</p>
              <a className={styles.contactsLink} href='tel:84959530561'>
                +7 (495) 953-05-61
              </a>
              <p className={styles.text}>с 11.00 до 19.00</p>
              <p className={styles.text}>
                выходные дни: суббота и воскресенье.
              </p>
            </div>

            <div className={styles.contactsBlock}>
              <h2>Художественный руководитель театра</h2>
              <p className={styles.text}>Герасимов Евгений Владимирович</p>
              <p className={styles.subTitle}>телефон</p>
              <a className={styles.contactsLink} href='tel:84959510131'>
                +7 (495) 951-01-31 (приемная)
              </a>
              <a className={styles.contactsLink} href='tel:84959530209'>
                +7 (495) 953-02-09
              </a>
              <a className={styles.contactsLink} href='tel:84959515587'>
                +7 (495) 951-55-87
              </a>
            </div>

            <div className={styles.contactsBlock}>
              <h2>Директор театра</h2>
              <p className={styles.text}>Райков Валерий Николаевич</p>
              <p className={styles.subTitle}>телефон</p>
              <a className={styles.contactsLink} href='tel:84959515788'>
                +7 (495) 951-57-88 (приемная)
              </a>
              <a className={styles.contactsLink} href='tel:84959530442'>
                +7 (495) 953-04-42
              </a>
            </div>

            <div className={styles.contactsBlock}>
              <h2>Заместитель художественного руководителя</h2>
              <p className={styles.text}>Краснопольский Игорь Янович</p>
              <p className={styles.subTitle}>телефон</p>
              <a className={styles.contactsLink} href='tel:84959530941'>
                +7 (495) 953-09-41
              </a>
              <p className={styles.text}>
                Время приема: понедельник, среда с 17:00 до 18:00
              </p>
              <p className={styles.subTitle}>email</p>
              <a
                className={styles.contactsLink}
                href='mailto:luna_teatral@mail.ru'
              >
                luna_teatral@mail.ru
              </a>
            </div>

            <div className={styles.contactsBlock}>
              <h2>Помощник директора</h2>
              <p className={styles.text}>Горностаева Татьяна Ивановна</p>
              <p className={styles.subTitle}>телефон</p>
              <a className={styles.contactsLink} href='tel:84959530008'>
                +7 (495) 953-00-08
              </a>
              <p className={styles.subTitle}>email</p>
              <a
                className={styles.contactsLink}
                href='mailto:tavi-vita@rambler.ru'
              >
                tavi-vita@rambler.ru
              </a>
            </div>

            <div className={styles.contactsBlock}>
              <h2>Заведующий труппой</h2>
              <p className={styles.subTitle}>телефон</p>
              <a className={styles.contactsLink} href='tel:84959515544'>
                +7 (495) 951-55-44
              </a>
              <p className={styles.subTitle}>email</p>
              <a
                className={styles.contactsLink}
                href='mailto:zt-moon@yandex.ru'
              >
                zt-moon@yandex.ru
              </a>
              <div className={styles.proffActors}>
                <p className={styles.text}>
                  Профессиональным актёрам, желающим принять участие в показе
                  (дата и время будут сообщены в индивидуальном порядке),
                  необходимо выслать:
                </p>
                <ol className={styles.proffActorsList}>
                  <li>2 фото (крупный и общий план)</li>
                  <li>
                    резюме (полное название учебного заведения, возраст, рост,
                    уровень владения вокалом)
                  </li>
                  <li>контактный телефон.</li>
                </ol>
              </div>
            </div>

            <div className={styles.contactsBlock}>
              <h2>Руководитель PR-отдела</h2>
              <p className={styles.subTitle}>телефон</p>
              <a className={styles.contactsLink} href='tel:84959530847'>
                +7 (495) 953-08-47
              </a>
            </div>
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
