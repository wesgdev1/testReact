import { Card } from "../Card";
import styles from "./Students.module.css";

export const Students = () => {
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
  );
};
