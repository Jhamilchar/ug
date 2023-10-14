import React, { useState, useEffect } from "react";
import "../styles/nav-styles.css";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Cuando todos los recursos estén cargados, oculta el loader
    };

    // Agregar un evento que se active cuando todos los recursos se hayan cargado
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad); // Limpia el evento al desmontar el componente
    };
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="ring"></div>
        <span>Loading...</span>
      </div>
    );
  } else {
    return null; // Oculta el loader cuando loading es false
  }
}

export default Loader;
