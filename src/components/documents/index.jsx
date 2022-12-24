import React from 'react'
import DocumetsEl from './documentsElem/documetsEl'
import styles from './documets_main.module.scss'

class Documets extends React.Component {
  constructor() {
    super()

    this.state = {
      nameList: [
        'оценка качества',
        'покупка билетов',
        'учредительные документы',
        'отчёты',
        'противодействие коррупции',
        'доступность здания для лиц с ограниченными возможностями здоровья',
      ],
      activeFilter: 'оценка качества',
      item: [],
      nameTage: [
        'Независимая оценка качества услуг ГБУК г. Москвы "Московского театра "Театр Луны":',
        'Покупка билетов:',
        'Учредительные документы:',
        'Отчёты:',
        'Противодействие коррупции:',
        'Паспорт доступности общественного здания для лиц с ограниченными возможностями здоровья: ',
      ],
      activeNameTage:
        'Независимая оценка качества услуг ГБУК г. Москвы "Московского театра "Театр Луны":',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      fetch(
        `http://theatre.restomatik.ru:1337/api/docs?filters[category][title][$eq]=${this.state.activeFilter}&populate=file`
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            item: result.data,
          })
        })
    }, 100)
  }

  changeFilter(value) {
    this.setState({
      activeFilter: value,
      activeNameTage: this.state.nameTage[this.state.nameList.indexOf(value)],
    })
    this.componentDidMount()
  }

  render() {
    return (
      <section className={styles.mainDocumntsBlock}>
        <main>
          <h1>ДОКУМЕНТЫ</h1>
          <div className={styles.contentBlock}>
            <div className={styles.filtersBlock}>
              <div className={styles.filters}>
                {this.state.nameList.map((item) => (
                  <div
                    key={item}
                    className={
                      this.state.activeFilter === item
                        ? styles.itemsActive
                        : styles.items
                    }
                    onClick={() => {
                      this.changeFilter(item)
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.contentInfo}>
              <DocumetsEl
                state={this.state.item}
                tage={this.state.activeNameTage}
              />
            </div>
          </div>
        </main>
      </section>
    )
  }
}

export default Documets
