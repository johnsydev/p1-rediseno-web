import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logoU from "../assets/logo-usanjose2.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  const navItems = document.querySelectorAll('.nav-item');
  let openSubmenu = null; // guarda el submenu actualmente abierto

  navItems.forEach(item => {
    const submenu = item.querySelector('.submenu');

    item.addEventListener('mouseenter', () => {
      // cerrar el submenu abierto anterior si no es este
      if (openSubmenu && openSubmenu !== submenu) {
        openSubmenu.style.opacity = '0';
        openSubmenu.style.visibility = 'hidden';
        openSubmenu.style.display = 'none';
      }

      // abrir este submenu
      if (submenu) {
        submenu.style.display = 'block';
        submenu.style.opacity = '1';
        submenu.style.visibility = 'visible';
        openSubmenu = submenu;
      }
    });

    item.addEventListener('mouseleave', () => {
      if (submenu) {
        setTimeout(() => {
          submenu.style.opacity = '0';
          submenu.style.visibility = 'hidden';
          submenu.style.display = 'none';

          // limpiar referencia si es el mismo submenu
          if (openSubmenu === submenu) {
            openSubmenu = null;
          }
        }, 200); // retardo pequeño para bajar lento
      }
    });
  });


  const subItems = document.querySelectorAll('.nav-subitem');

  subItems.forEach(item => {
    let timer;
    const subsubmenu = item.querySelector('.subsubmenu');

    item.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      if(subsubmenu){
        subsubmenu.style.display = 'block';
        subsubmenu.style.opacity = '1';
        subsubmenu.style.visibility = 'visible';
      }
    });

    item.addEventListener('mouseleave', () => {
      if(subsubmenu){
        timer = setTimeout(() => {
          subsubmenu.style.display = 'none';
          subsubmenu.style.opacity = '0';
          subsubmenu.style.visibility = 'hidden';
        }, 200); // 200ms de retardo antes de desaparecer
      }
    });
  });

  const links = [
    { name: "Inicio", href: "/" },
    { 
      name: "Carreras", 
      href: "#",
      subLinks: [
        { name: "Administración de empresas", href: "/carreras/administracion-de-empresas" },
        { name: "Derecho", href: "/carreras/derecho", },
        { name: "Nutrición", href: "/carreras/nutricion" },
        { 
          name: "Educación", 
          href: "#",
          subSubLinks: [
            { name: "Educación para primaria", href: "/carreras/educacion-para-primaria" },
            { name: "Educación para secundaria", href: "/carreras/educacion-para-secundaria" },
            { name: "Licenciatura docencia", href: "/carreras/licenciatura-docencia" },
            { name: "Maestria en educacion", href: "/carreras/maestria-en-educacion" },
          ]
        },
      ]
    },
    { 
      name: "Estudiantes", 
      href: "#",
      subLinks: [
        { name: "Manuales y ayuda", href: "/estudiantes/manuales" },
        { name: "Matrícula", href: "/estudiantes/matricula" },
        { name: "Plataforma académica", href: "https://virtualusj.net/login/index.php" },
        { name: "Ver horarios", href: "/estudiantes/horarios" },
        { name: "Tarifas Conesup", href: "/tarifas-conesup-usj" },
        { name: "App Acamsys", href: "https://play.google.com/store/apps/details?id=com.acamsys.student_app.usj" },
      ]
    },
    { name: "Admisión", href: "/admision" },
    { name: "La U", href: "/sobreNosotros" },
    { name: "Contacto", href: "https://form.jotform.com/221304208251037" },
  ];

  // Manejar scroll
  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    // Agregar listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      ref={navbarRef}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
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