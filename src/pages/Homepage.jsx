import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Klinika-Vetera
          <br />
          Veterai rūpi Jūsų augintinių sveikata!
        </h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          veritatis illum ipsam aliquid laboriosam ipsum voluptatibus dicta
          accusantium enim, sed facilis reprehenderit suscipit a dolor. In
          cumque officia nemo dolores.
        </h2>
        <Link to="/app" className="cta">
          Registruotis specialisto apziūrai
        </Link>
      </section>
    </main>
  );
}
