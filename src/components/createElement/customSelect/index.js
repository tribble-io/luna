import React, { useState } from 'react'
import styles from './select.module.scss'

/* Пример селекта
list - список значений
selectedOpt - index значения по умолчанию, если не указан, выбирается первый вариант
updateFilter - событие при выборе нового значения
<CustomSelect list={optionsList} selectedOpt={2} updateFilter={updateFilter} />
*/

export function CustomSelect(props) {
  const { list, updateFilter } = props
  const selectedOpt = props.selectedOpt ? props.selectedOpt : 0
  const [isOpen, setIsOpen] = useState(false)
  const [select, setSelect] = useState(selectedOpt)

  return (
    <div className={styles.customSelect}>
      <button
        type='button'
        aria-haspopup='listbox'
        aria-expanded={isOpen}
        className={isOpen ? styles.expanded : ''}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        {list[select]}
      </button>
      <ul
        className={`${styles.options} ${isOpen ? styles.show : ''}`}
        role='listbox'
        aria-activedescendant={list[select]}
        tabIndex={-1}
      >
        {list.map((option, index) => (
          <li
            key={index}
            id={option}
            role='option'
            aria-selected={select == index}
            tabIndex={0}
            onClick={() => {
              setSelect(index)
              updateFilter(index)
              setIsOpen(false)
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}
