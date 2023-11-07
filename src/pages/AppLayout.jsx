import ContactForm from "../components/ContactForm";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <ContactForm />
    </div>
  );
}

export default AppLayout;
