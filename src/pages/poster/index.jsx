import React from 'react'
import { api } from '../../api'
import PosterContent from '../../components/poster/posterContent'
import SortPoster from '../../components/poster/SortPoster'

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

class Poster extends React.Component {
  constructor(props) {
    super(props)
    this.daysInMonth = this.daysInMonth.bind(this)
    this.calendar = this.calendar.bind(this)
    this.calendarDefault = this.calendarDefault.bind(this)
    this.search = this.search.bind(this)
    this.filterLocation = this.filterLocation.bind(this)
    this.filterStateUpdate = this.filterStateUpdate.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    let actualDate = new Date()
    let actualMoth = actualDate.getMonth()
    let actualYear = actualDate.getFullYear()
    let month = Number(actualMoth) + 1
    let formatMoth
    let nextMonth = month + 1 === 12 ? 1 : month + 1
    let actualDay_this_month =
      actualDate.getDate() < 10
        ? '0' + actualDate.getDate()
        : actualDate.getDate()

    let actualDateFormate = [
      month,
      '01',
      actualYear,
      nextMonth,
      '01',
      month === 11 ? actualYear + 1 : actualYear,
    ]
    const go = 5

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
      monthName[actualDateFormate[0] === 12 ? 1 : actualDateFormate[0] + 1]

    const dateList = {}

    for (let i = 0; i < go; i++) {
      if (actualDateFormate[0] === 13) {
        actualDateFormate[0] = 1
        actualDateFormate[2] += 1
        actualDateFormate[3] = 1
        actualDateFormate[3] += 1
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
        actualDay_this_month,
        actualDateFormate[2],
        nextMonth,
        actualDateFormate[4],
        actualDateFormate[5],
      ]
      actualDateFormate[0] += 1
      actualDateFormate[3] += 1
      month += 1
      actualDay_this_month = '01'
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
      filerLocation: 'ВСЕ СЦЕНЫ',
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
      itemsCal: [],
      checkFilter: 0,
      dataList: dateList,
      monthName: monthName,
      actualDay_this_month: actualDay_this_month,
      actualMoth_str: actualMoth_str,
      nextMoth_str: nextMoth_str,
      dataArr: dateList[actualMoth_str],
      nextDate: dateList[nextMoth_str],
    }
  }
  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
  }
  calendar(d) {
    if (d === 1) {
      d = '01'
    } else if (d === 2) {
      d = '02'
    } else if (d === 3) {
      d = '03'
    } else if (d === 4) {
      d = '04'
    } else if (d === 5) {
      d = '05'
    } else if (d === 6) {
      d = '06'
    } else if (d === 7) {
      d = '07'
    } else if (d === 8) {
      d = '08'
    } else if (d === 9) {
      d = '09'
    }
    this.setState(() => {
      return {
        day: d,
        checkFilter: 1,
      }
    })
    this.componentDidMount()
  }

  calendarDefault() {
    this.setState(() => {
      return {
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

  filterLocation(b) {
    this.setState(() => {
      return { filerLocation: b }
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
        m: this.state.dataArr[0],
        y: this.state.dataArr[2],
      }
    })
    this.componentDidMount()
  }

  componentDidMount() {
    setTimeout(() => {
      let filters = this.state.filerLocation
      let filtPathc

      if (filters === 'БОЛЬШАЯ СЦЕНА') {
        filtPathc = 'filters[play][scene][name][$eq]=Большая сцена&'
      } else if (filters === 'МАЛАЯ СЦЕНА') {
        filtPathc = 'filters[play][scene][name][$eq]=Малая сцена&'
      } else if (filters === 'ЗАЛ «МАЛЕНЬКАЯ ЛУНА»') {
        filtPathc = 'filters[play][scene][name][$eq]=Зал «Маленькая Луна»&'
      } else {
        filtPathc = ''
      }

      if (!this.state.checkFilter) {
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
        api
          .searchPosters(date, lastDate, filtPathc, this.state.search)
          .then((response) => {
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
      }
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

        let lastDayForMoth = daysInMonth(this.state.m, this.state.dataArr[2])
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
          this.state.day
        let calLastDate =
          this.state.dataArr[2] + '-' + this.state.dataArr[0] + '-' + lastDay

        api
          .searchPosters(calDate, calLastDate, filtPathc, this.state.search)
          .then((response) => {
            if (this.state.itemsCal) {
              this.setState({
                isLoaded: true,
                itemsCal: response.data,
              })
            } else {
              this.setState({
                isLoaded: true,
                itemsCal: 'notItem',
              })
            }
          })
        let date =
          this.state.dataArr[2] +
          '-' +
          this.state.dataArr[0] +
          '-' +
          this.state.day
        let lastDate =
          this.state.dataArr[5] +
          '-' +
          this.state.dataArr[3] +
          '-' +
          this.state.dataArr[4]
        api
          .searchPosters(date, lastDate, filtPathc, this.state.search)
          .then((response) => {
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
      }
    }, 100)
  }
  render() {
    return (
      <section>
        <main>
          <SortPoster
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
          />
          <PosterContent filterState={this.state} />
        </main>
      </section>
    )
  }
}

export default Poster
