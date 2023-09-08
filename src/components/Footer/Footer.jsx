import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
        <h3><strong>Contacto</strong></h3>
          <p><strong>Dirección:</strong> Calle Principal, Ciudad Autónoma de Buenos Aires.</p>
          <p><strong>Teléfono:</strong> +54 9 11 11111111</p>
          <p><strong>Email:</strong> Empresa@Empresa.com</p>
        </div>
        <div className="footer-section">
          <h3><strong>Enlaces Rápidos</strong></h3>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/ofertas">Ofertas</Link>
            </li>
            {/* Agrega más enlaces según tu estructura */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons flex justify-evenly">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tienda con ReactJS by Lucas Buttarelli. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
