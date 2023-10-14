import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { PeopleSection } from "./components/peopleSection";
import { TwitchSection } from "./components/TwitchSection.jsx";
import { NewsSection } from "./components/NewsSection.jsx";
import { FaqsSection } from "./components/FaqsSection.jsx";
import { Footer } from "./components/Footer.jsx";
import Loader from "./components/Loader";
import "../src/index.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loader />
            ) : (
              <React.Fragment>
                <Navigation />
                <PeopleSection />
                <FaqsSection />
                {/* Otros componentes */}
                <Footer />
              </React.Fragment>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
