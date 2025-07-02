import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
export const NavBar = () => {
  return (
    <div className={styles.contenedor}>
      <h1>Hola mundo</h1>
      <p>Este es el Bootcamp de programacion</p>
      <hr />
      <div className={styles.links}>
        <Link className={styles.link} to="/">
          Inicio
        </Link>
        <Link className={styles.link} to="/info">
          Info
        </Link>
      </div>
    </div>
  );
};
