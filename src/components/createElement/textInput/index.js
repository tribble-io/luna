import React from 'react'
import styles from './input.module.scss'

export function TextInput(props) {
  const { name, id, placeholder, onChange } = props
  return (
    <div className={styles.textInput}>
      <input
        type='text'
        name={name ?? 'nameSearch'}
        id={id ?? 'search'}
        placeholder={placeholder ?? 'поиск по названию'}
        onChange={onChange}
      />
    </div>
  )
}
