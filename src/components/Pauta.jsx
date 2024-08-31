import React, { useState } from "react";
import "../css/details.css";

const Details = () => {
  // Inicializar con la respuesta de la primera pregunta
  const [currentAnswer, setCurrentAnswer] = useState("Este espacio es para poder aprender de cloud computing AWS con charlas, talleres, videos cortos para no perder el enfoque de lo que queremos aprender.");
  const [showAnswer, setShowAnswer] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); // Índice activo inicialmente

  const handleMouseEnter = (answer, index) => {
    setCurrentAnswer(answer);
    setShowAnswer(true); // Muestra la caja con la animación
    setActiveIndex(index); // Actualiza el índice activo
  };

  const pautas = [
    { 
      text: "¿Qué es AWS para Todos?", 
      answer: "Este espacio es para poder aprender de cloud computing AWS con charlas, talleres, videos cortos para no perder el enfoque de lo que queremos aprender." 
    },
    {
      text: "¿Cual es el objetivo de aws para todos?",
      answer: "El objetivo es que toda persona que quiera entender, aprender, curiosear o incluso cambiar de carrera, incorpore conocimientos generales y específicos sobre la nube de Amazon Web Services (AWS) con el contenido que le brindaremos.",
    },
    { 
      text: "¿Como llegamos a varias persona?", 
      answer: "Nos tomaremos un tiempo para poder explicar palabras o términos que no son comunes para las personas que recien estén iniciando en el mundo de la tecnología." 
    },
    {
      text: "¿Como unirme?",
      answer: "Siguiendo nuestras pagina web y nuestras redes sociales asistiendo a nuestros evento presenciales y virtuales",
    },
  ];

  return (
    <div className="background-details">
      <div className="wrapper-details">
        <div className="content">
          <p className="new-details">
            <span className="autority">
            FAQs
            </span>
          </p>
          <div className="pauta">
            {pautas.map((pauta, index) => (
              <p
                key={index}
                className={`pauta-text ${activeIndex === index ? "active" : ""}`} // Agrega la clase "active" si el índice es el activo
                onMouseEnter={() => handleMouseEnter(pauta.answer, index)}
              >
                {pauta.text}
              </p>
            ))}
          </div>
        </div>
        <div className="text-referencial">
          {currentAnswer && (
            <div className={`answer-box ${showAnswer ? "show" : ""}`}>
              <p className="answer-text">{currentAnswer}</p>
            </div>
          )}
        </div>
      </div>
      <p className="new-details display">
          <span className="autority">Somos la autoridad en </span>
          escalar la educación en línea en América Latina
        </p>
      <div className="responsive-pautas">
        {pautas.map((pauta, index) => (
          <div key={index} className="pauta-item">
            <p className="pauta-text">{pauta.text}</p>
            <div className={`answer-box-small ${showAnswer ? "show" : ""}`}>
              <p className="answer-text-small">{pauta.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
