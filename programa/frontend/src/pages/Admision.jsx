import React, { useEffect, useState } from "react";
import "../css/Admision.css";

export default function Admision() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const beneficios = [
    {
      id: 1,
      titulo: "Biblioteca física y virtual",
      imagen: "/src/assets/servicio1.png"
    },
    {
      id: 2,
      titulo: "Trámites de graduación, matrícula y financiamiento",
      imagen: "/src/assets/servicio2.png"
    },
    {
      id: 3,
      titulo: "Modernos laboratorios de Química",
      imagen: "/src/assets/servicio3.png"
    },
    {
      id: 4,
      titulo: "Laboratorios de Cómputo de última generación",
      imagen: "/src/assets/servicio4.png"
    }
  ];

  const financiamientos = [
    {
      id: 1,
      titulo: "CONAPE",
      imagen: "/src/assets/financiamiento1.png"
    },
    {
      id: 2,
      titulo: "Letra de cambio",
      imagen: "/src/assets/financiamiento2.png"
    }
  ];

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
          alt="Banner Header"
        />
      </div>

      <div className={`admision ${navbarScrolled ? "scrolled" : ""}`}>
        <section className="banner-admision">
          <div className="overlay">
            <h1 className="banner-title">Admisión</h1>
          </div>
        </section>

        <section className="seccion">
          <h2 className="seccion-title">Requisitos Generales</h2>
          <ul className="lista">
            <li>Original y copia del título de colegio.</li>
            <li>Original y copia de la cédula de identidad.</li>
          </ul>
        </section>


        {/* Estudiantes extranjeros */}
        <section className="seccion">
          <h2 className="seccion-title">Requisitos para Estudiantes Extranjeros</h2>

          <div className="subseccion">
            <h3 className="sub-title">Trámites en el país de origen</h3>
            <ul className="lista">
              <li>
                Presentar el título de bachillerato en el Consulado de Costa Rica,
                con los respectivos datos donde se realizaron los estudios.
              </li>
              <li>
                Si el título está en un idioma diferente al español, deberá
                acompañarse con traducción oficial.
              </li>
            </ul>
          </div>

          <div className="subseccion">
            <h3 className="sub-title">Trámites en Costa Rica</h3>
            <ul className="lista">
              <li>
                Presentar el título autenticado en el Ministerio de Relaciones
                Exteriores y Culto (Casa Amarilla) para su validación.
              </li>
              <li>
                Presentar los documentos en la Oficina de Desarrollo Educativo del
                Ministerio de Educación Pública para su trámite correspondiente.
              </li>
            </ul>
          </div>
        </section>

        {/* Convalidación */}
        <section className="seccion">
          <h2 className="seccion-title">¿Qué es la convalidación de materias?</h2>
          <p className="texto">
            La convalidación de materias es la solicitud de incorporación al
            expediente del alumno de una o más asignaturas con su correspondiente
            calificación, que se consideran equivalentes en contenido y carga
            lectiva con asignaturas superadas en otros estudios oficiales
            distintos.
          </p>

          <div className="subseccion">
            <h3 className="sub-title">Requisitos para la convalidación de materias</h3>
            <ul className="lista">
              <li>
                Certificación de materias aprobadas.
              </li>
              <li>
                Programas de cada una de las materias firmadas y selladas por la universidad de procedencia.
              </li>
              <li>
                Plan de estudios de la carrera.
              </li>
            </ul>
          </div>
        </section>

        <section className="seccion">
          <h2 className="seccion-title">¿Necesitas más información?</h2>
          <p className="texto">
            ¡Contáctanos! Estamos aquí para ayudarte con cualquier duda o consulta que tengas sobre el proceso de admisión.
          </p>
          <ul className="lista">
            <li>Teléfono: <a href="tel:+50684344444">(+506) 8434 4444</a></li>
            <li>WhatsApp: <a href="https://wa.me/50684344444" target="_blank" rel="noopener noreferrer">(+506) 8434 4444</a></li>
          </ul>
        </section>



        <section className="banner-beneficios">
          <div className="overlay">
            <h1 className="banner-title">¿Por qué elegir la U San José?</h1>
          </div>
        </section>

        <section className="beneficios-container">
          <div className="beneficios-grid">
            {beneficios.map((beneficio) => (
              <div key={beneficio.id} className="beneficio-card">
                <div className="beneficio-image-wrapper">
                  <img 
                    src={beneficio.imagen} 
                    alt={beneficio.titulo}
                    className="beneficio-image"
                  />
                  <div className="beneficio-overlay"></div>
                </div>
                
                <div className="beneficio-content">
                  <h3 className="beneficio-titulo">{beneficio.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="financiamiento-container">
          <h2 className="financiamiento-title">Opciones de Financiamiento</h2>
          <p className="financiamiento-text">
            En la Universidad de San José, entendemos que la educación es una inversión importante. Por eso, ofrecemos diversas opciones de financiamiento para ayudarte a alcanzar tus metas académicas sin preocupaciones financieras.
          </p>
          
          <section className="beneficios-container">
            <div className="beneficios-grid">
              {financiamientos.map((beneficio) => (
                <div key={beneficio.id} className="beneficio-card">
                  <div className="beneficio-image-wrapper">
                    <img 
                      src={beneficio.imagen} 
                      alt={beneficio.titulo}
                      className="beneficio-image"
                    />
                    <div className="beneficio-overlay"></div>
                  </div>
                  
                  <div className="beneficio-content">
                    <h3 className="beneficio-titulo">{beneficio.titulo}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
        </section>

      </div>
    </>
  );
}
