import React from "react";

export const FaqData = ({ question, answer, isOpen, toggleAnswer }) => {
  return (
    <li className="faq-item">
      <button onClick={toggleAnswer} className="faq-question">
        {question}
        <span className={`icon ${isOpen ? "open" : ""}`}>
          <svg style={{width: '10px', height: '16px', color: 'white', fill: 'currentColor'}} xmlns="https://www.w3.org/2000/svg" class="icon" viewBox="0 0 10 16">
            <path d="M2.05.78L.72 2.1 6.62 8l-5.9 5.9 1.33 1.32L9.28 8 2.05.78z"></path>
          </svg>
        </span>
      </button>
      <p className={`faq-answer ${isOpen ? "show" : ""}`}>{answer}</p>
    </li>
  );
};