import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img src="/logo4.jpg" alt="logo" className={styles.logo} />
      </Link>
      <h3 className={styles.name}>Vetera</h3>
    </div>
  );
}

export default Logo;
