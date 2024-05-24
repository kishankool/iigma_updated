import React from "react";
import Logo from "../../../public/logo-primary.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from 'next/link'
import NavBar from '../../components/navBar/index'

export default function Header() {
  return (
    <>
      <div id="header2" className="header2-area">
        <div className="header-top-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faPhone}
                        aria-hidden="true"
                        style={{ color: "#fdc800" }}
                      />
                      <a href="tel:+1234567890">18004191712</a>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        aria-hidden="true"
                        style={{ color: "#fdc800" }}
                      />
                      <a href="#">info@iigminstitute.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header-top-right">
                  <ul>
                    <li>
                      <a
                        className="login-btn-area"
                        href="https://online.iigminstitute.com/"
                        id="login-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faLock}
                          aria-hidden="true"
                          style={{ color: "#fdc800" }}
                        />
                        IIGMA ONLINE
                      </a>
                    </li>
                    <li>
                      <div className="apply-btn-area">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdR7U0HipoGZJuTmr2RM9mBpVqx6-wgt-qI1GJwNJcluXKE5Q/viewform" className="apply-now-btn">
                          Apply Now
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div id="google_translate_element"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavBar/>

        {/* <div className="main-menu-area bg-textPrimary" id="sticker">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <div className="logo-area">
                  <a href="index.html">
                    <Image src={Logo} alt="logo" width={150} height={50} />
                  </a>
                </div>
              </div>
              <div className="col-lg-10 col-md-9">
                <nav id="desktop-nav">
                  <ul>
                    <li className="active">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <a href="#">About</a>
                      <ul>
                        <li>
                          <Link href="/aboutus/aboutIIgma">ABOUT IIGMA</Link>
                        </li>
                        <li>
                          <Link href="/aboutus/vision">Vision</Link>
                        </li>
                        <li>
                          <Link href="/aboutus/directorsMessage">Director&apos;s Message</Link>
                        </li>
                        <li>
                          <Link href="/aboutus/boardOfAdvisiors">Board Of Advisors</Link>
                        </li>
                        <li>
                          <Link href="/aboutus/recognition">Recognition</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Academic Programs</a>
                      <ul>
                        <li>
                          <Link href="/academicProgram/certificateCourse">
                            Certificate Course
                          </Link>
                        </li>
                        <li>
                          <Link href="/academicProgram/pgDiploma">PG Diploma</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Faculties</a>
                      <ul>
                        <li>
                          <Link href="/faculties/facultyProfile">Faculty Profile</Link>
                        </li>
                        <li>
                          <Link href="/faculties/visitingFaculty">Visiting Faculty</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Students And Alumni</a>
                      <ul>
                        <li>
                          <Link href="/studentAndAlumni/batchProfile">Batch Profile</Link>
                        </li>
                        <li>
                          <Link href="/studentAndAlumni/internship">Internship</Link>
                        </li>
                        <li>
                          <Link href="/studentAndAlumni/infrastructure">Infrastructure</Link>
                        </li>
                        <li>
                          <Link href="/studentAndAlumni/placement">Placements</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Admissions</a>
                      <ul>
                        <li>
                          <Link href="/admissions/courseLebm">Course LEBM</Link>
                        </li>
                        <li>
                          <Link href="/admissions/PgDeploma">PG Diploma</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="mobile-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mobile-menu">
                <nav id="dropdown">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">ABOUT IIGMAA</a>
                        </li>
                        <li>
                          <a href="ourvision.html">Vision</a>
                        </li>
                        <li>
                          <a href="directormessage.html">Director&apos;s Message</a>
                        </li>
                        <li>
                          <a href="boardofadvisors.html">Board Of Advisors</a>
                        </li>
                        <li>
                          <a href="recogniton.html">Recognition</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Academic Programs</a>
                      <ul>
                        <li>
                          <a href="certificatecourse.html">
                            Certificate Course
                          </a>
                        </li>
                        <li>
                          <a href="pgdiploma.html">PG Diploma</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Faculties</a>
                      <ul>
                        <li>
                          <a href="facultyprofile.html">Faculty Profile</a>
                        </li>
                        <li>
                          <a href="visitingfaculty.html">Visiting Faculty</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Students And Alumni</a>
                      <ul>
                        <li>
                          <a href="batchprofile.html">Batch Profile</a>
                        </li>
                        <li>
                          <a href="internship.html">Internship</a>
                        </li>
                        <li>
                          <a href="infrastructure.html">Infrastructure</a>
                        </li>
                        <li>
                          <a href="#">Placements</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Admissions</a>
                      <ul>
                        <li>
                          <a href="courselebm.html">Course LEBM</a>
                        </li>
                        <li>
                          <a href="admissionpgdiploma.html">PG Diploma</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
       
      </div> */}
    </>
  );
}
