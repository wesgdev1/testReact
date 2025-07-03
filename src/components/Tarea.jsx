import React, { useState } from "react";

import styles from "./Tarea.module.css";
export const Tarea = ({
  tarea,
  actualizarTarea,
  completarTarea,
  eliminarTarea,
}) => {
  const [modoEditar, setModoEditar] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.texto);

  const handleSave = () => {
    if (nuevoTexto.trim() === "") return;
    actualizarTarea(tarea.id, nuevoTexto);
    setModoEditar(false);
  };
  return (
    <div className={styles.card}>
      {modoEditar ? (
        <>
          <input
            type="text"
            placeholder="Ingrese su nueva tarea"
            value={nuevoTexto}
            onChange={(e) => setNuevoTexto(e.target.value)}
          />

          <button onClick={handleSave}>Guardar Cambios</button>
        </>
      ) : (
        <>
          <p>{tarea.texto}</p>
          <p>{tarea.completed ? "Completa" : "Pendiente"}</p>

          <hr />

          <p>Controles</p>
          <button onClick={() => eliminarTarea(tarea.id)}>
            Eliminar Tarea
          </button>
          <button onClick={() => completarTarea(tarea.id)}>
            Completar Tarea
          </button>
          <button onClick={() => setModoEditar(true)}>Actualizar Tarea</button>
        </>
      )}
    </div>
  );
};
