import '../styles/about-section.css'
import image from '../images/stars.jpg'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const About = () => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const imagenRef = useRef();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = imagenRef.current.getBoundingClientRect();

    const rotateY = ((clientX - left) / width - 0.5) * 20; // Ajusta según tus necesidades
    const rotateX = -((clientY - top) / height - 0.5) * 20; // Ajusta según tus necesidades

    setTransform({ rotateX, rotateY, scale: 1.1 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  useEffect(() => {
    const imagen = imagenRef.current;
    imagen.addEventListener('mousemove', handleMouseMove);
    imagen.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      imagen.removeEventListener('mousemove', handleMouseMove);
      imagen.removeEventListener('mouseleave', handleMouseLeave);
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
        ref={imagenRef}
        src={image} // Reemplaza con la ruta real de tu imagen
        alt="Descripción de la imagen"
        className="imagen-3d"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        }}
      />
    </div>
        {itemsAbout.map((item, index) => (
          <div key={index} className="about-item">
            <img src={item.img} alt={`Imagen ${index}`} />
            <p className="item-title">{item.title}</p>
            <p className="item-text">{item.text}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
