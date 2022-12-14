import React from 'react'
import styles from './filter.module.scss'
import { CustomSelect } from '../../createElement'

export function PressFilters() {
  const optionsList = ['2022', '2021', '2020', '2019', '2018']

  const updateFilter = (index) => {
    console.log(index, 'choosen index')
    console.log(optionsList[index], 'choose')
  }

  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.filterContent}>
            <div className={styles.filterTitle}>
              <h1>пресса о театре</h1>
            </div>
            <div className={styles.filterArea}>
              <div className={styles.select}>
                <CustomSelect list={optionsList} updateFilter={updateFilter} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
