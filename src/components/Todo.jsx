import React, { useState } from "react";
import { Formulario } from "./Formulario";
import { Tarea } from "./Tarea";

import styles from "./Todo.module.css";

export const Todo = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completed: false,
    };

    //ACTUALIZO MI ESTADO CON EL SET
    setTareas([...tareas, nuevaTarea]);
  };

  const actualizarTarea = (id, nuevoTexto) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, texto: nuevoTexto } : t
    );
    setTareas(actualizadas);
  };

  const eliminarTarea = (id) => {
    const filtradas = tareas.filter((t) => t.id !== id);
    setTareas(filtradas);
  };

  const completarTarea = (id) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTareas(actualizadas);
  };

  return (
    <div>
      <Formulario agregarTarea={agregarTarea} />

      <hr />

      {/* Lista de tareas */}
      <div className={styles.container}>
        {tareas.map((t) => (
          <Tarea
            key={t.id}
            tarea={t}
            actualizarTarea={actualizarTarea}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </div>
  );
};
