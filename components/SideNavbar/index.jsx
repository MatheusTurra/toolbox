import styles from './styles.module.css'

export function SideNavbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>Dev <span>Toolbox</span> </h1>
        </div>
      <div className={styles.listContainer}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Pesquisar ferramenta..."/>
          <ul className={styles.list}>
            <li>
              ferramenta 1 (Componentizar)
            </li>
            <li>
              ferramenta 2 (Fazer o scroll interno funcionar)
            </li>
            <li>
              ferramenta 3
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}