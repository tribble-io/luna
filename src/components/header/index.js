import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useWindowScrollPositions } from '../../assets/utils/usable-function'
import Collapsible from 'react-collapsible'
import styles from './header.module.scss'
import { linkMobileHeader } from './fields'
import { openSettingsModal } from '@n3/react-vision-panel'
import '@n3/react-vision-panel/dist/vision-panel.css'

function Header() {
  const [open, setOpen] = useState(false)
  const [isOpenAccordion, setIsOpenAccordion] = useState(false)

  const handleClickAccordion = () => {
    setIsOpenAccordion(!isOpenAccordion)
  }

  const handleClickNavigate = () => {
    setOpen(false)
  }

  const social = ['tg_logo', 'vk_logo', 'rutube_logo']
  const links = [
    'https://t.me/lunatheatre',
    'https://vk.com/teatr_luny',
    'https://rutube.ru/channel/26047198/',
  ]

  return (
    <header>
      <div className={styles.header_top}>
        <div className={styles.header_info_gov}>
          <a href='http://kultura.mos.ru/' target='_blank' rel='noreferrer'>
            <img
              className={styles.header_info_icon}
              src='/img/header-gov.webp'
              alt=''
            ></img>
          </a>
          <a
            href='http://kultura.mos.ru/'
            target='_blank'
            rel='noreferrer'
            className={styles.header_info_text}
          >
            Департамент культуры <br /> города Москвы
          </a>
        </div>
        <div className={styles.header_info_blind}>
          <img
            onClick={() => openSettingsModal()}
            className={styles.header_info_icon}
            src='/img/glasses.webp'
            alt=''
            width='40px'
            height='40px'
          ></img>
          <button
            onClick={() => openSettingsModal()}
            className={styles.header_info_text}
          >
            Версия для <br /> слабовидящих
          </button>
        </div>
        <Link to='/' className={styles.mobileLogo}>
          <img
            className={styles.mobileLogoImg}
            id={'href'}
            src='/img/logo.png'
            alt=''
          />
        </Link>
        <div className={styles.mobileMenu}>
          <div
            className={
              open
                ? `${styles.mobileMenuIcon} ${styles.mobileMenuIconOpen}`
                : styles.mobileMenuIcon
            }
            onClick={() => setOpen(!open)}
          >
            <div className={styles.mobileMenuLine}></div>
          </div>
          <div
            className={
              open
                ? styles.mobileMenuContainerOpen
                : styles.mobileMenuContainerClose
            }
          >
            <ul className={styles.mobileMenuList}>
              {linkMobileHeader?.map(({ label, link, detail }, index) => (
                <li key={`link=${link}-${index}`}>
                  {detail?.length ? (
                    <Collapsible
                      trigger={label}
                      classParentString={
                        isOpenAccordion
                          ? `${styles.linkAccordion} ${styles.openAccordion}`
                          : styles.linkAccordion
                      }
                      onOpen={() => handleClickAccordion()}
                      onClose={() => handleClickAccordion()}
                    >
                      {detail?.map((item, i) => (
                        <Link
                          to={item.link}
                          key={`sub-link-${item.link}-${i}`}
                          className={styles.mobileMenuSubLink}
                          onClick={() => handleClickNavigate()}
                        >
                          {item.label}
                        </Link>
                      ))}
                      {/* <p>
                        This is the collapsible content. It can be any element
                        or React component you like.
                      </p>
                      <p>
                        It can even be another Collapsible component. Check out
                        the next section!
                      </p> */}
                    </Collapsible>
                  ) : (
                    <Link to={link} onClick={() => handleClickNavigate()}>
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className={styles.socialLinks}>
              {social.map((filename, i) => (
                <a key={i} href={links[i]} className={styles.socialLink}>
                  <img src={`/img/${filename}.png`} alt={filename} />
                </a>
              ))}
            </div>
            <div className={styles.info_blind}>
              <img
                className={styles.info_icon}
                src='/img/glasses.webp'
                alt=''
                width='40px'
                height='40px'
              ></img>
              <button
                onClick={() => openSettingsModal()}
                className={styles.info_text}
              >
                Версия для <br /> слабовидящих
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
