import React, { useEffect, useState } from "react";
import { CardInfo } from "./CardInfo";
import { ClimaFormulario } from "./ClimaFormulario";

import estilos from "./buscadorClima.module.css";
import Loadind from "./Loadind";

const BuscadorClima = () => {
  const [clima, setClima] = useState(null);
  useEffect(() => {
    traerInfo();
  }, []);

  useEffect(() => {
    document.title = `Clima de | ${clima?.location.name}`;
  }, [clima]);

  const traerInfo = async (ciudad = "london") => {
    try {
      const respuesta = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${ciudad}`
      );
      const data = await respuesta.json();

      setTimeout(() => {
        setClima(data);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  const cambioCiudad = (ciudad) => {
    setClima(null);
    traerInfo(ciudad);
  };
  return (
    <div className={estilos.buscadorContainer}>
      <ClimaFormulario cambioCiudad={cambioCiudad} />
      {clima ? <CardInfo clima={clima} /> : <Loadind />}
    </div>
  );
};

export default BuscadorClima;
