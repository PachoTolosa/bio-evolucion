import React from "react";
import './App.css';
import { SeccionSuperior } from "./SeccionSuperior";
import { SeccionMedia } from "./SeccionMedia";
import { SeccionMediaHijo } from "./SeccionMediaHijo";
import { SeccionInferior } from "./SeccionInferior";
import { SeccionInferiorHijo } from "./SeccionInferiorHijo";
import { SeccionMediaTexto } from "./SeccionMediaTexto";

const identificadores = [
  { text: 'Asesorias', imagen: "./assets/ULTRA.22.DIA.01_0032.jpg" },
  { text: 'Market', imagen: "./assets/ULTRA.22.DIA.01_0262.jpg" },
  { text: 'Cursos', imagen: "./assets/ULTRA.22.DIA.01_0475.jpg" },
  { text: 'Blog', imagen: "./assets/ULTRA.22.DIA.01_0817.jpg" },
];

function App() {

let [searchValue, setSearchValue] = React.useState("");

  return (
    <>
      <SeccionSuperior 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {/* Esto es para una pagina embebida */}
      {/* <iframe src="https://monadical.com/posts/everyone-should-know-about-docker.html" width="100%" height="600px" frameborder="0"></iframe> */}
      <SeccionMedia>
        <div className="div-seccion-media">
        {identificadores.map(caquita=>(
          <SeccionMediaHijo
            key={caquita.text}
            text={caquita.text}
            imagen={caquita.imagen}
          />
        ))}
        </div>
      <SeccionMediaTexto />
      </SeccionMedia>
      <SeccionInferior>
        <SeccionInferiorHijo />
      </SeccionInferior>
    </>
  );
}

export default App;