import React from 'react'
import { api } from '../../api'
import NewsContent from '../../components/news/newsContent'
import SortNews from '../../components/news/sortNews'

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
  constructor(props) {
    super(props)
    this.daysInMonth = this.daysInMonth.bind(this)
    this.calendar = this.calendar.bind(this)
    this.calendarDefault = this.calendarDefault.bind(this)
    this.search = this.search.bind(this)
    this.filterStateUpdate = this.filterStateUpdate.bind(this)
    this.getWeekDay = this.getWeekDay.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    let actualDate = new Date()
    let actualMoth = actualDate.getMonth()
    let actualYear = actualDate.getFullYear()
    let month = Number(actualMoth)
    var lastDayDate = new Date(
      actualDate.getFullYear(),
      actualDate.getMonth() + 1,
      0
    ).getDate()
    let nextMonth = month + 1 === 12 ? 1 : month + 1
    let actualDay_this_month =
      actualDate.getDate() < 10
        ? '0' + actualDate.getDate()
        : actualDate.getDate()

    let actualDateFormate = { month, actualYear, lastDayDate }
    const go = 12

    let monthName = [
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

    let actualMoth_str = monthName[month]
    let nextMoth_str = monthName[nextMonth]

    const dateList = {}

    for (let i = 0; i < go; i++) {
      let month = actualDateFormate.month
      if (month === 11) {
        actualDateFormate.actualYear -= 1
      } else if (month === 0) {
        actualDateFormate.month = 12
      }
      let lastDayDate = new Date(
        actualDateFormate.actualYear,
        actualDateFormate.month + 1,
        0
      ).getDate()
      const monthToList = month + 1 < 10 ? '0' + `${month + 1}` : `${month + 1}`
      dateList[monthName[month]] = [
        monthToList,
        '01',
        actualDateFormate.actualYear,
        monthToList,
        lastDayDate,
        actualDateFormate.actualYear,
      ]
      actualDateFormate.month -= 1
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
  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
  }
  calendar(d) {
    this.setState(() => {
      return {
        dataArr: this.state.dataList[d],
        checkFilter: 1,
      }
    })
    this.componentDidMount()
  }

  calendarDefault() {
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

  search(c) {
    this.setState(() => {
      return { search: c }
    })
    this.componentDidMount()
  }
  filterStateUpdate(a) {
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
      api.searchNews(date, lastDate, this.state.search).then((response) => {
        if (this.state.items) {
          this.setState({
            isLoaded: true,
            items: response.data,
          })
        } else {
          this.setState({
            isLoaded: true,
            items: 'notItem',
          })
        }
      })
      api.lastNews().then((response) => {
        this.setState({
          itemsMiniNews: response.data,
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

        api.news(calDate, calLastDate).then((response) => {
          this.setState({
            isLoaded: true,
            itemsCal: response.data,
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
