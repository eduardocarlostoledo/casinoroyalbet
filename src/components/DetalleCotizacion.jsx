import React from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/DetalleCotizacion.css";

export const DetalleCotizacion = () => {
  const location = useLocation();
  const plan = location.state?.plan;

  const handleConfirm = () => {
    Swal.fire({
      title: '¡Gracias por tu elección!',
      text: `Has elegido el plan: ${plan.title}. Serás redirigido al pago.`,
      icon: 'success',
      confirmButtonText: 'Ir al Pago',
      confirmButtonColor: '#c69e5d',
    }).then(() => {
      window.location.href = plan.link;
    });
  };

  if (!plan) return <p className="no-plan">No se encontró el detalle del plan.</p>;

  return (
    <section className="detalle-cotizacion">
      <h2>Detalles del Plan</h2>
      <div className="detalle-card">
        <h3>{plan.title}</h3>
        <p className="precio">{plan.price}</p>
        <ul>
          {plan.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
        <button onClick={handleConfirm} className="btn-confirmar">Confirmar y Pagar</button>
      </div>
    </section>
  );
};
