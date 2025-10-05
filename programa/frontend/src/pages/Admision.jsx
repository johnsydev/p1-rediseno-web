import React, { useEffect, useState } from "react";
import "../css/Admision.css";

export default function Admision() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const beneficios = [
    {
      id: 1,
      titulo: "Biblioteca física y virtual",
      descripcion: "Todas nuestras sedes, cuentan con una biblioteca debidamente equipada y actualizada.\n\nNuestra plataforma en línea, permite tener al alcance más de 1.800 publicaciones, con la facilidad de observar el contenido en línea o descargar las publicaciones en dispositivos móviles y de escritorio.",
      imagen: "/src/assets/servicio1.png"
    },
    {
      id: 2,
      titulo: "Trámites de graduación, matrícula y financiamiento",
      descripcion: "• Certificaciones\n– Trabajo comunal.\n– Convalidaciones.\n– Materias aprobadas.\n– Incorporación a los colegios profesionales.\n\n• Constancias\n– Materias aprobadas.\n– Estudiante activo.\n– Trámites CONAPE y FONABE.\n– Para CCSS.",
      imagen: "/src/assets/servicio2.png"
    },
    {
      id: 3,
      titulo: "Modernos laboratorios de Química",
      descripcion: "Tanto nuestra sede Central en Ciudad Quesada, como la sede de Liberia, cuentan con la facilidad de modernos laboratorios de química y alimentos, para el desarrollo de las lecciones correspondientes a la Facultad de Ciencias de la Salud, en las carreras de Nutrición y Tecnología de Alimentos.",
      imagen: "/src/assets/servicio3.png"
    },
    {
      id: 4,
      titulo: "Laboratorios de Cómputo de última generación",
      descripcion: "Nuestras sedes cuentan con modernos laboratorios de cómputo, para el ejercicio de las lecciones que requieran investigación y ejecución de conocimientos en internet o prácticas virtuales, con máquinas de alta tecnología, con pantallas táctiles y con el software de actualización más reciente.",
      imagen: "/src/assets/servicio4.png"
    }
  ];

  const financiamientos = [
    {
      id: 1,
      titulo: "CONAPE",
      descripcion: "CONAPE, es un servicio de apoyo económico, destinado a financiar estudios de educación superior y técnica, con criterio de solidaridad social, que se caracteriza por otorgar préstamos a la tasa de interés preferencial. El beneficio más importante, es que el inicio del pago del préstamo se hace una vez que concluya los estudios; de esta manera, se le da crédito a un estudiante y se le cobra a un profesional.\n\nLa Institución le brinda una variedad de beneficios en los préstamos que  ofrece, para que inicie, continúe o finalice una carrera, siendo una de las mejores opciones del mercado, con una baja tasa de interés; se le otorga el préstamo cuando estudia y lo paga cuando haya concluído los estudios.",
      imagen: "/src/assets/financiamiento1.png"
    },
    {
      id: 2,
      titulo: "Letra de cambio",
      descripcion: "Letra de cambio: Se cancela el monto de la matrícula, más el 25% de las materias por matricular; el 75% del monto restante,  se divide entre tres tractos mensuales. Se aplica para bachillerato y licenciatura.\n\nLetra de cambio para Maestría y Postgrado: Si  se desea cancelar  la totalidad de la carrera en un solo pago de contado, no se incluye en el monto a cancelar de las matrículas de la carrera.\nSe necesita:\n– Original y fotocopia de la cédula de identidad.\n– Fotocopia de recibo de luz, agua o teléfono de su residencia.\n– Original y fotocopia de la orden patronal al día, con un salario reportado mayor a ¢200.000 y con reporte de salario anterior y trasanterior o certificación de ingresos emitida por un Contador Público Autorizado.\nSi el estudiante es menor de edad o no posee alguno de los requisitos anteriores, debe presentarse con un fiador que aporte los documentos requeridos.",
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
              <div key={beneficio.id} className="bflip-card">
                <div className="bflip-inner">
                  {/* Frente */}
                  <div className="bflip-face bflip-front">
                    <img 
                      src={beneficio.imagen} 
                      alt={beneficio.titulo}
                      className="bflip-img"
                    />
                    <div className="bflip-bar">
                      <h3 className="bflip-title">{beneficio.titulo}</h3>
                    </div>
                  </div>

                  {/* Dorso */}
                <div className="bflip-face bflip-back">
                  <div className="bflip-back-text">
                    {beneficio.descripcion && (
                      <ul>
                        {beneficio.descripcion.split("\n").map((line, index) => {
                          const trimmed = line.trim();
                          if (trimmed.startsWith("•")) {
                            return <li key={index} className="bullet-main">{trimmed.slice(1).trim()}</li>;
                          } else if (trimmed.startsWith("–")) {
                            return <li key={index} className="bullet-sub">{trimmed.slice(1).trim()}</li>;
                          } else {
                            return <li key={index} className="bullet-other">{trimmed}</li>;
                          }
                        })}
                      </ul>
                    )}
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="financiamiento-container">
          <h2 className="financiamiento-title">Opciones de Financiamiento</h2>
          <p className="financiamiento-text">
            En la Universidad de San José, entendemos que la educación es una inversión importante. 
            Por eso, ofrecemos diversas opciones de financiamiento para ayudarte a alcanzar tus metas 
            académicas sin preocupaciones financieras.
          </p>
          
          <section className="financiamiento-grid">
            {financiamientos.map((item) => (
              <div 
                key={item.id} 
                className="fcard"
                onClick={() => setSelectedItem(item)} // abre modal
              >
                <div className="finner">
                  {/* Frente */}
                  <div className="fface ffront">
                    <div className="fimg-wrapper">
                      <img 
                        src={item.imagen} 
                        alt={item.titulo}
                        className="fimg"
                      />
                      <div className="foverlay"></div>
                      <div className="fflip-bar">
                        <h3 className="ftitle">{item.titulo}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Dorso (información corta + botón "Más info") */}
                  <div className="fface fback">
                    <h3 className="fback-title">{item.titulo}</h3>
                    {item.descripcion && (
                      <p className="fback-text">
                        {item.descripcion.length > 100 
                          ? item.descripcion.substring(0, 161) + "..." 
                          : item.descripcion
                        }
                      </p>
                    )}
                    <button 
                      className="btn-mas-info"
                      onClick={(e) => {
                        e.stopPropagation(); // evita que se abra otro modal
                        setSelectedItem(item);
                      }}
                    >
                      Más información
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Modal */}
            {selectedItem && (
              <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                  <h2>{selectedItem.titulo}</h2>
                  <p style={{ whiteSpace: "pre-line" }}>{selectedItem.descripcion}</p>
                  <button className="btn-cerrar" onClick={() => setSelectedItem(null)}>
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </section>

        </section>
      </div>
    </>
  );
}
