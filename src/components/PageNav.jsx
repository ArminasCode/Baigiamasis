import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/">Namų puslapis</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Kontaktai</NavLink>
        </li>
        <li>
          <NavLink to="/product">Apie mus</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Prisijungti
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
