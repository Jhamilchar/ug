import '../styles/nav-styles.css'
import '../styles/parallax.css'
import "animate.css";
import Nav from './Nav'
import Parallax from './parallax/Parallax'


export const Navigation = () => {


  return (
    <div className="container-navigation">
      <Nav />
      <Parallax />
      <div className="wraper-nav">
      </div>
    </div>
  );
}
