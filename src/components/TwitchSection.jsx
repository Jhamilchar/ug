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
        <h2 className="name-twitch">TWITCH</h2>
        <ContentCards>
          <CardTwitch />
          <CardTwitch />
          <CardTwitch />
        </ContentCards>
      </LimitSection>
    </ContainerSection>
  );
}
