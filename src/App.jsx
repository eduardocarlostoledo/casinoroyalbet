import React from "react";
import { RecargaForm } from "./components/RecargaForm";
import { Cotizaciones } from "./components/Cotizaciones";
import { DetalleCotizacion } from "./components/DetalleCotizacion";
import { Graciasporsucompra } from "./components/Graciasporsucompra";
import "./styles/global.css";

export default function App() {
  return (
    <div className="landing">
      <header className="landing-header">
        <nav className="navbar navbar-fixed">
          <div className="logo">🎰 CasinoRecarga</div>
          <ul className="nav-links">
            <li><a href="#recarga">Recargar</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        <h1 className="title">Casino Online - Recarga de Saldo</h1>
        <p className="subtitle">Generá tu cupón de recarga de forma segura y al instante</p>
      </header>

      <section className="form-section" id="recarga">
        <RecargaForm />
      </section>

      <section id="servicios">
        <Cotizaciones />
      </section>

      <section id="detalle">
        <DetalleCotizacion />
      </section>

      <section id="gracias">
        <Graciasporsucompra />
      </section>

      <footer className="landing-footer" id="contacto">
        <div className="footer-contact">
          <p>¿Necesitás ayuda? <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer">Escribinos por WhatsApp</a></p>
        </div>
        <div className="footer-social">
          <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon" />
          </a>
        </div>
        <div className="footer-security">
          <p><strong>Seguridad:</strong> Todos los datos personales se procesan de forma confidencial y segura. No compartimos tu información con terceros.</p>
        </div>
        <p className="footer-copy">&copy; 2025 Casino Online | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
