import React, { useState } from "react";
import { FaqData } from "../mini-components/FaqData.jsx";
import { dataFaq } from "../data/dataFaq.js";
import "../components/faq/faq.css";

export const FaqsSection = () => {
  const [faqData, setFaqData] = useState(dataFaq);

  const toggleAnswer = (id) => {
    setFaqData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="faq-section">
      <div className="info-faqs">
        <h2 className="name-faqs">FAQS</h2>
        <h3 className="learn-faqs">Más información sobre AWS PARA TODOS</h3>
      </div>
      <ul className="faq-list">
        {faqData.map((item) => (
          <FaqData
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={item.isOpen}
            toggleAnswer={() => toggleAnswer(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};
