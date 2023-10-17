import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FaqsSection } from "./components/FaqsSection.jsx";
import About from './components/about/about'
import Loader from "./components/Loader";
import "../src/index.css";
import { Footer } from "./components/Footer";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Navigation />
              {/* <FaqsSection /> */}
              <About />
              <FaqsSection />
              <Footer />
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
