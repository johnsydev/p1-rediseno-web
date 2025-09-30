import { useEffect, useState, useRef } from "react";
import "./carousel.css";

export default function Carousel({ slides = [], autoPlay = true, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    timerRef.current = setInterval(() => goTo(index + 1), interval);
    return () => clearInterval(timerRef.current);
  }, [index, autoPlay, interval, slides.length]);

  if (!slides.length) return <div>No hay diapositivas para mostrar.</div>;

  return (
    <div className="carousel" role="region" aria-label="Carrusel">
      <div className="carousel-viewport">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`carousel-slide ${i === index ? "active" : ""}`}
            style={{ transform: `translateX(${(i - index) * 100}%)` }}
            aria-hidden={i !== index}
          >
            <img src={s.src} alt={s.alt ?? `slide-${i + 1}`} />
            {s.caption && <div className="carousel-caption">{s.caption}</div>}
          </div>
        ))}
      </div>

      <button
        className="carousel-btn prev"
        onClick={() => { clearInterval(timerRef.current); prev(); }}
        aria-label="Anterior"
      >‹</button>

      <button
        className="carousel-btn next"
        onClick={() => { clearInterval(timerRef.current); next(); }}
        aria-label="Siguiente"
      >›</button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => { clearInterval(timerRef.current); goTo(i); }}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}
