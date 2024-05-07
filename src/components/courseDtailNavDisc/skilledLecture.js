// components/SkilledLecturers.js
import React from 'react';
import Image from 'next/image';
import Sanjeev from '../../../public/team/1.jpg';
import Ujwal from '../../../public/team/2.jpg';
import Bhisma from '../../../public/team/3.jpg';
import styles from './skilled.module.css'; // Import CSS module for styling

const SkilledLecturers = () => {
  return (
    <div className="tab-pane tab-item animated fadeIn" id="menu-3" role="tabpanel" aria-labelledby="menu-1-tab">
      <div className="course-details-skilled-lecturers">
        <ul className={styles.lecturersList}>
          <li>
            <div className={styles.lecturer}>
              <div className={styles.lecturerImage}>
                <a href="#">
                  <Image src={Sanjeev} width="100px" height="100px" className="img-responsive" alt="skilled" />
                </a>
              </div>
              <div className={styles.lecturerContent}>
                <h4><a href="#">Prof. Sanjeev Kumar</a></h4>
                <p>Senior Professor</p>
                <a href="#" className="details-accent-btn">Details</a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.lecturer}>
              <div className={styles.lecturerImage}>
                <a href="#">
                  <Image src={Ujwal} width="100px" height="100px" className="img-responsive" alt="skilled" />
                </a>
              </div>
              <div className={styles.lecturerContent}>
                <h4><a href="#">Mr. Ujjwal Sarcar</a></h4>
                <p>Senior Lecturer</p>
                <a href="#" className="details-accent-btn">Details</a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.lecturer}>
              <div className={styles.lecturerImage}>
                <a href="#">
                  <Image src={Bhisma} width="100px" height="100px" className="img-responsive" alt="skilled" />
                </a>
              </div>
              <div className={styles.lecturerContent}>
                <h4><a href="#">Mr. Bhism Singh</a></h4>
                <p>Senior Lecturer</p>
                <a href="#" className="details-accent-btn">Details</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkilledLecturers;
