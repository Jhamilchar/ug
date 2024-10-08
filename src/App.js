import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FaqsSection } from "./components/FaqsSection.jsx";
import { Blogs } from "./components/Blogs.jsx";
import Parameters from "./components/Parameters.jsx";
import Metric from "./components/Metric.jsx";
import "../src/index.css";
import "../src/styles/font.css";
import { Footer } from "./components/Footer";
import { About } from "./components/About.jsx";
import Pauta from "./components/Pauta.jsx";
// import Pauta2 from "./components/Pauta2.jsx";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Navigation />
              <Parameters />
              <About />
              <Metric />
              <Blogs />
              <Pauta />
              {/* <Pauta2 /> */}
              {/* <FaqsSection /> */}
              <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
