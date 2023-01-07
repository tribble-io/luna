import React from 'react'
import styles from './sortposter.module.scss'
import arrow from './img/arrow.svg'
import { TextInput } from '../../createElement'

let MONTHS = [
  '',
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь',
]

// Строим кнопки на этот и 4 месяца вперёд
let a = new Date()
let actualMonth = a.getMonth()
let rez = []

for (let i = 0; i < 5; i++) {
  rez.push(MONTHS[((actualMonth - i) % 12) + 1])
  actualMonth === 0 ? (actualMonth = 12) : actualMonth
}

const SortNews = (props) => {
  const [open, openClosedCalendar] = React.useState(false)
  const [openSel, openClosedCalendarSel] = React.useState(false)
  let c = props.dataArr[0]

  if (c === '01') {
    c = '1'
  } else if (c === '02') {
    c = '2'
  } else if (c === '03') {
    c = '3'
  } else if (c === '04') {
    c = '4'
  } else if (c === '05') {
    c = '5'
  } else if (c === '06') {
    c = '6'
  } else if (c === '07') {
    c = '7'
  } else if (c === '08') {
    c = '8'
  } else if (c === '09') {
    c = '9'
  } else if (c === '10') {
    c = '10'
  } else if (c === '11') {
    c = '11'
  } else if (c === '12') {
    c = '12'
  }

  let b = MONTHS[c]
  // Получаем количество дней в текущем месяце и делаем из них массив
  let daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate()
  }
  let month

  if (props.m === '01') {
    month = '0'
  } else if (props.m === '02') {
    month = '1'
  } else if (props.m === '03') {
    month = '2'
  } else if (props.m === '04') {
    month = '3'
  } else if (props.m === '05') {
    month = '4'
  } else if (props.m === '06') {
    month = '5'
  } else if (props.m === '07') {
    month = '6'
  } else if (props.m === '08') {
    month = '7'
  } else if (props.m === '09') {
    month = '8'
  } else if (props.m === '10') {
    month = '9'
  } else if (props.m === '11') {
    month = '10'
  } else if (props.m === '12') {
    month = '11'
  }

  let d = props.d

  if (props.d === '01') {
    d = 1
  } else if (props.d === '02') {
    d = 2
  } else if (props.d === '03') {
    d = 3
  } else if (props.d === '04') {
    d = 4
  } else if (props.d === '05') {
    d = 5
  } else if (props.d === '06') {
    d = 6
  } else if (props.d === '07') {
    d = 7
  } else if (props.d === '08') {
    d = 8
  } else if (props.d === '09') {
    d = 9
  }
  let monthNameForCal = Object.keys(props.dataList)
  const monthDataListCal = monthNameForCal.map((item) => (
    <div
      key={item}
      className={styles.selEl}
      onClick={() => {
        props.calendar(item), openClosedCalendarSel(!open)
      }}
    >
      <p>{item}</p>
      <span>{props.dataList[item][2]}г</span>
    </div>
  ))

  let days_for_month = daysInMonth(props.m, props.y)
  let daysAll = []

  let a = new Date(props.y, month)
  if (a.getDay() === 0) {
    for (let j = 1; j < 7; j++) {
      daysAll.push('')
    }
  } else {
    for (let i = 1; i < a.getDay(); i++) {
      daysAll.push('')
    }
  }

  for (let i = 1; i <= days_for_month; i++) {
    daysAll.push(i)
  }

  let searck = (value) => {
    props.search(value)
  }

  const moths = rez.map((item, index) => (
    <div
      className={
        props.filterState === item
          ? `${styles.moth_el} ${styles.active}`
          : styles.moth_el
      }
      key={index}
      onClick={() => {
        props.filterStateUpdate(item)
      }}
    >
      {item}
    </div>
  ))

  let daysButton = []

  for (let i = 0; i < daysAll.length; i++) {
    if (daysAll[i] === '') {
      daysButton.push(
        <div
          key={i}
          className={
            props.dayKal === daysAll[i]
              ? styles.calendarItemAct
              : styles.calendarItem
          }
        >
          {daysAll[i]}
        </div>
      )
    } else {
      daysButton.push(
        <div
          key={i}
          onClick={() => {
            props.calendar(daysAll[i])
          }}
          className={
            d === daysAll[i] ? styles.calendarItemAct : styles.calendarItem
          }
        >
          {daysAll[i]}
        </div>
      )
    }
  }

  return (
    <section className={styles.sortHeaderSection}>
      {open ? (
        <div
          className={styles.closeCaledar}
          onClick={() => openClosedCalendar(false)}
        ></div>
      ) : null}
      <div className={styles.sortHeader}>
        <div className={styles.sortNewsContent}>
          <h1>НОВОСТИ ТЕАТРА</h1>
          <div className={styles.sortBlockMain}>
            <div className={styles.sortBlock}>
              <div className={styles.monthGroup}>{moths}</div>
              <div className={styles.calendar}>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() => {
                    openClosedCalendar(!open)
                  }}
                >
                  <path
                    d='M22.5 5H7.5C4.73858 5 2.5 7.23858 2.5 10V22.5C2.5 25.2614 4.73858 27.5 7.5 27.5H22.5C25.2614 27.5 27.5 25.2614 27.5 22.5V10C27.5 7.23858 25.2614 5 22.5 5Z'
                    stroke='#fff'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M10 2.5V7.5M20 2.5V7.5M2.5 12.5H27.5'
                    stroke='#fff'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div
                  className={open ? styles.calendarComp : styles.calendarBodyNo}
                >
                  <div className={styles.mothSelect}>
                    <div
                      className={styles.thisMonth}
                      onClick={() => {
                        openClosedCalendarSel(!openSel)
                      }}
                    >
                      <div className={styles.selEl}>
                        {b}
                        <span>{props.dataArr[2]}г</span>
                      </div>
                      <span>
                        <img src={arrow} alt='' />
                      </span>
                    </div>
                    <div
                      className={
                        openSel ? styles.selectMoth : styles.selectMothNoActive
                      }
                    >
                      {monthDataListCal}
                    </div>
                  </div>
                  <div
                    className={styles.defaultCalendar}
                    onClick={() => {
                      props.calendarDefault()
                      openClosedCalendar(!open)
                    }}
                  >
                    Сбросить дату
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.search}>
              <TextInput
                name='search'
                id='search_el'
                placeholder='ПОИСК ПО НАЗВАНИЮ'
                onChange={() => {
                  searck(document.getElementById('search_el').value)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SortNews
