import React, { useEffect, useState } from 'react';
import './PopUp.css'; 

const PopupImage = () => {
    const [activePopup, setActivePopup] = useState(1); // Tracks which popup is currently active
  
    useEffect(() => {
      // Switch popups at intervals
      const timer1 = setTimeout(() => setActivePopup(2), 3000); // Show second popup after 3 seconds
      const timer2 = setTimeout(() => setActivePopup(3), 6000); // Show third popup after 6 seconds
      const timer3 = setTimeout(() => setActivePopup(0), 9000); // Hide all popups after 9 seconds
  
      // Clear timeouts on unmount
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }, []);
  
    return (
      <><div className="image-container">
        <img src="brain.jpg" alt="Brain" className="image" />

        <div className={`popup ${activePopup === 1 ? 'show' : 'hide'}`}>
          <h3>Burnout</h3>
          <p>
            A state of exhaustion resulting from prolonged stress, often related to work or caregiving responsibilities, characterized by emotional detachment, fatigue, and loss of motivation.
          </p>
        </div>

        <div className={`popup ${activePopup === 2 ? 'show' : 'hide'}`}>
          <h3>Stress</h3>
          <p>
            Stress can affect mental and physical health, leading to anxiety, fatigue, and irritability.
          </p>
        </div>

        <div className={`popup ${activePopup === 3 ? 'show' : 'hide'}`}>
          <h3>Fatigue</h3>
          <p>
            Persistent tiredness can affect cognitive performance and well-being.
          </p>
        </div>
      </div>
      {/* <div className="image-container">
          <img src="tree.jpg" alt="Brain" className="image" />
          </div> */}
          </>
    );
  };

export default PopupImage;
