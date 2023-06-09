import styled from "styled-components";

export const DescriptionPeople = styled.section`
  background-color: #000000;
  display: flex;
`;

export const WraperPeople = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 120rem;
`;

export const ImageDeep = styled.img`
    width: 900px;
    height: 700px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 6rem;
  gap: 3rem;
  font-family: "Ember Mono";

  & h2 {
    color: #7200e3;
    font-size: 1.2rem;
    letter-spacing: 0.3rem;
  }
  & h3 {
    color: white;
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }
  & p {
    color: white;
    font-size: 1.3rem;
    font-family: 'Lato';
    text-align: justify;
  }
`;