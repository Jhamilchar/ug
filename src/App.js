import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { PeopleSection } from "./components/peopleSection";
import { TwitchSection } from "./components/TwitchSection.jsx";
import { NewsSection } from "./components/NewsSection.jsx";
import { FaqsSection } from "./components/FaqsSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { Suscribete } from "./components/Suscribete.jsx";
import "../src/index.css";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Navigation />
              <PeopleSection />
              {/* <AwsSection /> */}
              {/* <MapPeruAws /> */}
              <TwitchSection />
              <NewsSection />
              <FaqsSection />
              <Footer />
            </React.Fragment>
          }
        />
        <Route path="/suscribete" element={<Suscribete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
