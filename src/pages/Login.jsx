import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("vardenis@gmail.com");
  const [password, setPassword] = useState("");

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Link
            to={password.length >= 7 ? "/" : "#"}
            className={styles.loginBtn}
          >
            <button className={styles.loginBtn} disabled={password.length < 7}>
              Prisijungti
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
}
