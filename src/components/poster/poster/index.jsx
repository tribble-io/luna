import React from "react";
import PosterContent from "../posterContent";
import SortPoster from "../SortPoster";
 
const MONTHS = [
    "",
    "ЯНВАРЬ",
    "ФЕВРАЛЬ",
    "МАРТ",
    "АПРЕЛЬ",
    "МАЙ",
    "ИЮНЬ",
    "ИЮЛЬ",
    "АВГУСТ",
    "СЕНТЯБРЬ",
    "ОКТЯБРЬ",
    "НОЯБРЬ",
    "ДЕКАБРЬ",
  ];
 
class Poster extends React.Component {
    constructor() {
        super();
 
        const MONTHS_num = [
            "",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
          ];
 
        const todayData = new Date()
        const todayDataM = todayData.getMonth()
 
        let year = Date() .split(' ') [3];
        let today = new Date();
        let num_month = today . getMonth() +1 ;
        let days_for_month = this.daysInMonth(num_month , year); 
 
        this.state = {
            filterState: MONTHS[todayDataM %12 + 1],
            filerLocation: 'ВСЕ СЦЕНЫ',
            m: MONTHS_num[(todayDataM) %12 + 1],
            m_str: todayDataM,
            m_next: MONTHS_num[(todayDataM + 1) %12 + 1],
            y: todayData.getFullYear(),
            y_next: '2023',
            isLoaded: true,
            items: [],
            itemsNew: [],
            search: '',
            day: '01',
            days_for_month: days_for_month,
            day_next: '01'
        };
    }
 
 
    daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
        }
        calendar = (d) => {
 
        if(d == '1') {
            d = '01'
        } else if (d == '2') {
            d = '02'
        } else if (d == '3') {
            d = '03'
        } else if (d == '4') {
            d = '04'
        } else if (d == '5') {
            d = '05'
        } else if (d == '6') {
            d = '06'
        } else if (d == '7') {
            d = '07'
        } else if (d == '8') {
            d = '08'
        } else if (d == '9'){
            d = '09'
        }        
        this.setState (() => {
            return { 
                day: d,
                    }
             }     
        ) 
        this.componentDidMount()
    }
 
    calendarDefault = () => {
        this.setState (() => {
            return {
                day: '01',
                day_next: '01',
                }
             }     
        ) 
        this.componentDidMount()
    }
 
    search = (c) => {
 
        this.setState (() => {
            return { search: c,
                day: '01',
                day_next: '01',
                y: this.state.y_next                
                }
             }     
        ) 
        this.componentDidMount()
    }
    filterLocation = (b) => {
        this.setState (() => {
            return { filerLocation: b,
                     day: '01',
                     day_next: '01',
                     y: this.state.y_next                
                    }
             }
        ) 
        this.componentDidMount()
 
    }
    filterStateUpdate = (a) => {
        this.setState (() => {
               return { filterState: a,
                        m_str: a,
                        m: this.v1(a),
                        m_next: this.v2(a),
                        y: this.v3(a),
                        y_next: this.v4(a),
                        day_next: '01',
                        day: '01',
                    }
                }
        )
 
        this.componentDidMount()
    }
 
    v1 = (a) => {
        switch (a) {
            case 'ЯНВАРЬ':
                return '01'
            case 'ФЕВРАЛЬ':
                return '02'
            case 'МАРТ':
                return '03'
            case 'АПРЕЛЬ':
                return '04'
            case 'МАЙ':
                return '05'
            case 'ИЮНЬ':
                return '06'
            case 'ИЮЛЬ':
                return '07'
            case 'АВГУСТ':
                return '08'
            case 'СЕНТЯБРЬ':
                return '09'
            case 'ОКТЯБРЬ':
                return '10'
            case 'НОЯБРЬ':
                return '11'
            case 'ДЕКАБРЬ':
                return '12'
        }  
    }
    v2 = (a) => {
        switch (a) {
            case 'ЯНВАРЬ':
                return '02'
            case 'ФЕВРАЛЬ':
                return '03'
            case 'МАРТ':
                return '04'
            case 'АПРЕЛЬ':
                return '05'
            case 'МАЙ':
                return '06'
            case 'ИЮНЬ':
                return '07'
            case 'ИЮЛЬ':
                return '08'
            case 'АВГУСТ':
                return '09'
            case 'СЕНТЯБРЬ':
                return '10'
            case 'ОКТЯБРЬ':
                return '11'
            case 'НОЯБРЬ':
                return '12'
            case 'ДЕКАБРЬ':
                return '01'
        } 
    }
    v3 = (a) => {
        switch (a) {
            case 'ЯНВАРЬ':
                return '2023';
            case 'ФЕВРАЛЬ':
                return '2023';
            case 'МАРТ':
                return  '2023';
            case 'АПРЕЛЬ':
                return  '2023';
            case 'МАЙ':
                return '2023';
            case 'ИЮНЬ':
                return '2023';
            case 'ИЮЛЬ':
                return '2023';
            case 'АВГУСТ':
                return '2023';
            case 'СЕНТЯБРЬ':
                return '2023';
            case 'ОКТЯБРЬ':
                return '2023';
            case 'НОЯБРЬ':
                return '2022';
            case 'ДЕКАБРЬ':
                return '2022';
        }
    }
    v4 = (a) => {
        switch (a) {
            case 'ЯНВАРЬ':
                return '2023';
            case 'ФЕВРАЛЬ':
                return '2023';
            case 'МАРТ':
                return '2023';
            case 'АПРЕЛЬ':
                return '2023';
            case 'МАЙ':
                return '2023';
            case 'ИЮНЬ':
                return '2023';
            case 'ИЮЛЬ':
                return '2023';
            case 'АВГУСТ':
                return '2023';
            case 'СЕНТЯБРЬ':
                return '2023';
            case 'ОКТЯБРЬ':
                return '2023';
            case 'НОЯБРЬ':
                return '2023';
            case 'ДЕКАБРЬ':
                return '2023';
        } 
 
    }
    v5 = (a) => {
        switch (a) {
            case '01':
                return 'ЯНВАРЬ';
            case '02':
                return 'ФЕВРАЛЬ';
            case '03':
                return 'МАРТ';
            case '04':
                return 'АПРЕЛЬ';
            case '05':
                return 'МАЙ';
            case '06':
                return 'ИЮНЬ';
            case '07':
                return 'ИЮЛЬ';
            case '08':
                return 'АВГУСТ';
            case '09':
                return 'СЕНТЯБРЬ';
            case '10':
                return 'ОКТЯБРЬ';
            case '11':
                return 'НОЯБРЬ';
            case '12':
                return 'ДЕКАБРЬ';
        } 
}
    getWeekDay(date) {
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        let dates = new Date(date)        
 
        return days[dates.getDay()];
 
      }
 
    componentDidMount() {
        setTimeout(() => {
        const nowData = new Date()
        let date = this.state.y + '-' + this.state.m + '-' + this.state.day
        let lastDate = this.state.y_next + '-' + this.state.m_next + '-' + this.state.day_next  //вернуть нормадьный вариант
        let seachEl = this.state.search
        let filters = this.state.filerLocation
        let filtPathc
 
        if (filters === 'БОЛЬШАЯ СЦЕНА') {
            filtPathc = 'filters[place][$eq]=Большой зал&'
        } else if(filters === 'МАЛАЯ СЦЕНА') {
            filtPathc = 'filters[place][$eq]=Малый зал&'
        } else if (filters === 'ЗАЛ "МАЛЕНЬКАЯ ЛУНА"') {
            filtPathc = 'filters[place][$eq]=Зал "Маленькая Луна"&'
        } else {
            filtPathc = ''
        }
        fetch(`http://theatre.restomatik.ru:1337/api/shows?filters[date][$gte]=${date}&filters[date][$lt]=${lastDate}&sort[0]=date&${filtPathc}populate=play&filters[play][title][$containsi]=${seachEl}`)
        .then(res => res.json()).then(
            (result) => {
                if(this.state.items) { 
 
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
            }
        )
    }, 100);
    }
    render() {
 
        return (
            <section>
                <main>
                <SortPoster
                    m={this.state.m}
                    y={this.state.y}
                    calendarDefault={this.calendarDefault}
                    filterState={this.state.filterState}
                    filerLocation={this.state.filerLocation}
                    filterLocationFun={this.filterLocation}
                    filterStateUpdate={this.filterStateUpdate}
                    search={this.search}
                    calendar={this.calendar}/>
                <PosterContent 
                    filterState={this.state} getWeekDay={this.getWeekDay}/>
                    </main>
            </section>
        )
    }
}
 
export default Poster