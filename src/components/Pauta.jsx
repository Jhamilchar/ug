import React, { useState } from "react";
import "../css/details.css";
import test from "../images/test.png";
import portada1 from "../images/portada1.png";
import portada12 from "../images/portada12.png";
import escaleras from "../images/escaleras.jpg";

const Details = () => {
  const [currentImage, setCurrentImage] = useState(test);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  const pautas = [
    { text: "Aprende algo nuevo cada 5 minutos", image: test },
    {
      text: "Rutas profesionales te guían de principiante a profesional",
      image: portada1,
    },
    { text: "Pon a prueba tu progreso de forma interactiva", image: portada12 },
    {
      text: "Inteligencia artificial y comunidad que responde tus dudas",
      image: escaleras,
    },
    // {
    //   text: "Descarga las clases a tu teléfono y aprende sin Internet",
    //   image: portada1,
    // },
  ];

  return (
    <div className="background-details">
      <div className="wrapper-details">
        <div className="content">
          <p className="new-details">
            <span className="autority">
              Somos la autoridad en <br />
            </span>
            escalar la educación en <br />
            línea en América Latina
          </p>
          <div className="pauta">
            {pautas.map((pauta, index) => (
              <p
                key={index}
                className="pauta-text"
                onMouseEnter={() => handleMouseEnter(pauta.image)}
              >
                {pauta.text}
              </p>
            ))}
          </div>
        </div>
        <div className="image-referencial">
          <img className="image-each" width={600} src={currentImage} alt="" />
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
            <div className="image-referencial-small">
              <img
                className="image-each-small"
                width={600}
                src={pauta.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
