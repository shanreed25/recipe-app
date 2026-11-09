import { NavLink } from "react-router";
import { styles } from "../styles/styles";

const navItemClass = ({ isActive }) =>
  isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

export function NavBar() {


  return (
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <NavLink to="/" className={navItemClass}>Home</NavLink>
          <NavLink to="/recipe-details" className={navItemClass}>Blog</NavLink>
          <NavLink to="/favorites" className={navItemClass}>Favorites</NavLink>
          <NavLink to="/category" className={navItemClass}>Category</NavLink>
        </nav>
      </header>
  )
}

 