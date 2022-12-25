import React from 'react'
import { api } from '../api'
import DocumetsEl from '../components/documents/documentsElem/documetsEl'
import styles from '../components/documents/documets_main.module.scss'

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

  externalLinks() {
    let links = document.getElementsByTagName('a')
    for (let i = 0; i < links.length; i++) {
      let link = links[i]
      if (link.getAttribute('href') && link.getAttribute('rel') == 'external')
        link.target = '_blank'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      api.documents(this.state.activeFilter).then((response) => {
        this.setState({
          item: response.data,
        })
      })
    }, 100)
    this.externalLinks()
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
