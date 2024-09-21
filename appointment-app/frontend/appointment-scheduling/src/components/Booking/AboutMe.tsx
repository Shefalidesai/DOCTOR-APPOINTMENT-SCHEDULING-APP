import { FaLanguage, FaUserFriends, FaUserMd } from 'react-icons/fa';
import './Booking.css'
import Booking from './Booking';
import Testimonials from './Testimonials';
const AboutMe = () => {
  return (
    <><div className="about-me">
      <h2>About me</h2>
      <div className="details">
        <div className="item">
          <FaLanguage size={24} />
          <p>Languages I speak</p>
          <span>English, Hindi</span>
        </div>
        <div className="item">
          <FaUserFriends size={24} />
          <p>I can help you with</p>
          <span>Interpersonal difficulties</span>
        </div>
        <div className="item">
          <FaUserMd size={24} />
          <p>My affiliations</p>
          <span>Psychologist at Amaha from Nov 2021 to present</span>
        </div>
      </div>
    </div><Booking></Booking>
    <Testimonials></Testimonials>
    </>
  );
};

export default AboutMe;
