import { Bar } from '../mini-components/Bar'
import '../styles/nav-styles.css'
import logo from '../images/logo.png'

export const Navigation = () => {

  return (
    <nav>
        <div className='wraper-nav'>
          <div className="nav-top">
            <Bar />
            <div>
              <a href="#">V.2023 </a>
            </div>
          </div>
          <div className="nav-bottom">
            <div>
              <img className="logo-principal" src={logo} alt="asd" />
            </div>
            <div className="content-card">
              <h2 className="content-card__title">GET READY</h2>
              <h2 className="content-card__subtitle">
                Get ready for AWS UG PERU CONF 2023
              </h2>
              <p className='content-card__paragraphe'>
                Registration opens June 14 for the most-anticipated cloud industry
                event of the year.
              </p>
              <button className='card__button'>Subscribe</button>
            </div>
          </div>
        </div>
      </nav>
  );
}
