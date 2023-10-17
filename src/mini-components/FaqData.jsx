import React from "react";

export const FaqData = ({ question, answer, isOpen, toggleAnswer }) => {
  return (
    <li className="faq-item">
      <button onClick={toggleAnswer} className="faq-question">
        {question}
        <span className={`icon ${isOpen ? "open" : ""}`}>+</span>
      </button>
      <p className={`faq-answer ${isOpen ? "show" : ""}`}>{answer}</p>
    </li>
  );
};
