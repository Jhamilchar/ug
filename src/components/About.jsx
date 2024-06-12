import '../styles/about-section.css'
import fade from '../images/fade.png'
import {
  Element
} from "react-scroll";

import { useRef } from 'react';
import { useEffect } from 'react';

export const About = () => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const handleMouseMove = (evt) => {
      const { clientWidth: width, clientHeight: height } = el;

      const { layerX, layerY } = evt;

      const yRotation = (layerX - width / 2) / width * 20;
      const xRotation = (layerY - height / 2) / height * 20;

      const transformString = `
        perspective(500px)
        scale(0.92)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
      `;

      el.style.transform = transformString;
    };

    const handleMouseOut = () => {
      el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
      `;
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseout", handleMouseOut);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <Element name="section-about" className="about-wrapper">
      <div className="about-container">
      <div>

      <img className='fade-1' src={fade} alt="" />

        <div className='top-container'>
            <p className="title-about">
              AWS explora 
            </p>
        </div>
        <div className='bot-container'>
          <div className='position-description'>
            <p className='about-description'>AWS para Todos es una comunidad dedicada a enseñar y promover los beneficios de Amazon Web Services (AWS). Facilitamos el aprendizaje de AWS para personas de todos los niveles mediante la compartición de recursos y conocimientos. Nuestro espacio inclusivo permite a los miembros explorar ventajas como la escalabilidad, flexibilidad e innovación tecnológica.</p>
          </div>
          <button className='button-generic'>
            <a target='blank' rel="noopener" href="https://www.meetup.com/es-ES/aws-para-todos/">
              Únete ;)
            </a>
          </button>
        </div>
      </div>

      </div>
    </Element>
  )
}
