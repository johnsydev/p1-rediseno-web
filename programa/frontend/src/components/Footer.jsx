import "./Footer.css";
import logo from "../assets/logo-usanjose2.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-img" />
        </div>

        <div className="footer-info">
          <div className="footer-column">
            <h4>Teléfonos</h4>
            <p>(+506) 2460 4444</p>
            <p>(+506) 8434 4444</p>
          </div>
          <div className="footer-column">
            <h4>Ubicación</h4>
            <p>Costa Rica</p>
            <p>Alajuela, San Carlos</p>
          </div>
          <div className="footer-column">
            <h4>Contacto</h4>
            <p>info@usanjosecr.com</p>
            <p>
              <a href="https://www.usanjose.com" target="_blank" rel="noreferrer">
                www.usanjose.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/usanjosecr" target="_blank" rel="noreferrer" className="social-btn">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/usanjoseoficial/" target="_blank" rel="noreferrer" className="social-btn">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/school/universidad-de-san-jos%C3%A9/" target="_blank" rel="noreferrer" className="social-btn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a 
          href="https://grupogach.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-btn"
        >
          Grupo GACH
        </a>
        <p>© 2025 Universidad San José – Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
