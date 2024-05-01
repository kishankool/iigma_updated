// PaymentPopup.js

import styles from './PaymentPopup.module.css';
import Image from 'next/image';
import qr_Code from '../../../public/qr_code.jpg'

const PaymentPopup = ({ onClose }) => {
  return (
    <div className={styles.overlay} id="overlay-payment">
      <div className={styles.containerPopUp} id="popup-Container">
        <h3 className={styles.bankHeader}>Bank Account Details</h3>
        <div className={styles.accountDetails}>
          <div className={styles.accountInformation}>
            <p><strong>Account Holder Name:</strong> Foundation For Incubation In Livestock Entrepreneurship Research</p>
            <p><strong>Account Number:</strong> 120002454760</p>
            <p><strong>IFSC Code:</strong> CNRB0003698</p>
          </div>
          <div className={styles.qrCode}>
            {/* Placeholder QR Code image */}
            <Image src={qr_Code} alt="QR Code" className={styles.imgSize} />
          </div>
        </div>
        <button id="payment-close" className={styles.paymentClose} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PaymentPopup;
