import React from "react";
import estilos from "./loading.module.css";

const Loadind = () => {
  return (
    <div className={estilos.loadingContainer}>
      <div className={estilos.loader}>
        <div> </div>
      </div>
    </div>
  );
};

export default Loadind;
