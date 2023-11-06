import Rightside from "../components/Rightside";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Rightside />
    </div>
  );
}

export default AppLayout;
