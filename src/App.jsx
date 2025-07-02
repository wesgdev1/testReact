// import "./App.css";

import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { NavBar } from "./components/NavBar";
import { Students } from "./components/Students";
import { Info } from "./components/Info";

import { Contador } from "./components/Contador";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/info" element={<Info />} />

        <Route path="/*" element={<Students />} />
      </Routes>

      <section>
        <Contador />
      </section>
    </>
  );
}

export default App;
