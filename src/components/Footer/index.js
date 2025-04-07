import './index.css';
import logo from '../../images/logo.png';
import logo1 from '../../images/logo 1.png';
import Location from '../../images/mdi_location 1.png';
import Call from '../../images/CALL.png';

const  Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt='Vishnu' className="footerImage" />
          <img src={logo1} alt='government' className='footerImage' />
        </div>

        <div className="footer-center">
          <div className="footer-info">
            <img src={Location} alt="Location" className="icon" />
            <p>4th Block, Room No:208, First Floor,<br />A.P Secretariat, Velagapudi.</p>
          </div>
          <div className="footer-info">
            <img src={Call} alt="Location" className="icon" />
            <p><strong>0863-2444505</strong><br />Got Questions? Call us 24/7</p>
          </div>
        </div>

        <div className="footer-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.3819875850754!2d80.42969351442022!3d16.54140342888564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb4e4f5053e1%3A0xa88c057ae49de787!2sAndhra%20Pradesh%20Secretariat!5e0!3m2!1sen!2sin!4v1644390255573!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2025 © All Rights Reserved By AP DigiVerify, IT, Electronics & Communications Department, Government Of Andhra Pradesh.</p>
        <p>Developed and Maintained by <span className="gisfy">GISFY</span></p>
      </div>
    </footer>
  );
}

export default Footer;