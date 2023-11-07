import ContactForm from "../components/ContactForm";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <ContactForm />
    </div>
  );
}

export default AppLayout;
