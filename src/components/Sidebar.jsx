import styles from "./Sidebar.module.css";
import Logo from "./Logo";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
    </div>
  );
}

export default Sidebar;
