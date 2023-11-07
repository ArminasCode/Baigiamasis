// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./AboutUs.module.css";

export default function Product() {
  return (
    <main className={styles.content}>
      <PageNav />
      <section>
        <div>
          <h2>Klinikos padalinių kontaktai ir darbo laikai.</h2>
          <ul className={styles.list}>
            <li>Darbo laikas:</li>
            <li>I-VII 8-23h.</li>
            <li>Adresas: Pavilionių g.35-41, LT-12137 Vilnius, Lietuva </li>
            <li>El.paštas: Vetera@gmail.com</li>
          </ul>
        </div>
        <img src="map.png" alt="" />
      </section>
    </main>
  );
}
