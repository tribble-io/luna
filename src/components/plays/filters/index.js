import React, { useState } from 'react'
import styles from './filter.module.scss'
import CustomCheckbox from '../../createElement/customCheckbox'
import CreateButton from '../../createElement/filterButton'

export function ShowsFilter(props) {
  const [activeButton, setActiveButtons] = useState('Все сцены')
  const { setEditValue } = props

  const updateInput = (e) => {
    const value = e.target.value
    setEditValue((editValue) => ({ ...editValue, title: value }))
  }

  const updateFilter = (e) => {
    const value = e.target.name
    setActiveButtons(value)
    if (value === 'Все сцены') {
      setEditValue((editValue) => ({ ...editValue, scene: '' }))
    } else {
      setEditValue((editValue) => ({ ...editValue, scene: value }))
    }
  }

  const isActive = (state, name) => {
    setEditValue((editValue) => ({ ...editValue, [name]: state }))
  }

  const buttonArray = [
    'Все сцены',
    'Большой зал',
    'Малый зал',
    'Зал "Маленькая Луна"',
  ]

  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.filterContent}>
            <div className={styles.filterTitle}>
              <h1>спектакли</h1>
            </div>
            <div className={styles.filterArea}>
              <div className={styles.filterGroup}>
                <CreateButton
                  updateFilter={updateFilter}
                  activeButton={activeButton}
                  buttonArray={buttonArray}
                />
              </div>
              <div className={styles.filterGroup}>
                <div className={styles.inputFilter}>
                  <input
                    type='text'
                    name='nameSearch'
                    id='nameSearch'
                    placeholder='поиск по названию'
                    onChange={updateInput}
                  />
                </div>
              </div>
              <div className={styles.filterGroup}>
                <div className={styles.checkboxFilter}>
                  <CustomCheckbox
                    id='premieres'
                    name='isPremiere'
                    label='Премьеры'
                    isActive={isActive}
                    className={styles.checkbox}
                  />
                </div>
                <div className={styles.checkboxFilter}>
                  <CustomCheckbox
                    id='kids'
                    name='rating'
                    label='Для детей'
                    isActive={isActive}
                    className={styles.checkbox}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
