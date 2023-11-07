import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img src="/logo4.jpg" alt="logo" className={styles.logo} />
        <h3 className={styles.name}>Vetera</h3>
      </Link>
    </div>
  );
}

export default Logo;
