import { SidebarList } from '../SidebarList';
import { sidebarData } from './sidebarData';

import styles from './styles.module.css'

/**
 * TODO: FAZER A NAVBAR VOLTAR NO DIRETO NO HOVER QUANDO TIVER FECHADA
 */

export function Sidebar() {
  return (
    <>
      <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <h1>Dev <span>Toolbox</span> </h1>
            <button> &lt; </button>
          </div>
        <div className={styles.listContainer}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Pesquisar..."/>
            <div className={styles.list}>
              {sidebarData.map((item, index) => {
                return (<SidebarList 
                  key={index}
                  path={item.path}
                  title={item.title}
                  icon={item.icon} 
                  subMenu={item.subMenu}
                />);
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}