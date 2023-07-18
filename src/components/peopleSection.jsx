import peopleRacer from '../images/deepracer.png'
import {
  DescriptionPeople,
  ImageDeep,
  Description,
  WraperPeople,
  ImageDeep2,
} from "../css-styled/peopleComponent";
import "animate.css";




export const PeopleSection = () => {
  return (
    <DescriptionPeople>
      <WraperPeople>
        <DescriptionPeople>
          <Description className="animate__animated animate__slideInUp animate__delay-.8s">
            <h2 className="people__name">PEOPLE</h2>
            <p className="people__description">
              Join us for five days of learning, networking activities,
              announcements, and interactive events.
            </p>
            <p className="people__description">
              Join us for five days of learning, networking activities,
              announcements, and interactive events.
            </p>
            <p className="people__description">
              Join us for five days of learning, networking activities,
              announcements, and interactive events.
            </p>
          </Description>
        </DescriptionPeople>
        <div className="dual-img animate__animated animate__slideInUp animate__delay-.8s">
          <ImageDeep src={peopleRacer} alt="" className="people-racer" />
          <ImageDeep2 src={peopleRacer} alt="" className="people-racer" />
        </div>
      </WraperPeople>
    </DescriptionPeople>
  );
}
