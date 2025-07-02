import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { useState } from "react";
import { use } from "react";

export const Card = ({ img, name, role, description }) => {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState("");
  const [valorBooleano, setValorBooleano] = useState(true);

  const navigate = useNavigate(); // estos es un Hook
  const handleClick = () => {
    alert(`Hola ${name}, bienvenido al curso de React`);
  };

  const handleClickInfo = () => {
    //navegar a infor por medio del click
    navigate("/info");
  };

  /// new Date().toLocaleTimeString()

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    if (e.target.name === "nombre") {
      setNombre(e.target.value);
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const handleChangeEjercicio = (e) => {
    console.log(e.target.name, e.target.value);
    if (e.target.value.includes("cebolla")) {
      alert("No me gusta la cebolla");
    }
  };

  const handleRenderCondicional = () => {
    setValorBooleano(!valorBooleano);
  };
  return (
    <div className={styles.card}>
      <img src={img} alt="Imagen aleatoria" className={styles.imagen} />
      <h2>{name} </h2>
      <strong>{role}</strong>
      <p>{description}</p>
      <hr />
      <button onClick={handleClick}>Click me!!!!</button>
      <button onClick={handleClickInfo}>Ir a Info</button>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        name="nombre"
        id="nombre"
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Escribe tu profesion"
        name="profesion"
        id="profesion"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Escribe algo"
        name="ejercicio"
        id="ejercicio"
        onChange={handleChangeEjercicio}
      />

      <div>
        <h2>Contador en react</h2>
        <p>{count}</p>
        <button onClick={handlePlus}>Aumentar</button>
        <button onClick={handleMinus}>Disminuir</button>
      </div>

      <p>Nombre:{nombre}</p>
      <span onClick={handleRenderCondicional}>Render condicional</span>

      {valorBooleano ? <p>MUY BIEN</p> : null}
    </div>
  );
};
