import React from 'react'
import styles from './sortposter.module.scss'
// import searchImg from './img/search.svg'
import calendarImg from './img/calendar.svg'
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
const BUTTONS = [
  'ВСЕ СЦЕНЫ',
  'БОЛЬШАЯ СЦЕНА',
  'МАЛАЯ СЦЕНА',
  'ЗАЛ «МАЛЕНЬКАЯ ЛУНА»',
]

// Строим кнопки на этот и 4 месяца вперёд
let a = new Date()
let rez = []

for (let i = 0; i < 5; i++) {
  rez.push(MONTHS[((a.getMonth() + i) % 12) + 1])
}
//
const SortPoster = (props) => {
  const [open, openClosedCalendar] = React.useState(false)

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
  /* eslint-disable */
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

  const moths = rez.map((item) => (
    <div
      className={
        props.filterState === item ? styles.moth_el_active : styles.moth_el
      }
      key={item}
      onClick={() => {
        props.filterStateUpdate(item)
        props.calendarDefault()
        openClosedCalendar(false)
      }}
    >
      {item}
    </div>
  ))

  const buttons = BUTTONS.map((item) => (
    <div
      key={item}
      onClick={() => {
        props.filterLocationFun(item)
      }}
      className={
        props.filerLocation === item
          ? styles.position_el_active
          : styles.position_el
      }
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
        <h1>Афиша</h1>
        <div className={styles.sortBlockMain}>
          <div className={styles.sort}>
            <div className={styles.sortBlock}>
              <div className={styles.moth}>{moths}</div>
              <div className={styles.position}>{buttons}</div>
            </div>
            <div className={styles.filterGroup}>
              <div className={styles.inputFilter}>
                <TextInput
                  name='nameSearch'
                  id='search_el'
                  placeholder='поиск по названию'
                  onChange={() => {
                    searck(document.getElementById('search_el').value)
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.calendar}>
            <img
              src={calendarImg}
              alt='calendar'
              onClick={() => {
                openClosedCalendar(!open)
              }}
            />
            <div className={open ? styles.calendarComp : styles.calendarBodyNo}>
              <div className={styles.calendarBody}>
                <p>ПН</p>
                <p>ВТ</p>
                <p>СР</p>
                <p>ЧТ</p>
                <p>ПТ</p>
                <p>СБ</p>
                <p>ВС</p>
                {daysButton}
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
      </div>
    </section>
  )
}

export default SortPoster
