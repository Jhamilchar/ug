import React, { useState } from "react";
import "../css/details.css";

const Details = () => {
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleMouseEnter = (answer) => {
    setCurrentAnswer(answer);
    setShowAnswer(true); // Muestra la caja con la animación
  };


  const pautas = [
    { 
      text: "¿Qué es AWS para Todos?", 
      answer: "AWS para Todos es una comunidad dedicada a promover la educación sobre Amazon Web Services en América Latina." 
    },
    {
      text: "¿Cómo puedo unirme a AWS para Todos?",
      answer: "Puedes unirte visitando nuestra página web y siguiendo las instrucciones en la sección 'Únete'.",
    },
    { 
      text: "¿Cuáles son los beneficios de unirse a la comunidad?", 
      answer: "Al unirte, accedes a recursos exclusivos, talleres, y una red de profesionales en la nube." 
    },
    {
      text: "¿Hay algún requisito para unirse a la comunidad?",
      answer: "No hay requisitos previos. La comunidad está abierta a todos los interesados en aprender sobre AWS.",
    },
  ];

  return (
    <div className="background-details">
      <div className="wrapper-details">
        <div className="content">
          <p className="new-details">
            <span className="autority">
            Impulsando la Educación <br />
            </span>
            en Línea <br />
            para Todos
          </p>
          <div className="pauta">
            {pautas.map((pauta, index) => (
              <p
                key={index}
                className="pauta-text"
                onMouseEnter={() => handleMouseEnter(pauta.answer)}
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
