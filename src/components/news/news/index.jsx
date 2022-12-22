import React from 'react'
import NewsContent from '../newsContent'
import SortNews from '../sortNews'

const MONTHS = [
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

class News extends React.Component {
  constructor() {
    super()

    let actualDate = new Date()
    let actualMoth = actualDate.getMonth()
    let actualYear = actualDate.getFullYear()
    let month = Number(actualMoth)
    let formatMoth
    let nextMonth = month + 1 === 12 ? 1 : month + 1
    let actualDay_this_month = actualDate.getDate()

    if (actualDay_this_month.length === 1) {
      actualDay_this_month = '0' + actualDay_this_month
    }

    let actualDateFormate = [
      month + 1,
      actualDay_this_month,
      actualYear,
      nextMonth,
      '01',
      month === 11 ? actualYear + 1 : actualYear,
    ]
    const go = 11

    let monthName = [
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

    let actualMoth_str = monthName[actualDateFormate[0]]
    let nextMoth_str =
      monthName[actualDateFormate[0] === 12 ? 1 : actualDateFormate[0] - 1]

    const dateList = {}

    for (let i = 0; i < go; i++) {
      if (actualDateFormate[0] === 13) {
        actualDateFormate[0] = 1
        actualDateFormate[3] = 1
        actualDateFormate[3] = 11
      }
      if (actualDateFormate[3] === 13) {
        actualDateFormate[3] = 0
        actualDateFormate[3] += 1
        actualDateFormate[5] += 1
      }
      switch (actualDateFormate[0]) {
        case 1:
          formatMoth = '01'
          break
        case 2:
          formatMoth = '02'
          break
        case 3:
          formatMoth = '03'
          break
        case 4:
          formatMoth = '04'
          break
        case 5:
          formatMoth = '05'
          break
        case 6:
          formatMoth = '06'
          break
        case 7:
          formatMoth = '07'
          break
        case 8:
          formatMoth = '08'
          break
        case 9:
          formatMoth = '09'
          break
        case 10:
          formatMoth = '10'
          break
        case 11:
          formatMoth = '11'
          break
        case 12:
          formatMoth = '12'
          break
        default:
          formatMoth = ''
      }
      switch (actualDateFormate[3]) {
        case 1:
          nextMonth = '01'
          break
        case 2:
          nextMonth = '02'
          break
        case 3:
          nextMonth = '03'
          break
        case 4:
          nextMonth = '04'
          break
        case 5:
          nextMonth = '05'
          break
        case 6:
          nextMonth = '06'
          break
        case 7:
          nextMonth = '07'
          break
        case 8:
          nextMonth = '08'
          break
        case 9:
          nextMonth = '09'
          break
        case 10:
          nextMonth = '10'
          break
        case 11:
          nextMonth = '11'
          break
        case 12:
          nextMonth = '12'
          break
        default:
          nextMonth = ''
      }

      dateList[monthName[actualDateFormate[0]]] = [
        formatMoth,
        '01',
        actualDateFormate[2],
        nextMonth,
        actualDateFormate[4],
        actualDateFormate[5],
      ]
      actualDay_this_month = '01'
      actualDateFormate[0] -= 1
      actualDateFormate[3] = actualDateFormate[0] + 1
      actualDateFormate[5] = actualYear
      month += 1
    }
    const MONTHS_num = [
      '',
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
    ]

    const todayData = new Date()
    const todayDataM = todayData.getMonth()

    let year = Date().split(' ')[3]
    let today = new Date()
    let num_month = today.getMonth() + 1
    let days_for_month = this.daysInMonth(num_month, year)

    this.state = {
      filterState: MONTHS[(todayDataM % 12) + 1],
      m: MONTHS_num[(todayDataM % 12) + 1],
      m_str: dateList[actualMoth_str][0],
      m_next: dateList[actualMoth_str][3],
      y: dateList[actualMoth_str][2],
      y_next: dateList[actualMoth_str][5],
      isLoaded: true,
      items: [],
      itemsNew: [],
      search: '',
      day: '01',
      days_for_month: days_for_month,
      day_next: '01',
      itemsMiniNews: [],
      itemsCal: [],
      checkFilter: 0,
      dataList: dateList,
      monthName: monthName,
      actualDay_this_month: actualDay_this_month,
      actualMoth_str: actualMoth_str,
      nextMoth_str: nextMoth_str,
      dataArr: dateList[actualMoth_str],
      thData: dateList[actualMoth_str],
      nextDate: dateList[nextMoth_str],
    }
  }
  daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate()
  }
  calendar = (d) => {
    this.setState(() => {
      return {
        dataArr: this.state.dataList[d],
        checkFilter: 1,
      }
    })
    this.componentDidMount()
  }

  calendarDefault = () => {
    this.setState(() => {
      return {
        dataArr: this.state.thData,
        day: '01',
        day_next: '01',
        checkFilter: 0,
      }
    })
    this.componentDidMount()
  }

  search = (c) => {
    this.setState(() => {
      return { search: c }
    })
    this.componentDidMount()
  }
  filterStateUpdate = (a) => {
    this.setState(() => {
      return {
        filterState: a,
        day_next: '01',
        day: '01',
        dataArr: this.state.dataList[a],
      }
    })
    this.componentDidMount()
  }

  getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    let dates = new Date(date)

    return days[dates.getDay()]
  }

  componentDidMount() {
    setTimeout(() => {
      let date =
        this.state.dataArr[2] +
        '-' +
        this.state.dataArr[0] +
        '-' +
        this.state.dataArr[1]
      let lastDate =
        this.state.dataArr[5] +
        '-' +
        this.state.dataArr[3] +
        '-' +
        this.state.dataArr[4]
      let seachEl = this.state.search
      fetch(
        `http://theatre.restomatik.ru:1337/api/articles?filters[publishedAt][$gte]=${date}&filters[publishedAt][$lt]=${lastDate}&sort[0]=publishedAt:desc&filters[title][$containsi]=${seachEl}&desc&populate=cover,shows.play.scene`
      )
        .then((res) => res.json())
        .then((result) => {
          if (this.state.items) {
            this.setState({
              isLoaded: true,
              items: result.data,
            })
          } else {
            this.setState({
              isLoaded: true,
              items: 'notItem',
            })
          }
        })
      fetch(
        `http://theatre.restomatik.ru:1337/api/articles?sort[0]=publishedAt:desc&populate=cover,shows.play&pagination[pageSize]=4`
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            itemsMiniNews: result.data,
          })
        })

      if (this.state.checkFilter) {
        let newDay = Number(this.state.day)
        let lastDay = newDay + 1

        let daysInMonth = (month, year) => {
          return new Date(year, month, 0).getDate()
        }

        if (lastDay === 1) {
          lastDay = '01'
        } else if (lastDay === 2) {
          lastDay = '02'
        } else if (lastDay === 3) {
          lastDay = '03'
        } else if (lastDay === 4) {
          lastDay = '04'
        } else if (lastDay === 5) {
          lastDay = '05'
        } else if (lastDay === 6) {
          lastDay = '06'
        } else if (lastDay === 7) {
          lastDay = '07'
        } else if (lastDay === 8) {
          lastDay = '08'
        } else if (lastDay === 9) {
          lastDay = '09'
        }

        let lastDayForMoth = daysInMonth(
          this.state.m,
          this.state.m === '12' ? this.state.y : this.state.y_next
        )
        lastDayForMoth.toString()

        if (lastDay === lastDayForMoth + 1) {
          lastDay = '01'
        }

        lastDay.toString()

        let calDate =
          this.state.dataArr[2] +
          '-' +
          this.state.dataArr[0] +
          '-' +
          this.state.dataArr[1]
        let calLastDate =
          this.state.dataArr[2] + '-' + this.state.dataArr[0] + '-' + lastDay

        fetch(
          `http://theatre.restomatik.ru:1337/api/articles?filters[publishedAt][$gte]=${calDate}&filters[publishedAt][$lt]=${calLastDate}&sort[0]=publishedAt:desc&populate=cover,shows.play`
        )
          .then((res) => res.json())
          .then((result) => {
            this.setState({
              isLoaded: true,
              itemsCal: result.data,
            })
          })
      }
    }, 100)
  }
  render() {
    return (
      <section>
        <main>
          <SortNews
            d={this.state.day}
            m={this.state.m}
            y={this.state.y}
            calendarDefault={this.calendarDefault}
            filterState={this.state.filterState}
            filerLocation={this.state.filerLocation}
            filterLocationFun={this.filterLocation}
            filterStateUpdate={this.filterStateUpdate}
            search={this.search}
            calendar={this.calendar}
            dataList={this.state.dataList}
            dataArr={this.state.dataArr}
          />
          <NewsContent
            filterState={this.state}
            getWeekDay={this.getWeekDay}
            itemsMiniNews={this.state.itemsMiniNews}
          />
        </main>
      </section>
    )
  }
}

export default News
