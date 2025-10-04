import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import "../css/Principal.css";

export default function Principal() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const slides = [
    { src: "/src/assets/banner1.jpg"},
    { src: "/src/assets/banner4.png"},
    { src: "/src/assets/banner3.png"},
  ];

  const carreras = [
    {
      id: 1,
      titulo: "Administración",
      imagen: "/src/assets/carrera1.jpg",
      link: "/carreras/administracion"
    },
    {
      id: 2,
      titulo: "Derecho",
      imagen: "/src/assets/carrera2.jpg",
      link: "/carreras/derecho"
    },
    {
      id: 3,
      titulo: "Educación",
      imagen: "/src/assets/carrera3.jpg",
      link: "/carreras/educacion"
    },
    {
      id: 4,
      titulo: "Ingeniería",
      imagen: "/src/assets/carrera4.jpg",
      link: "/carreras/ingenieria"
    }
  ];

  // Detectar scroll para ajustar espaciado
  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fondo-header">
        <img 
          src="/src/assets/bannerheader.jpg"
          className="fondo-header-img"
        />
      </div>
      <div className={`principal ${navbarScrolled ? "navbar-scrolled" : ""}`}>
        {/* Sección del carrusel */}
        <section className="full-bleed">
          <Carousel slides={slides} autoPlay interval={4000} />
        </section>

        {/* Sección de Carreras Destacadas */}
        <section className="carreras-destacadas">
          <div className="carreras-container">
            <h2 className="carreras-title">Nuestras Carreras</h2>
            <p className="carreras-subtitle">
              Descubre programas académicos de excelencia que impulsarán tu futuro profesional
            </p>

            <div className="carreras-grid">
              {carreras.map((carrera) => (
                <a
                  key={carrera.id}
                  className="cflip-card"
                  href={carrera.link}
                  aria-label={`Ir a ${carrera.titulo}`}
                >
                  <div className="cflip-inner">
                    {/* Frente */}
                    <div className="cflip-face cflip-front">
                      <img src={carrera.imagen} alt={carrera.titulo} className="cflip-img" />
                      <div className="cflip-bar">
                        <h3 className="cflip-title">{carrera.titulo}</h3>
                      </div>
                    </div>

                    {/* Dorso (fondo sólido + texto) */}
                    <div className="cflip-face cflip-back">
                      <h3 className="cflip-back-title">{carrera.titulo}</h3>
                      <p className="cflip-back-text">
                        Conocé más sobre {carrera.titulo}: plan de estudios, modalidad y proyección profesional.
                      </p>
                      <span className="cflip-cta">Ingresar →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Sedes - Timeline Horizontal */}
        <section className="sedes-timeline">
          <div className="sedes-container">
            <h2 className="sedes-title">Nuestras Sedes</h2>
            <p className="sedes-subtitle">
              Presencia en las principales ciudades de Costa Rica
            </p>

            <div className="timeline-wrapper">
              <div className="timeline-line"></div>

              <div className="timeline-items">

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="sede-nombre">PUNTARENAS</h3>
                    <p className="sede-label">Teléfonos</p>
                    <p className="sede-telefono">2664-3838 / 6037-5287</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="sede-nombre">ALAJUELA</h3>
                    <p className="sede-label">Teléfonos</p>
                    <p className="sede-telefono">4030-2748</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="sede-nombre">SAN CARLOS</h3>
                    <p className="sede-label">Teléfonos</p>
                    <p className="sede-telefono">2460-4444 / 2460-2228</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="sede-nombre">SAN RAMÓN</h3>
                    <p className="sede-label">Teléfonos</p>
                    <p className="sede-telefono">2447-9000 / 2445-2322</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="sede-nombre">LIBERIA</h3>
                    <p className="sede-label">Teléfonos</p>
                    <p className="sede-telefono">2666-1940</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="sede-nombre">GUÁPILES</h3>
                    <p className="sede-label">Teléfonos</p>
                    <p className="sede-telefono">2710-1544 / 2710-9075</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="sede-nombre">NICOYA</h3>
                    <p className="sede-label">Teléfonos</p>
                    <p className="sede-telefono">2686-6002 / 2686-6606</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="sede-nombre">RECTORÍA</h3>
                    <p className="sede-label">Teléfonos</p>
                    <p className="sede-telefono">2248-2011</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Sección Sobre Nosotros con Video */}
        <section className="sobre-nosotros">
          <div className="sobre-container">
            <h2 className="sobre-title">Sobre Nosotros</h2>
            <p className="sobre-subtitle">
              Conoce nuestra historia, valores y compromiso con la excelencia educativa
            </p>

            <div className="sobre-content">
              <div className="sobre-video-column">
                <div className="sobre-video">
                  <video 
                    controls
                    loop
                    autoPlay
                    muted
                    className="video-local"
                  >
                    <source src="/src/assets/video.mp4" type="video/mp4" />
                  </video>
                </div>
                
                <a href="/sobreNosotros" className="sobre-btn">
                  Conocer Más
                </a>
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
                  <div className="stat-item">
                    <div className="stat-number">32,000+</div>
                    <div className="stat-label">Estudiantes</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">4+</div>
                    <div className="stat-label">Carreras</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">7+</div>
                    <div className="stat-label">Sedes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </> 
  );
}