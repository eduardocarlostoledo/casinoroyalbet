import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "../styles/RecargaForm.css";

export const RecargaForm = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    monto: "",
    metodo: "Transferencia Bancaria"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cuponID = `RECARGA-${Date.now()}`;

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          usuario: formData.usuario,
          monto: formData.monto,
          metodo: formData.metodo,
          cupon: cuponID
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      Swal.fire(
        "¡Recarga Enviada!",
        `Tu solicitud ha sido procesada. Cupón: ${cuponID}`,
        "success"
      );

      setFormData({ usuario: "", monto: "", metodo: "Transferencia Bancaria" });
    } catch (error) {
      Swal.fire("Error", "Hubo un problema al generar tu cupón. Intenta de nuevo.", "error");
    }
  };

  return (
    <form className="recarga-form" onSubmit={handleSubmit}>
      <h2>Recargar Saldo</h2>
      <input name="usuario" placeholder="Usuario del Casino" value={formData.usuario} onChange={handleChange} required />
      <input name="monto" type="number" placeholder="Monto a recargar" value={formData.monto} onChange={handleChange} required />
      <select name="metodo" value={formData.metodo} onChange={handleChange}>
        <option>Transferencia Bancaria</option>
        <option>Mercado Pago</option>
        <option>Cripto (USDT)</option>
      </select>
      <button type="submit">Generar Cupón</button>
    </form>
  );
};
