import portada from '../images/portada (1).png'
import portada2 from '../images/portada1.png'
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
            <h2 className="people__name">Comunidad</h2>
            <p className="people__description">
              Una comunidad dedicada a abrir las puertas del vasto universo de Amazon Web Services (AWS) para todos, sin importar tu formación previa, carrera profesional o nivel de experiencia en tecnología. Ya seas estudiante, profesional de una carrera no relacionada o simplemente un curioso tecnológico, aquí encontrarás un espacio para aprender, explorar y crecer. Ademas ofrecemos charlas vocacionales para entender mejor el mundo tecnológico y te ayudamos a trazar el camino perfecto para iniciar o fortalecer tu carrera en AWS. Únete a nosotros en este emocionante viaje hacia la nube y descubre todo lo que la tecnología tiene para ofrecerte.
            </p>
            {/* <p className="people__description">
              Join us for five days of learning, networking activities,
              announcements, and interactive events.
            </p>
            <p className="people__description">
              Join us for five days of learning, networking activities,
              announcements, and interactive events.
            </p> */}
          </Description>
        </DescriptionPeople>
        <div className="dual-img animate__animated animate__slideInUp animate__delay-.8s">
          <ImageDeep src={portada} alt="" className="people-racer" />
          <ImageDeep2 src={portada2} alt="" className="people-racer" />
        </div>
      </WraperPeople>
    </DescriptionPeople>
  );
}
