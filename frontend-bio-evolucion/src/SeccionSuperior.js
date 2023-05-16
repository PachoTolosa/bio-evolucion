import './SeccionSuperior.css';
import logoBE from "./assets/logoSinFondo.png"
import React from "react";

const holi=["","esto", "esto lo", "esto lo hago", "esto lo hago pa'", "esto lo lago pa divertirme"]
let n=0
function SeccionSuperior({ searchValue, setSearchValue }) {

  return (
    <header className="SeccionSuperior">
        <div className='logo'>
        <   img src={logoBE} alt="Logo-de-bio-evolucion" onClick={
              () => console.log("Holalola")}/>
        <b>Vive!</b>
        </div>
        <b id='leyenda'>By: Frank & Meli</b>
        <div id='seccion-derecha'>
            <input
            placeholder="Buscar productos"
            className="buscador"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            />
            <button className='boton-menu' onClick={() => {
              setSearchValue(holi[n]);n++;if (n === holi.length) {n = 0;}}}>+</button>

        </div>
    </header>
  );
}

export { SeccionSuperior };