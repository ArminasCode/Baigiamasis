import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <Logo />
      <AppNav />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()}by .........
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
