import { sidebarData } from './sidebarData';
import styles from './styles.module.css'

export function Sidebar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>Dev <span>Toolbox</span> </h1>
        </div>
      <div className={styles.listContainer}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Pesquisar ferramenta..."/>
          <div className={styles.list}>
            {sidebarData.map((item) => {
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}