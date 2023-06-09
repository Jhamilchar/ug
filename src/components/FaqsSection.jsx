import {
  BackFaqs,
  FaqsLimit,
  Accordion,
  Faqs,
} from "../css-styled/faqsSection.js";
import { FaqData } from "../mini-components/FaqData.jsx";
import { dataFaq } from "../data/dataFaq.js";
export const FaqsSection = () => {
  return (
    <BackFaqs>
      <FaqsLimit>
        <Faqs>
          <h2 className="name-faqs">Faqs</h2>
          <h3 className="learn-faqs">Learn more about <br /> AWS UG PERU</h3>
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
