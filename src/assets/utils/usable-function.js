import { useState, useEffect } from 'react'

export const useWindowScrollPositions = () => {
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}

export function uniqueBy(a, cond) {
  return a.filter((e, i) => a.findIndex((e2) => cond(e, e2)) === i)
}

export const IsMobile = window.screen.width > 500 ? false : true
