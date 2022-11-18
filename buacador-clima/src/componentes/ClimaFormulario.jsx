import React, { useState } from "react";
import estilos from "./buscadorForm.module.css";

export const ClimaFormulario = ({ cambioCiudad }) => {
  const [ciudad, setCiudad] = useState("");

  const handleChange = (e) => {
    setCiudad(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    cambioCiudad(ciudad);
  };

  return (
    <form onSubmit={handleSubmit} className={estilos.container}>
      <input type="text" onChange={handleChange} className={estilos.input} />
    </form>
  );
};
