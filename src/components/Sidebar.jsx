import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <AppNav />
      <Logo />

      <p>Labas Krabas</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Labas
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
