import React, { useState, useEffect } from 'react'
import { API_URL, api } from '../api/index'
import Loader from '../components/loader'

function getFileLink(link) {
  return API_URL + link
}

export function UserAgreement() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api
      .getUserAgreementLink()
      .then((response) => {
        setData(getFileLink(response))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return isLoading ? <Loader /> : <>{window.location.replace(data)}</>
}
