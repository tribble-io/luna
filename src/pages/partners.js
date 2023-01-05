import React, { useEffect, useState } from 'react'
import { api } from '../api/index'
import Loader from '../components/loader'

import { PartnersTitle, PartnersList } from '../components/partners'

export function Partners() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    api
      .getPartnersData()
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
      <PartnersTitle />
      {isLoading ? <Loader /> : <PartnersList items={items} />}
    </main>
  )
}
