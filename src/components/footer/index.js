import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";


import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "../../../public/logo-footer.jpg";
import PaymentMethod1 from "../../../public/payment-method1.jpg";
import PaymentMethod2 from "../../../public/payment-method2.jpg";
import PaymentMethod3 from "../../../public/payment-method3.jpg";
import PaymentMethod4 from "../../../public/payment-method4.jpg";

function Footer() {
  // Define dynamic data
  const phoneNumber = "9565777770";
  const email = "info@iigminstitute.com";

  return (
    <footer>
      <div className="footer-area-top">
        <div className="container">
          <div className="row">
            {/* Footer Box 1 */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-box">
                <a href="index.html">
                  {/* <img
                    className="img-responsive"
                    src="img/logo-footer.jpg"
                    alt="logo"
                  /> */}
                  <Image src={Logo} alt="logo" />
                </a>
                <div className="footer-about">
                  <p>
                    IIGMA is a global practice-oriented institute nurturing
                    entrepreneurship in natural resource management. IIGMA is
                    registered legally as Foundation for Incubation in
                    Livestock, Entrepreneurship and Research.
                  </p>
                </div>
                <ul className="footer-social">
                  <li>
                    <a href="https://www.facebook.com/IIGMA.LKO?mibextid=ZbWKwL">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/school/the-goat-trust/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faRss} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/iigma_tgt/?igshid=MTNiYzNiMzkwZA%3D%3D">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Footer Box 2 */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-box">
                <h3>Featured Links</h3>
                <ul className="featured-links">
                  <li>
                    <ul>
                      <li>
                        <a href="#">Graduation</a>
                      </li>
                      <li>
                        <a href="#">Admissions</a>
                      </li>
                      <li>
                        <a href="termsandconditions.html">Terms</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="#">Courses</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="privacypolicy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="refundpolicy.html">Refund Policy</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* Footer Box 3 */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-box">
                <h3>Information</h3>
                <ul className="corporate-address">
                  <li>
                    <FontAwesomeIcon
                      icon={faPhone}
                      aria-hidden="true"
                      style={{ color: "#fdc800" }}
                    />
                    <a href="tel:(01)800433633"> {phoneNumber} </a>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      aria-hidden="true"
                      style={{ color: "#fdc800" }}
                    />
                    {email}
                  </li>
                </ul>
                <div className="newsletter-area">
                  <h3>Newsletter</h3>
                  <div className="input-group stylish-input-group">
                    <input
                      type="text"
                      placeholder="Enter your e-mail here"
                      className="form-control"
                    />
                    <span className="input-group-addon">
                      <button type="submit">
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          aria-hidden="true"
                          style={{ color: "#fdc800" }}
                        />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Box 4 */}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="footer-box">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.01920351879!2d81.0260073755849!3d26.934605676634174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399959e3831a6b9d%3A0x950039746a93267f!2sThe%20Goat%20Trust%20Goat%20Gurukul!5e0!3m2!1sen!2sin!4v1698834134707!5m2!1sen!2sin"
                  // width="400"
                  // height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <p>&copy; 2024 IIGMA All Rights Reserved.</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <ul className="payment-method">
                <li>
                  <a href="#">
                    <Image alt="payment-method" src={PaymentMethod1} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image alt="payment-method" src={PaymentMethod2} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image alt="payment-method" src={PaymentMethod3} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image alt="payment-method" src={PaymentMethod4} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
