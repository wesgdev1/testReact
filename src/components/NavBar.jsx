import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
export const NavBar = () => {
  return (
    <div className={styles.contenedor}>
      <h1>Hola mundo</h1>
      <p>Este es el Bootcamp de programacion</p>
      <hr />
      <Link to="/">Inicio</Link> |||||<Link to="/info">Info</Link> |
    </div>
  );
};
