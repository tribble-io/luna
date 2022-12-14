import React, { useEffect } from 'react'
import styles from './filter.module.scss'
import { CustomSelect } from '../../createElement'

export function PressFilters(props) {
  const { updateFilter, selectedOpt } = props
  useEffect(() => {
    updateFilter(selectedOpt)
  }, [])

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
                <CustomSelect {...props} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
