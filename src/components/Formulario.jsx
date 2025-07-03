import { useState } from "react";

export const Formulario = ({ agregarTarea }) => {
  //Logica del formulario

  const [texto, setTexto] = useState("");

  const handleTareas = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    agregarTarea(texto);
    setTexto("");
  };

  return (
    <form onSubmit={handleTareas}>
      <h1>To-Do</h1>
      <input
        type="text"
        placeholder="Esribe tu tarea"
        name="tarea"
        onChange={(e) => setTexto(e.target.value)}
        value={texto}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};
