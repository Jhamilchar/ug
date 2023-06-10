import styled from "styled-components";

export const DescriptionPeople = styled.section`
  background-color: #000000;
  display: flex;
`;

export const WraperPeople = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 78.93rem;
`;

export const ImageDeep = styled.img`
  width: 43.75rem;
  height: 26rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 4.5rem;
  gap: 2.8rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  & h2 {
    color: #7200e3;
    font-size: 0.9rem;
    letter-spacing: 0.2rem;
  }
  & h3 {
    color: white;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }
  & p {
    color: white;
    font-size: 1.1rem;
    font-family: "Lato";
    text-align: justify;
  }
`;