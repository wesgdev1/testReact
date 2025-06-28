import styles from "./Card.module.css";

export const Card = ({ img, name, role, description }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="Imagen aleatoria" className={styles.imagen} />
      <h2>{name} </h2>
      <strong>{role}</strong>
      <p>{description}</p>
    </div>
  );
};
