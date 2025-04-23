import React from "react";
import "../styles/Cotizaciones.css";

export const Cotizaciones = () => {
  const plans = [
    {
      title: "Recarga Básica",
      price: "$5.000",
      features: ["Recarga mínima", "Atención en 24hs", "Cupón único validado"],
      link: "https://mpago.la/1P56hD5"
    },
    {
      title: "Recarga Premium",
      price: "$10.000",
      features: ["Recarga prioritaria", "Confirmación inmediata", "Atención preferencial"],
      link: "https://mpago.la/1P56hD5"
    },
    {
      title: "Suscripción VIP",
      price: "$25.000 / mes",
      features: ["Recargas ilimitadas", "Soporte 24/7", "Bonificaciones exclusivas"],
      link: "https://mpago.la/1P56hD5"
    }
  ];

  return (
    <section className="cotizaciones">
      <h2>Planes de Recarga</h2>
      <div className="cotizaciones-grid">
        {plans.map((plan, i) => (
          <div className="plan-card" key={i}>
            <h3>{plan.title}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul>
              {plan.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <a href={plan.link} target="_blank" rel="noopener noreferrer" className="plan-button">
              Seleccionar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};