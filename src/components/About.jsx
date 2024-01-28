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
      <img className='fade-1' src={fade} alt="" />

        <div className='top-container'>
            <p className="title-about">
              AWS explora 
            </p>
        </div>
        <div className='bot-container'>
          <div className='position-description'>
            <p className='about-description'>Maybe you’re needing to blow off some serious steam with an all-night party, or wanting to impress someone special with a venue that’s a little more discreet and sophisticated. Either way, if you’re looking to dance the night away, check out one of the lively music venues, dance halls, and raucous haunts.</p>
          </div>
          <button className='button-generic'>
            <a target='_blank' rel="noopener" href="https://www.meetup.com/es-ES/aws-para-todos/">
              Únete ;)
            </a>
          </button>
        </div>
      </div>
    </Element>
  )
}
