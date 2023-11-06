import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

import "../about/about.css";
import computer from "../../images/portada1.png";
import manComputer from "../../images/portada.png";
import context from "../../images/cloud.webp";

const items = [
  {
    id: 1,
    title: "Iniciación a AWS",
    img: computer,
    desc:
      "¿Eres nuevo en AWS? Descubre los fundamentos de Amazon Web Services y da tus primeros pasos en la nube. Nuestra comunidad te guiará en este emocionante viaje de aprendizaje.",
  },
  {
    id: 2,
    title: "Charlas Vocacionales",
    img: manComputer,
    desc:
      " Explora el mundo tecnológico a través de nuestras charlas vocacionales. Aprende de expertos y descubre cómo iniciar o fortalecer tu carrera en tecnología. Un espacio perfecto para inspirarte.",
  },
  {
    id: 3,
    title: "Desarrollo Profesional en AWS",
    img: context,
    desc:
      "¿Quieres avanzar en tu carrera en AWS? Encuentra orientación y recursos para trazar el camino perfecto y alcanzar tus metas profesionales en la nube.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = scrollYProgress;

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img className="img" src={item.img} alt="" />
          </div>
          <motion.div
            className="textContainer"
            style={{ y: y }}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const [disableMotion, setDisableMotion] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDisableMotion(true);
      } else {
        setDisableMotion(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`about ${disableMotion ? "disable-motion" : ""}`}>
      <div className="progress">
        <h1 className="explore">AWS explora</h1>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default About;
