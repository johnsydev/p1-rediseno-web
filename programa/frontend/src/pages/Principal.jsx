import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import "../css/Principal.css";
import { FaChevronRight } from "react-icons/fa";

export default function Principal() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [activeSede, setActiveSede] = useState(null);
  const [hoverSede, setHoverSede] = useState(null);

  const slides = [
    { src: "/src/assets/banner1.jpg" },
    { src: "/src/assets/banner4.png" },
    { src: "/src/assets/banner3.png" },
  ];

  const carreras = [
    { id: 1, titulo: "Administración", imagen: "/src/assets/carrera1.jpg", link: "/carreras/administracion" },
    { id: 2, titulo: "Derecho", imagen: "/src/assets/carrera2.jpg", link: "/carreras/derecho" },
    { id: 3, titulo: "Educación", imagen: "/src/assets/carrera3.jpg", link: "/carreras/educacion" },
    { id: 4, titulo: "Nutrición", imagen: "/src/assets/carrera4.jpg", link: "/carreras/nutricion" }
  ];

  const sedes = [
    { id:"liberia",     nombre:"Liberia",     tel:"2666-1940",                 x:27,   y:18,  align:"left"   },
    { id:"nicoya",      nombre:"Nicoya",      tel:"2686-6002 / 2686-6606",     x:26,   y:34,  align:"left"   },
    { id:"puntarenas",  nombre:"Puntarenas",  tel:"2664-3838 / 6037-5287",     x:40.5, y:39,  align:"left"   },
    { id:"san-ramon",   nombre:"San Ramón",   tel:"2447-9000 / 2445-2322",     x:44,   y:35,  align:"left"   },
    { id:"alajuela",    nombre:"Alajuela",    tel:"4030-2748",                 x:48,   y:38,  align:"center" },
    { id:"san-carlos",  nombre:"San Carlos",  tel:"2460-4444 / 2460-2228",     x:47,   y:27,  align:"center" },
    { id:"guapiles",    nombre:"Guápiles",    tel:"2710-1544 / 2710-9075",     x:56,   y:33,  align:"right"  },
    { id:"sanJose",    nombre:"San José",    tel:"2248-2011",                 x:52,   y:39,  align:"center" },
  ];

  useEffect(() => {
    const handleScroll = () => setNavbarScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fondo-header">
        <img src="/src/assets/bannerheader.jpg" className="fondo-header-img" alt="Fondo Header" />
      </div>

      <div className={`principal ${navbarScrolled ? "navbar-scrolled" : ""}`}>
        
        <section className="full-bleed">
          <Carousel slides={slides} autoPlay interval={4000} />
        </section>

        <section className="carreras-destacadas">
          <div className="carreras-container">
            <h2 className="carreras-title">Nuestras Carreras</h2>
            <p className="carreras-subtitle">
              Descubre programas académicos de excelencia que impulsarán tu futuro profesional
            </p>
            <div className="carreras-grid">
              {carreras.map((c) => (
                <a key={c.id} className="cflip-card" href={c.link} aria-label={`Ir a ${c.titulo}`}>
                  <div className="cflip-inner">
                    <div className="cflip-face cflip-front">
                      <img src={c.imagen} alt={c.titulo} className="cflip-img" />
                      <div className="cflip-bar">
                        <h3 className="cflip-title">{c.titulo}</h3>
                      </div>
                    </div>
                    <div className="cflip-face cflip-back">
                      <h3 className="cflip-back-title">{c.titulo}</h3>
                      <p className="cflip-back-text">
                        Conocé más sobre {c.titulo}: plan de estudios, modalidad y proyección profesional.
                      </p>
                      <span className="cflip-cta">Ingresar <FaChevronRight className="cflip-icon" /></span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sedes-section">
          <div className="sedes-container">
            <div className="sedes-header">
              <h2 className="sedes-title">Nuestras Sedes</h2>
              <p className="sedes-subtitle">Presencia en las principales ciudades de Costa Rica</p>
            </div>

            <div
              className="sedes-map"
              style={{
                backgroundImage: "var(--map-overlay), url('/src/assets/mapa-cr2.png')",
              }}
            >
              <ul className="sedes-legend">
                <li className="legend-title">Sedes</li>
                {sedes.map((s) => (
                  <li
                    key={s.id}
                    data-target={s.id}
                    onMouseEnter={() => setHoverSede(s.id)}
                    onMouseLeave={() => setHoverSede(null)}
                    onClick={() => setActiveSede((prev) => (prev === s.id ? null : s.id))}
                  >
                    {s.nombre}
                  </li>
                ))}
              </ul>

              {sedes.map((s) => {
                const open = activeSede
                  ? activeSede === s.id
                  : hoverSede === s.id;

                return (
                  <button
                    key={s.id}
                    type="button"
                    className={`sede-location ${open ? "is-highlight" : ""}`}
                    style={{ "--x": `${s.x}%`, "--y": `${s.y}%` }}
                    data-id={s.id}
                    data-align={s.align}
                    aria-expanded={open}
                    aria-controls={`tooltip-${s.id}`}
                  >
                    <span className="sede-marker" aria-hidden="true" />
                    <div
                      id={`tooltip-${s.id}`}
                      className="sede-tooltip"
                      data-open={open ? "true" : "false"}
                      role="region"
                      aria-label={`Información de ${s.nombre}`}
                    >
                      <h3 className="tooltip-ciudad">{s.nombre}</h3>
                      <div className="tooltip-divider" />
                      <p className="tooltip-label">Teléfonos</p>
                      <p className="tooltip-telefono">{s.tel}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="sobre-nosotros">
          <div className="sobre-container">
            <h2 className="sobre-title">Sobre Nosotros</h2>
            <p className="sobre-subtitle">
              Conoce nuestra historia, valores y compromiso con la excelencia educativa
            </p>
            <div className="sobre-content">
              <div className="sobre-video-column">
                <div className="sobre-video">
                  <video controls loop autoPlay muted className="video-local">
                    <source src="/src/assets/video.mp4" type="video/mp4" />
                  </video>
                </div>
                <a href="/sobreNosotros" className="sobre-btn">Conocer Más</a>
              </div>
              <div className="sobre-text">
                <h3 className="sobre-heading">El Motor de Tus Sueños</h3>
                <p className="sobre-description">
                  La Universidad de San José es una institución de educación superior comprometida 
                  con la formación integral de profesionales capaces de enfrentar los retos del 
                  mundo actual.
                </p>
                <p className="sobre-description">
                  Con más de <strong>35 años de experiencia</strong>, de brindar al estudiantado y a 
                  la sociedad costarricense, carreras consideradas como no tradicionales, tales como: 
                  las facultades de Nutrición, Tecnología de Alimentos y Acuicultura; sin descuidar 
                  carreras históricas, como Derecho, Educación y Administración de Negocios, a partir 
                  de la herencia del proceso educativo producido dentro de las instalaciones del 
                  colegio académico.
                </p>
                <div className="sobre-stats">
                  <div className="stat-item"><div className="stat-number">32,000+</div><div className="stat-label">Estudiantes</div></div>
                  <div className="stat-item"><div className="stat-number">4+</div><div className="stat-label">Carreras</div></div>
                  <div className="stat-item"><div className="stat-number">7+</div><div className="stat-label">Sedes</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
