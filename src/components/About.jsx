import '../styles/about-section.css'
import image from '../images/window-special.jpg'
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

  const itemsAbout = [
    {
      img: 'url_de_la_imagen',
      title: 'Título del elemento',
      text: 'Texto descriptivo del elemento.'
    },
    {
      img: 'url_de_la_imagen',
      title: 'Título del elemento',
      text: 'Texto descriptivo del elemento.'
    },
    {
      img: 'url_de_la_imagen',
      title: 'Título del elemento',
      text: 'Texto descriptivo del elemento.'
    },
  ]

  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className='top-container'>
            <p className="title-about">
              AWS explora 
            </p>
        </div>
        <div className='bot-container'>
          <div className="contenedor-3d">
            <img
                id="imagen-3d"
                ref={elRef}
                src={image}
            />
          </div>
          {/* {itemsAbout.map((item, index) => (
            <div key={index} className="about-item">
              <img src={item.img} alt={`Imagen ${index}`} />
              <p className="item-title">{item.title}</p>
              <p className="item-text">{item.text}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}
