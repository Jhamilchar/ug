import React, { useState } from "react";
import "../css/details.css";

const Details = () => {
  const [currentAnswer, setCurrentAnswer] = useState(
    "Este espacio es para poder aprender de cloud computing AWS con charlas, talleres, videos cortos para no perder el enfoque de lo que queremos aprender."
  );
  const [showAnswer, setShowAnswer] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); // Índice activo inicialmente
  const [accordionIndex, setAccordionIndex] = useState(null); // Para controlar el acordeón en móvil

  const handleMouseEnter = (answer, index) => {
    setCurrentAnswer(answer);
    setShowAnswer(true);
    setActiveIndex(index);
  };

  const handleAccordionClick = (index) => {
    setAccordionIndex(accordionIndex === index ? null : index); // Abre o cierra el acordeón
  };

  const pautas = [
    {
      text: "¿Qué es AWS para Todos?",
      answer:
        "Este espacio es para poder aprender de cloud computing AWS con charlas, talleres, videos cortos para no perder el enfoque de lo que queremos aprender.",
    },
    {
      text: "¿Cual es el objetivo de AWS para Todos?",
      answer:
        "El objetivo es que toda persona que quiera entender, aprender, curiosear o incluso cambiar de carrera, incorpore conocimientos generales y específicos sobre la nube de Amazon Web Services (AWS) con el contenido que le brindaremos.",
    },
    {
      text: "¿Cómo llegamos a varias personas?",
      answer:
        "Nos tomaremos un tiempo para poder explicar palabras o términos que no son comunes para las personas que recién estén iniciando en el mundo de la tecnología.",
    },
    {
      text: "¿Cómo unirme?",
      answer:
        "Siguiendo nuestra página web y nuestras redes sociales, asistiendo a nuestros eventos presenciales y virtuales.",
    },
  ];

  return (
    <div className="background-details">
      <div className="wrapper-details">
        <div className="content">
          <p className="new-details">
            <span className="autority">FAQs</span>
          </p>
          {/* Versión de escritorio */}
          <div className="pauta desktop-only">
            {pautas.map((pauta, index) => (
              <p
                key={index}
                className={`pauta-text ${activeIndex === index ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(pauta.answer, index)}
              >
                {pauta.text}
              </p>
            ))}
          </div>
        </div>
        {/* Sección de respuestas para escritorio */}
        <div className="text-referencial desktop-only">
          {currentAnswer && (
            <div className={`answer-box ${showAnswer ? "show" : ""}`}>
              <p className="answer-text">{currentAnswer}</p>
            </div>
          )}
        </div>
      </div>
      {/* Versión móvil */}
      <div className="responsive-pautas mobile-only">
        {pautas.map((pauta, index) => (
          <div key={index} className={`pauta-item ${accordionIndex === index ? 'active' : ''}`}>
          <p className="pauta-text" onClick={() => handleAccordionClick(index)}>
            {pauta.text}
          </p>
          {accordionIndex === index && (
            <div className="answer-box-small show">
              <p className="answer-text-small">{pauta.answer}</p>
            </div>
          )}
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Details;
