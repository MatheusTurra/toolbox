import { useState } from 'react'
import styles from './styles.module.css'

export function SidebarList(props) {
  const [showSubList, setShowSubList] = useState(false)

  return (
    <>
      <ul className={styles.list}>
        <li>
          <a 
            className={styles.title}
            href={props.path}
            onClick={() => setShowSubList(!showSubList)}
          >
            <span className={styles.icon}>
              {props.icon}
            </span>

            {props.title}
          </a>

            {props.subMenu.length > 0 && 
              props.subMenu.map((item, index) => {
                return(
                  <div 
                    key={index}
                    className={ showSubList ? styles.subMenuList : styles.hideSubMenuList}
                    >
                    <ul>
                      <li>
                        <a className={styles.subMenuTitle} href={item.href}>
                          <span className={styles.subMenuIcon}> {item.icon} </span> {item.title}
                        </a>
                      </li>
                    </ul>
                  </div>
                )
              })
            }
        </li>
      </ul>
    </>
  )
}