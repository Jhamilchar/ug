import {
  BackFaqs,
  FaqsLimit,
  Accordion,
  Faqs,
} from "../css-styled/faqsSection.js";
import { FaqData } from "../mini-components/FaqData.jsx";
import { dataFaq } from "../data/dataFaq.js";
import '../styles/nav-styles.css'
export const FaqsSection = () => {

  return (
    <BackFaqs >
      <FaqsLimit>
        <Faqs>
          <h2 className="name-faqs">FAQS</h2>
          <h3 className="learn-faqs">Más información sobre <br /> AWS PARA TODOS</h3>
        </Faqs>
        <Accordion>
          {dataFaq.map((item) => (
            <FaqData
                key={item.id}
                titlee={item.question}
                descriptionn={item.answer} />
          ))}
        </Accordion>
      </FaqsLimit>
    </BackFaqs>
  );
}
