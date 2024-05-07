import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUser, faBook } from "@fortawesome/free-solid-svg-icons";
import styles from './textAlign.module.css'

const AboutArea = () => (
  <div className="about2-area">
    <div className="container">
      <h1 className="about-title">Welcome To IIGMA</h1>
      <p className={styles.alignMentOfText}>
        Welcome to India&apos;s first practice-focused institute in livestock and natural resource Entrepreneurship and Management with a mission to build capable and committed professionals through innovation in imparting education, training, and research.
      </p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeIn" data-wow-duration="2s" data-wow-delay=".1s">
          <div className="service-box2">
            <div className="service-box-icon">
              <a href="">
                <FontAwesomeIcon icon={faGraduationCap} />
              </a>
            </div>
            <h3>
              <a href="">Philosophy Of Entrepreneurship</a>
            </h3>
            <p className={styles.alignMentOfText}>
              Building competent professionals for implementations, research, and Entrepreneurial initiatives in the natural resource management domain.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeIn" data-wow-duration="2s" data-wow-delay=".4s">
          <div className="service-box2">
            <div className="service-box-icon">
              <a href="">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </div>
            <h3>
              <a href="">School Of Practice</a>
            </h3>
            <p className={styles.alignMentOfText}>
              Combining traditional wisdom and practices of natural resource management to foster a culture of innovation, integration, partnerships, and sustainability.
            </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeIn" data-wow-duration="2s" data-wow-delay=".7s">
          <div className="service-box2">
            <div className="service-box-icon">
              <a href="">
                <FontAwesomeIcon icon={faBook} />
              </a>
            </div>
            <h3>
              <a href="">Futuristic Hybrid Learning</a>
            </h3>
            <p className={styles.alignMentOfText}>
              Experience the joy of hands-on exposure on the ground supported with the latest digital tools for perfect learning and doing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutArea;
