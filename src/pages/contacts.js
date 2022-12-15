import React from 'react'

import {
  ContactsTitle,
  ContactsMap,
  ContactsList,
} from '../components/contacts'

export function Contacts() {
  return (
    <main>
      <ContactsTitle />
      <ContactsMap />
      <ContactsList />
    </main>
  )
}
