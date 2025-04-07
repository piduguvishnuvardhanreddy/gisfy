
import './index.css';
import logo from '../../images/logo.png';
import logoGoverment from '../../images/logo 1.png';
import Silder1 from "../../images/Slider 1.jpg";
import Slider2 from "../../images/Slider 1.jpg";
import FeaturesIcon from "../../images/Reports.png";
import AboutIcon from "../../images/About Us.png";
import CallIcon from "../../images/CALL.png";
import VectorIcon from "../../images/Vector.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Header = () => {
  return (
    <>
    <div className='fixed'>
      <header className="header">
        <div className="header-top">
          <div className="logo-section">
            <img src={logo} alt="AP DigiVerify" className="logo" />
          </div>
          <div className="govt-info">
          <img src={logoGoverment} alt="AP DigiVerify" className="logo" />
          </div>
        </div>
        <nav className="navbar">
              <div className='navIcon'>
                <img src={FeaturesIcon} alt='Features' className='iconSize' />
                <span>Features</span>
              </div>
              <div className='navIcon'>
                <img src={AboutIcon} alt='Features'  className='iconSize' />
                <span>About Us</span>
              </div>
              <div className='navIcon'>
                <img src={CallIcon} alt='Features'  className='iconSize' />
                <span>Contact</span>
              </div>
              <div className='navIcon'>
                <img src={VectorIcon} alt='Features'  className='iconSize' />
                <span>LOGIN</span>
              </div>
        </nav>
        </header>
      </div>
      <Carousel>
            <img src={Silder1} alt='logo1' />
            <img src={Slider2} alt='logo1' />
      </Carousel>
      </>
      
    
  );
}

export default Header;
