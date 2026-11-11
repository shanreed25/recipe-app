import { NavLink } from "react-router";
import { styles } from "../styles/styles";
import { SearchBar } from "./SearchBar";

const navItemClass = ({ isActive }) =>
  isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

export function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <NavLink to="/" className={navItemClass}>
          Home
        </NavLink>
        {/* <NavLink to="/favorites" className={navItemClass}>Favorites</NavLink> */}
        <SearchBar />
      </nav>
    </header>
  );
}
