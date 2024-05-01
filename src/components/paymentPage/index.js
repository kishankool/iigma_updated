// FirstCard.js

import styles from './payment.module.css';
import React, { useState } from 'react';
import PaymentPopup from '../PaymentPopUp/index';

const FirstCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={styles.card}>
      <h2>COURSE PRICE ₹ 3500</h2>
      <button className={styles.portal_button}>Go to GotCourse Portal</button>
      <div className={styles.top_padding}>
        <button className={styles.enroll_button}>Enroll Now</button>
      </div>
      <div className={styles.top_padding}>
        <button className={styles.enroll_button} onClick={togglePopup}>Payment Details</button>
      </div>
      {showPopup && <PaymentPopup onClose={togglePopup} />}
    </div>
  );
}

export default FirstCard;
