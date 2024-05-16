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
      <a href="https://online.iigminstitute.com/auth/login" target="_blank" rel="noopener noreferrer" className={styles.portal_button}>
        Go to GotCourse Portal
      </a>
      <div className={styles.top_padding}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdR7U0HipoGZJuTmr2RM9mBpVqx6-wgt-qI1GJwNJcluXKE5Q/viewform" target="_blank" rel="noopener noreferrer" className={styles.enroll_button}>Enroll Now</a>
      </div>
      <div className={styles.top_padding}>
        <button className={styles.enroll_button} onClick={togglePopup}>Payment Details</button>
      </div>
      {showPopup && <PaymentPopup onClose={togglePopup} />}
    </div>
  );
}

export default FirstCard;
