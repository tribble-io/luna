import React, { useRef } from 'react'
import styles from './rippleButton.module.scss'

export default function Ripple({ duration, color }) {
  const [rippleArray, setRippleArray] = React.useState([])

  const ref = useRef()

  React.useEffect(() => {
    let bounce

    if (rippleArray.length > 0) {
      window.clearTimeout(bounce)

      bounce = window.setTimeout(() => {
        setRippleArray([])
        window.clearTimeout(bounce)
      }, duration * 4)
    }

    return () => window.clearTimeout(bounce)
  }, [rippleArray.length, duration])

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()
    const x = event.pageX - rippleContainer.left
    const y = event.pageY - rippleContainer.top
    const newRipple = {
      x,
      y,
    }

    setRippleArray([...rippleArray, newRipple])
  }

  return (
    <div
      onMouseDown={addRipple}
      className={styles.RippleContainer}
      ref={ref}
      style={{
        '--color': color,
        '--duration-animation': `${duration}ms`,
      }}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={'span' + index}
              style={{
                top: '20px',
                left: ripple.x,
              }}
            />
          )
        })}
    </div>
  )
}
