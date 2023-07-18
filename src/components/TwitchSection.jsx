import {
  ContainerSection,
  LimitSection,
  ContentCards,
} from "../css-styled/twitchComponent.js";
import { CardTwitch } from "../mini-components/CardTwitch.jsx";


export const TwitchSection = () => {
  return (
    <ContainerSection>
      <LimitSection>
        <h2 className="animate__animated animate__slideInUp animate__delay-.8s name-twitch">
          EVENTOS ANTERIORES
        </h2>
        <ContentCards className="animate__animated animate__slideInUp animate__delay-.8s">
          <CardTwitch />
          <CardTwitch />
          <CardTwitch />
        </ContentCards>
      </LimitSection>
    </ContainerSection>
  );
}
