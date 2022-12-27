import React, { useState } from 'react'
import styles from './shows.module.scss'
import { CreatePlaysCard } from '../../createElement'
import { TicketPopUp } from '../../ticketPopup'

export function ShowsCards(props) {
  const { items, setTicketPlayID, ticketData } = props
  const [open, setOpen] = useState(false)

  const popupOpen = (playID) => {
    setOpen(true)
    setTicketPlayID(playID)
  }

  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.showsContent}>
            {items.map((item, key) => (
              <div className={styles.showsCard} key={key}>
                <CreatePlaysCard
                  data={item}
                  key={item.id}
                  popupOpen={popupOpen}
                />
              </div>
            ))}
            <TicketPopUp
              closePopup={() => setOpen(false)}
              open={open}
              data={ticketData}
            />
          </div>
        </div>
      </section>
    </>
  )
}
