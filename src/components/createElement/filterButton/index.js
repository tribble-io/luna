import React from 'react'
import styles from './button.module.scss'

export function CreateButton(props) {
  const { updateFilter, activeButton, buttonArray, className } = props

  function buttonClass(name) {
    return `${styles.buttonFilter} ${
      activeButton === name ? styles.active : ''
    } ${className ? className : ''}`
  }

  return (
    <>
      {buttonArray.map((button, i) => (
        <button
          key={i}
          className={buttonClass(button)}
          onClick={updateFilter}
          name={button}
        >
          {button}
        </button>
      ))}
    </>
  )
}
