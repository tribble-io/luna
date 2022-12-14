import React, { useState } from 'react'
import styles from './checkbox.module.scss'

{
  /* Пример чекбокса
<CustomCheckbox id="kids" name="kids" label="Для детей" checked={true} isActive={isActive} className={checkbox} /> 
*/
}

export function CustomCheckbox(props) {
  const { id, name, label, checked, isActive, className } = props
  const defaultChecked = checked ? checked : false
  const [isChecked, setIsChecked] = useState(defaultChecked)
  function spanClass() {
    return isChecked
      ? `${styles.checkbox} ${styles.checkboxActive}`
      : `${styles.checkbox}`
  }

  return (
    <div className={`${styles.customCheckbox} ${className}`}>
      <input
        type='checkbox'
        id={id}
        name={name}
        onChange={() => {
          isActive?.(!isChecked, name)
          setIsChecked(!isChecked)
        }}
        className={styles.checkboxInput}
      />
      <label htmlFor={id}>
        <svg className={spanClass()} viewBox='0 0 15 11' fill='none'>
          <path
            d='M1 4.5L5 9L14 1'
            strokeWidth='2'
            stroke={isChecked ? '#fff' : 'none'}
          />
        </svg>
        {label}
      </label>
    </div>
  )
}
