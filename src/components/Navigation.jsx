import '../styles/nav-styles.css'
import '../styles/parallax.css'
import "animate.css";
import Nav from './Nav'
import Parallax from './parallax/Parallax'


export const Navigation = () => {


  return (
    <section className="container-navigation">
      <Nav />
      <Parallax />
    </section>
  );
}
