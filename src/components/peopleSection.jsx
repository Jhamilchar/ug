import peopleRacer from '../images/deepracer.png'
import {
  DescriptionPeople,
  ImageDeep,
  Description,
  WraperPeople
} from "../css-styled/peopleComponent";


export const PeopleSection = () => {
  return (
    <DescriptionPeople>
      <WraperPeople>
        <DescriptionPeople>
          <Description>
            <h2 className="people__name">PEOPLE</h2>
            <h3 className="people__subtitle">
              Get inspired to innovate with AWS
            </h3>
            <p className="people__description">
              Join us for five days of learning, networking activities,
              announcements, and interactive events. Have fun, level up your
              skills, and make new connections.
            </p>
          </Description>
        </DescriptionPeople>
        <div>
          <ImageDeep src={peopleRacer} alt="" className="people-racer" />
        </div>
      </WraperPeople>
    </DescriptionPeople>
  );
}
