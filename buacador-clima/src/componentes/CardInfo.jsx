import React from "react";
import estilos from "./cardInfo.module.css";

export const CardInfo = ({ clima }) => {
  return (
    <div className={estilos.mainInfo}>
      <div className={estilos.ciudad}>{clima?.location.name}</div>
      <div className={estilos.pais}>{clima?.location.country}</div>
      <div className={estilos.row}>
        <div>
          <img
            src={`http:${clima?.current.condition.icon}`}
            width="128px"
            alt={clima?.current.condition.text}
          />
        </div>
        <div>
          <div className={estilos.condition}>
            {clima?.current.condition.text}
          </div>
          <div className={estilos.current}>{clima?.current.temp_c}</div>
        </div>
      </div>
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${clima?.location.lon}5!3d${clima?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
