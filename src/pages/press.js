import React, { useState, useEffect } from 'react'
import { API_URL, api } from '../api/index'

import { PressFilters } from '../components/press'
import Loader from '../components/loader'

function getPlayPress(arr) {
  if (arr !== null) {
    const review = arr.map((item) => {
      return {
        id: item.id,
        title: item.title,
        publisher: item.publisher,
        link: item.link,
      }
    })
    return review
  } else {
    return []
  }
}

export function Press() {
  return (
    <main>
      <PressFilters />
    </main>
  )
}
