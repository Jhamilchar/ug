import '../styles/nav-styles.css'
import videoFile from '../video/background-principal.mp4'
import { useEffect } from 'react'
import "animate.css";
import { NavMiddle } from './NavMiddle'
import Nav from './Nav'


export const Navigation = () => {


  useEffect(() => {
    const video = document.querySelector("video");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || window.pageYOffset;
      video.style.transform = `translate3d(0, ${scrollY * 0.5}px, 0)`;
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="container-navigation">
    <Nav />
      <video autoPlay loop muted>
        <source src={videoFile} />
      </video>
      <div className="wraper-nav">
        <NavMiddle />
      </div>
    </div>
  );
}
