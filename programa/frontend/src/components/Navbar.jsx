import { useState } from "react";
import "./Navbar.css";
import logoU from "../assets/logo-usanjose2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "/" },
    { 
      name: "Carreras", 
      href: "/carreras",
      subLinks: [
        { name: "Administración de empresas", href: "/carreras/administracion-de-empresas" },
        { name: "Derecho", href: "/carreras/derecho", },
        { name: "Nutrición", href: "/carreras/nutricion" },
        { 
          name: "Educación", 
          href: "/carreras/educacion",
          subSubLinks: [
            { name: "Educación para primaria", href: "/carreras/educacion-para-primaria" },
            { name: "Educación para secundaria", href: "/carreras/educacion-para-secundaria" },
            { name: "Licenciatura docencia", href: "/carreras/licenciatura-docencia" },
            { name: "Maestria en educacion", href: "/carreras/maestria-en-educacion" },
          ]
        },
      ]
    },
    { name: "Sedes", href: "/sedes" },
    { 
      name: "Estudiantes", 
      href: "/estudiantes",
      subLinks: [
        { name: "Manuales y ayuda", href: "/estudiantes/virtual" },
        { name: "Matrícula", href: "/estudiantes/matricula" },
        { name: "Plataforma académica", href: "/estudiantes/matricula" },
      ]
    },
    { name: "Admisión", href: "/admision" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="logo">
          <img src={logoU} alt="Logo Universidad de San José" className="logo-img" />
        </a>

        {/* Links desktop */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.name} className="nav-item">
              <a href={link.href}>{link.name}</a>

              {/* Submenú */}
              {link.subLinks && (
                <ul className="submenu">
                  {link.subLinks.map((sub) => (
                  <li key={sub.name} className="nav-subitem">
                    <a href={sub.href}>{sub.name}</a>
                    {sub.subSubLinks && (
                      <ul className="subsubmenu">
                        {sub.subSubLinks.map((subsub) => (
                          <li key={subsub.name}>
                            <a href={subsub.href}>{subsub.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <div className={`bar ${open ? "open" : ""}`}></div>
          <div className={`bar ${open ? "open" : ""}`}></div>
          <div className={`bar ${open ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
