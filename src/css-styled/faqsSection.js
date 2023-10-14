import { styled } from "styled-components";

export const BackFaqs = styled.section`
  background-color: #242f3f;
  height: 30rem;
  @media screen and (max-width: 768px) {
    height: 90rem;
  }
  @media screen and (max-width: 450px) {
    height: 140rem;
  }
  color: white;
`;

export const FaqsLimit = styled.div`
  width: 78.93rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 450px) {
    width: 94rem;
  }
`;

export const Faqs = styled.div`
  width: 45%;
  margin: 3rem 0;
  & .name-faqs {
    font-family: "Ember Display";
    font-size: 1.3rem;
    color: #91bfff;
    margin-left: 4.5rem;
    margin-top: -2rem;
  }
  & .learn-faqs {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 2.1rem;
    margin-left: 4.5rem;
    margin-top: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 5rem 0;
    & .learn-faqs {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    font-size: 3rem;
    & .learn-faqs {
      font-size: 7.5rem;
    }
  }
`;

export const Accordion = styled.div`
  width: 55%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    margin-left: 4.5rem;
    gap: 8rem;
    width: 100%;
  }
`;