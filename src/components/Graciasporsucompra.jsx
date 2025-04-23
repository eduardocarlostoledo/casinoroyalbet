import React from "react";
import "../styles/Graciasporsucompra.css";

export const Graciasporsucompra = () => {
  return (
    <div className="gracias-container">
      <div className="gracias-card">
        <div className="checkmark-circle">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark-circle-bg" cx="26" cy="26" r="25" />
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        <h1 className="gracias-title">¡Gracias por tu recarga!</h1>
        <p className="gracias-desc">Tu operación fue recibida y será procesada en breve. Revisa tu email para más detalles.</p>
        <a href="/" className="gracias-btn">Volver al inicio</a>
      </div>
    </div>
  );
};