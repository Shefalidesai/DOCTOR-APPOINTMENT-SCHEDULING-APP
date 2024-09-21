import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css'

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="booking">
      <h2>Gauri Saxena is available on</h2>
      <div className="options">
        <button>In-Person</button>
        <button>Video</button>
        <button>Call</button>
      </div>

      <h3>Select session duration</h3>
      <div className="session-duration">
        <button>50 mins</button>
        <p>₹1400/session</p>
      </div>

      <h3>Check available slots</h3>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
      />
      <button className="confirm">Confirm Booking</button>
    </div>
  );
};

export default Booking;
