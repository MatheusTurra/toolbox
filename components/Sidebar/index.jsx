import { useState } from 'react';
import { SidebarList } from '../SidebarList';
import { sidebarData } from './sidebarData';

import styles from './styles.module.css'

export function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  function expandHiddenSidebar() {
    if(showSidebar === false) {
      setTimeout(() => {
        setShowSidebar(true);
      }, 500);
    }
  }

  return (
    <>
      <nav 
        className={showSidebar ? styles.navbar : styles.hideNavbar}
        onMouseEnter={expandHiddenSidebar}
      >
          <div className={styles.logoContainer}>
            {showSidebar 
              ? <h1>Dev <span>Toolbox</span> </h1>
              : <h1>D <span>TB</span></h1>
            }
            <button onClick={() => setShowSidebar(!showSidebar)}>
               {showSidebar ? '<' : '>'} 
              </button>
          </div>
        <div className={showSidebar ? styles.listContainer : styles.displayNone}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Pesquisar..."/>
            <div className={styles.list}>
              {sidebarData.map((item, index) => {
                return (<SidebarList 
                  key={index}
                  path={item.path}
                  title={item.title}
                  icon={item.icon} 
                  subList={item.subList}
                />);
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}