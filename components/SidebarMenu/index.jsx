import styles from './styles.module.css'

export function SidebarMenu(props) {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <a className={styles.title} href={props.path}>
            <span className={styles.icon}>
              {props.icon}
            </span>

            {props.title}
          </a>

            {props.subMenu.length > 0 && 
              props.subMenu.map((item, index) => {
                return(
                  <div className={styles.subMenuList}>
                    <ul>
                      <li>
                        <a key={index} href={item.href}>
                          {item.title}
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