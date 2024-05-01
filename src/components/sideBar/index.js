// components/SidebarBox.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
  faRss,
  faInstagram,
  faPhone,
  faEnvelope,
  faPaperPlane,
} from '@fortawesome/free-brands-svg-icons';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const SidebarBox = () => {
  return (
    <div className="sidebar-box">
      <div className="sidebar-box-inner">
        <h3 className="sidebar-title">Course Reviews</h3>
        <div className="sidebar-course-reviews">
          <h4>Average Rating<span>4.8</span></h4>
          <ul>
          <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li>
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </li>
          </ul>
          <div className="skill-area">
            <div className="progress">
              <div className="lead">5 Stars</div>
              <div
                style={{ width: '100%' }}
                className="progress-bar"
              ></div>
              <span>10</span>
            </div>
            <div className="progress">
              <div className="lead">4 Stars</div>
              <div
                style={{ width: '80%' }}
                className="progress-bar"
              ></div>
              <span>6</span>
            </div>
            <div className="progress">
              <div className="lead">3 Stars</div>
              <div
                style={{ width: '60%' }}
                className="progress-bar"
              ></div>
              <span>3</span>
            </div>
            <div className="progress">
              <div className="lead">2 Stars</div>
              <div
                style={{ width: '0%' }}
                className="progress-bar"
              ></div>
              <span>0</span>
            </div>
            <div className="progress">
              <div className="lead">1 Stars</div>
              <div
                style={{ width: '0%' }}
                className="progress-bar"
              ></div>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarBox;
