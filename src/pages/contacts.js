import React, { useEffect, useState } from 'react'
import { api } from '../api/index'
import Loader from '../components/loader'

import {
  ContactsTitle,
  ContactsMap,
  ContactsList,
} from '../components/contacts'

export function Contacts() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    api
      .exportContacData()
      .then((response) => {
        setItems(response)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <main>
      <ContactsTitle />
      <ContactsMap />
      {isLoading ? <Loader /> : <ContactsList items={items} />}
    </main>
  )
}
