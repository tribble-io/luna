import React from 'react'
import { Link } from 'react-router-dom'
import { PlaysLine } from '../createElement'
import styles from './popup.module.scss'

/*
Example of adding the PopUp component to a page, you can see a demo on this page src\components\mainPage\slider\index.js
Add required React Hook on the parent page
const [open, setOpen] = useState(false)

Add component tag and props to the parent page where ticketData is array with info for PlaysLine
<TicketPopUp
  closePopup={() => setOpen(false)}
  open={open}
  data={ticketData}
/>

Trigger button example where offer.id is a play ID
<button
  type='button'
  onClick={() => {
    setOpen(true)
    setTicketPlayID(offer.id)
  }}
>
  БИЛЕТЫ
</button>
*/

export function TicketPopUp(props) {
  const { closePopup, open, data } = props

  return (
    <div
      style={{
        visibility: open ? 'visible' : 'hidden',
        opacity: open ? '1' : '0',
      }}
      className={styles.overlay}
    >
      <div className={styles.popup}>
        <div className={styles.popupContent}>
          <div className={styles.close}>
            <span onClick={closePopup}>
              <svg
                width='19'
                height='19'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M19.2803 1.94694C19.3608 1.86636 19.4248 1.7707 19.4684 1.66542C19.512 1.56013 19.5344 1.44729 19.5344 1.33334C19.5344 1.21938 19.512 1.10654 19.4684 1.00126C19.4248 0.895978 19.3608 0.800317 19.2803 0.719737C19.1997 0.639158 19.104 0.57524 18.9987 0.531631C18.8935 0.488022 18.7806 0.465576 18.6667 0.465576C18.5527 0.465576 18.4399 0.488022 18.3346 0.531631C18.2293 0.57524 18.1336 0.639158 18.0531 0.719737L10 8.77454L1.94693 0.719737C1.86635 0.639158 1.77069 0.57524 1.66541 0.531631C1.56013 0.488022 1.44729 0.465576 1.33333 0.465576C1.21937 0.465576 1.10653 0.488022 1.00125 0.531631C0.89597 0.57524 0.800309 0.639158 0.71973 0.719737C0.639151 0.800317 0.575232 0.895978 0.531623 1.00126C0.488014 1.10654 0.465569 1.21938 0.465569 1.33334C0.465569 1.44729 0.488014 1.56013 0.531623 1.66542C0.575232 1.7707 0.639151 1.86636 0.71973 1.94694L8.77453 10L0.71973 18.0531C0.556993 18.2158 0.465569 18.4365 0.465569 18.6667C0.465569 18.8968 0.556993 19.1175 0.71973 19.2803C0.882467 19.443 1.10319 19.5344 1.33333 19.5344C1.56347 19.5344 1.78419 19.443 1.94693 19.2803L10 11.2255L18.0531 19.2803C18.2158 19.443 18.4365 19.5344 18.6667 19.5344C18.8968 19.5344 19.1175 19.443 19.2803 19.2803C19.443 19.1175 19.5344 18.8968 19.5344 18.6667C19.5344 18.4365 19.443 18.2158 19.2803 18.0531L11.2255 10L19.2803 1.94694Z'
                />
              </svg>
            </span>
          </div>

          <div className={styles.content}>
            {/* If there is data, we display result, if not, we display loader */}
            {data ? (
              data.length > 0 ? (
                <>
                  <div className={styles.playsList}>
                    {data.map((data) => (
                      <PlaysLine data={data} key={data.id} />
                    ))}
                  </div>
                  <div className={styles.allDates}>
                    <Link to='/scenes'>смотреть все даты</Link>
                  </div>
                </>
              ) : (
                // if the data exists, but there are no results from back
                <p className={styles.noResult}>
                  Нет ближайших показов данного спектакля
                </p>
              )
            ) : (
              <div className={styles.loader}>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
