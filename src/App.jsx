// import "./App.css";

import styles from "./App.module.css";
import { Card } from "./Card";

function App() {
  //js purito

  const students = [
    {
      name: "Welinton Suarez",
      img: "https://i.pravatar.cc/200",
      role: "Profesor",
      description: "Bienvenido al curso de React",
    },
    {
      name: "Juan Perez",
      img: "https://i.pravatar.cc/200",
      role: "Estudiante",
      description: "Estoy emocionado por aprender React",
    },
    {
      name: "Maria Lopez",
      img: "https://i.pravatar.cc/200",
      role: "Estudiante",
      description: "Listo para el desafío de React",
    },
    {
      name: "Carlos Gomez",
      img: "https://i.pravatar.cc/200",
      role: "Estudiante",
      description: "React es increíble, ¡vamos a por ello!",
    },
  ];
  return (
    <>
      <div className={styles.contenedor}>
        <h1>Hola mundo</h1>
        <p>Este es el Bootcamp de programacion</p>
      </div>
      <section className={styles.cards}>
        {students.map((student, index) => {
          return (
            <Card
              key={index}
              name={student.name}
              img={student.img}
              role={student.role}
              description={student.description}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
