import React from 'react'

export default function CourseFormat() {
  return (
    <div className="course-details-tab-area">
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <ul className="course-details-tab-btn nav" id="myTab" role="tablist">
          <li className="menu-item" role="presentation">
            <a
              className="menu-link active"
              id="menu-1-tab"
              data-bs-toggle="tab"
              href="#menu-1"
              role="tab"
              aria-controls="menu-1"
              aria-selected="false"
            >
              Description
            </a>
          </li>
          <li className="menu-item" role="presentation">
            <a
              className="menu-link"
              id="menu-2-tab"
              data-bs-toggle="tab"
              href="#menu-2"
              role="tab"
              aria-controls="menu-2"
              aria-selected="false"
            >
              Curriculum
            </a>
          </li>
          <li className="menu-item" role="presentation">
            <a
              className="menu-link"
              id="menu-3-tab"
              data-bs-toggle="tab"
              href="#menu-3"
              role="tab"
              aria-controls="menu-3"
              aria-selected="false"
            >
              Lecturer
            </a>
          </li>
          <li className="menu-item" role="presentation">
            <a
              className="menu-link"
              id="menu-4-tab"
              href="faq.html"
              role="tab"
              target="_blank"
              aria-controls="menu-4"
              aria-selected="false"
            >
              Faq
            </a>
          </li>
          <li className="menu-item" role="presentation">
            <a className="menu-link" onClick="toggleOptions34()">
              Download
            </a>
            <ul className="download-language">
              <li>
                <a
                  className="download-btn"
                  href="./document/Commercial Goat Farming - Online (3).pdf"
                  role="tab"
                  target="_blank"
                >
                  Download In English
                </a>
              </li>
              <li>
                <a
                  className="download-btn"
                  href="./document/Commercial Goat Farming Hindi.pdf"
                  role="tab"
                  target="_blank"
                >
                  Download In Hindi
                </a>
              </li>
            </ul>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="tab-content">
          <div
            className="tab-pane tab-item animated fadeIn show active"
            id="menu-1"
            role="tabpanel"
            aria-labelledby="menu-1-tab"
          >
            <h3 className="sidebar-title">Course Description</h3>
            <p>
              The three months programme is designed to prepare aspiring
              commercial goat farmers or Experienced Professionals looking to
              explore livestock based projects. The courses imparts a focussed
              specialization perspective, which enables students to view the
              entirety of a livestock based enterprise and scope for scaling and
              managing operations. The Students are given focussed immersion on 4
              pillars of livestock namely Production Technology, Market, Finance
              and Institutions. Besides professional expertise, post the course ,
              students are given value added support by various affiliated service
              units and mentorship to successfully undertake or scale commercial
              goat farming. <br />
              <br />
              The online module caters to convenience of busy commercial farm
              aspirants and module designed in intensive manner to ensure
              candidate is ready to start with confidence and also aware of all
              marketing opportunities and challenges.
            </p>
            <h3 className="sidebar-title">Certification</h3>
            <p>
              International Institute of Goat Management awards a certification in
              Commercial Goat Farming to the students who successfully complete
              the course, fulfil the prescribed academic standards, and do the
              practical assignments as per the prescribed requirements. The Goat
              Trust and IIGMA has signed MoU with CV RAMAN UNIVERSITY and DUVASU
              and many other universities. It has signed MoU with Agriculture
              skill council of India and follows course curriculum. However IIGMA
              has its own practice oriented focused course and independent status.
            </p>
            <h3 className="sidebar-title">Learning Outcomes</h3>
            <ul className="learning-outcomes">
              <li>Over 37 lectures and 55.5 hours of content!</li>
              <li>Testing Training Included.</li>
              <li>
                Online Programme consists of core course credits totalling 45
                credits.
              </li>
              <li>Each credit covering 10 hours of classroom or field work.</li>
              <li>Course is divided into 7 major subjects.</li>
              <li>Each subject has 15 to 30 credits for certification.</li>
              <li>One credit is equivalent to 10 contact hours.</li>
              <li>
                The areas covered include Livestock Production Technology,
                Marketing, Institutions, Information Systems.
              </li>
            </ul>
            For further questions check <a href="faq.html">FAQ</a> or contact
            support.
          </div>
          <div
            className="tab-pane tab-item animated fadeIn"
            id="menu-2"
            role="tabpanel"
            aria-labelledby="menu-1-tab"
          >
            <h3 className="sidebar-title">CGF Lecture Started</h3>
            <div className="panel-group curriculum-wrapper" id="accordionExample">
              <div className="panel panel-default accordion-item">
                <div className="panel-heading" id="headingOne">
                  <div className="panel-title">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <ul>
                        <li>
                          <i className="fa fa-file-o" aria-hidden="true" />
                        </li>
                        <li>Module 1</li>
                        <li>Introduction</li>
                        <li>
                          <i className="fa fa-clock-o" aria-hidden="true">
                            <span> 00.20.00</span>
                          </i>
                        </li>
                      </ul>
                    </button>
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="panel-body">
                    <li>
                      <b>Week1-:Session 1</b> Introduction &amp; Expectation
                      analysis
                    </li>
                    <li>
                      <b>Week2-:Session 2</b> Why commercial goat farming –
                      Opportunities &amp; challenges?
                    </li>
                  </div>
                </div>
              </div>
              <div className="panel panel-default accordion-item">
                <div className="panel-heading" id="headingTwo">
                  <div className="panel-title">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <ul>
                        <li>
                          <i className="fa fa-file-o" aria-hidden="true" />
                        </li>
                        <li>Module 2</li>
                        <li>Setting up the Business</li>
                        <li>
                          <i className="fa fa-clock-o" aria-hidden="true">
                            <span> 00.40.00</span>
                          </i>
                        </li>
                      </ul>
                    </button>
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="panel-body">
                    <li>
                      <b>Week3-:Session 3</b> Market based business options in
                      Commercial goat farming.
                    </li>
                    <li>
                      <b>Week4-:Session 4</b> Planning a goat farm.
                    </li>
                    <li>
                      <b>Week5-:Session 5</b> Selection of right breed &amp;
                      quality goats.
                    </li>
                    <li>
                      <b>Week6-:Session 6</b> Construction of Goat farm.
                    </li>
                  </div>
                </div>
              </div>
              <div className="panel panel-default accordion-item">
                <div className="panel-heading" id="headingThree">
                  <div className="panel-title">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <ul>
                        <li>
                          <i className="fa fa-file-o" aria-hidden="true" />
                        </li>
                        <li>Module 3</li>
                        <li>Business and Farm Strategy</li>
                        <li>
                          <i className="fa fa-clock-o" aria-hidden="true">
                            <span> 01.05.00</span>
                          </i>
                        </li>
                      </ul>
                    </button>
                  </div>
                </div>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="panel-body">
                    <li>
                      <b>Week7-:Session 7</b> Goat Feeds and Low cost Feeding
                      strategy.
                    </li>
                    <li>
                      <b>Week8-:Session 8</b> Right breeding strategy for
                      commercial goat farming.
                    </li>
                    <li>
                      <b>Week9-:Session 9</b> Managing Goat Health &amp;
                      productivity.
                    </li>
                    <li>
                      <b>Week10-:Session 10</b> Developing profitable goat
                      marketing strategy (10).
                    </li>
                    <li>
                      <b>Week11-:Session 11</b> Goat products and processing.
                    </li>
                    <li>
                      <b>Week12-:Session 12</b>Economics of Goat farming &amp;
                      developing business plan
                    </li>
                  </div>
                </div>
              </div>
              <div className="panel panel-default accordion-item">
                <div className="panel-heading" id="headingFour">
                  <div className="panel-title">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <ul>
                        <li>
                          <i className="fa fa-file-o" aria-hidden="true" />
                        </li>
                        <li>Module 4</li>
                        <li>Business and Farm Management</li>
                        <li>
                          <i className="fa fa-clock-o" aria-hidden="true">
                            <span> 00.35.00</span>
                          </i>
                        </li>
                      </ul>
                    </button>
                  </div>
                </div>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="panel-body">
                    <li>
                      <b>Week13-:Session 13</b> Role of Goat Farm Manager and Key
                      monitoring indicators.
                    </li>
                    <li>
                      <b>Week14-:Session 14</b> Ten Golden rules of commercial
                      goat farming.
                    </li>
                    <li>
                      <b>Week15-:Session 15</b>Enhancing resource optimization
                      through Integrated goat farming.
                    </li>
                    <li>
                      <b>Week16-:Session 16</b> Goat Farm Records &amp; Analytical
                      reports.
                    </li>
                  </div>
                </div>
              </div>
              <div className="panel panel-default accordion-item">
                <div className="panel-heading" id="headingFive">
                  <div className="panel-title">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <ul>
                        <li>
                          <i className="fa fa-file-o" aria-hidden="true" />
                        </li>
                        <li>Module 5</li>
                        <li>Schemes and Fund Management</li>
                        <li>
                          <i className="fa fa-clock-o" aria-hidden="true">
                            <span> 00.10.00</span>
                          </i>
                        </li>
                      </ul>
                    </button>
                  </div>
                </div>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="panel-body">
                    <li>
                      <b>Week17-:Session 17</b> Govt schemes, Bank loans and
                      managing finances.
                    </li>
                  </div>
                </div>
              </div>
              {/* <div class="panel panel-default accordion-item">
                              <div class="panel-heading" id="headingSix">
                                <div class="panel-title">
                                  <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix"
                                  >
                                    <ul>
                                      <li>
                                        <i
                                          class="fa fa-file-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>Lecture 1.6</li>
                                      <li>
                                        Content Drip premium add-on for
                                        LearnPress
                                      </li>
                                      <li>
                                        <i
                                          class="fa fa-clock-o"
                                          aria-hidden="true"
                                          ><span> 00.30.00</span></i
                                        >
                                      </li>
                                    </ul>
                                  </button>
                                </div>
                              </div>
                              <div
                                id="collapseSix"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingSix"
                                data-bs-parent="#accordionExample"
                              >
                                <div class="panel-body">
                                  Ut quis scelerisque risus, et viverra nisi.
                                  Phasellus ultricies luctus augue, eget maximus
                                  felis laoreet quis. Maecenasbibendum tempor
                                  eros.
                                </div>
                              </div>
                            </div>
                            <div class="panel panel-default accordion-item">
                              <div class="panel-heading" id="headingSeven">
                                <div class="panel-title">
                                  <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSeven"
                                    aria-expanded="false"
                                    aria-controls="collapseSeven"
                                  >
                                    <ul>
                                      <li>
                                        <i
                                          class="fa fa-file-o"
                                          aria-hidden="true"
                                        ></i>
                                      </li>
                                      <li>Lecture 1.7</li>
                                      <li>Quizzes</li>
                                      <li>
                                        <i
                                          class="fa fa-clock-o"
                                          aria-hidden="true"
                                          ><span> 00.30.00</span></i
                                        >
                                      </li>
                                    </ul>
                                  </button>
                                </div>
                              </div>
                              <div
                                id="collapseSeven"
                                class="accordion-collapse collapse"
                                aria-labelledby="headingSeven"
                                data-bs-parent="#accordionExample"
                              >
                                <div class="panel-body">
                                  Ut quis scelerisque risus, et viverra nisi.
                                  Phasellus ultricies luctus augue, eget maximus
                                  felis laoreet quis. Maecenasbibendum tempor
                                  eros.
                                </div>
                              </div>
                            </div> */}
            </div>
          </div>
          <div
            className="tab-pane tab-item animated fadeIn"
            id="menu-3"
            role="tabpanel"
            aria-labelledby="menu-1-tab"
          >
            <div className="course-details-skilled-lecturers">
              <ul>
                <li>
                  <div className="skilled-lecturers-img">
                    <a href="#">
                      <img
                        src="img/team/1.jpg"
                        width="100px"
                        height="100px"
                        className="img-responsive"
                        alt="skilled"
                      />
                    </a>
                  </div>
                  <div className="skilled-lecturers-content">
                    <h4>
                      <a href="#">Prof. Sanjeev Kumar</a>
                    </h4>
                    <p>Senior Proffesor</p>
                  </div>
                  {/* <div class="skilled-lecturers-schedule">
                                  <ul>
                                    <li>
                                      <h4>Day</h4>
                                      <p>Wed Day</p>
                                    </li>
                                    <li>
                                      <h4>Time</h4>
                                      <p>9 am - 11 am</p>
                                    </li>
                                  </ul>
                                </div> */}
                  <div className="skilled-lecturers-details">
                    <a href="#" className="details-accent-btn">
                      Details
                    </a>
                  </div>
                </li>
                <li>
                  <div className="skilled-lecturers-img">
                    <a href="#">
                      <img
                        src="img/team/2.jpg"
                        height="100px"
                        width="100px"
                        className="img-responsive"
                        alt="skilled"
                      />
                    </a>
                  </div>
                  <div className="skilled-lecturers-content">
                    <h4>
                      <a href="#">Mr. Ujjwal Sarcar</a>
                    </h4>
                    <p>Senior Lecturer</p>
                  </div>
                  {/* <div class="skilled-lecturers-schedule">
                                  <ul>
                                    <li>
                                      <h4>Day</h4>
                                      <p>Sun Day</p>
                                    </li>
                                    <li>
                                      <h4>Time</h4>
                                      <p>08 pm - 10 pm</p>
                                    </li>
                                  </ul>
                                </div> */}
                  <div className="skilled-lecturers-details">
                    <a href="#" className="details-accent-btn">
                      Details
                    </a>
                  </div>
                </li>
                <li>
                  <div className="skilled-lecturers-img">
                    <a href="#">
                      <img
                        src="img/team/3.jpg"
                        className="img-responsive"
                        alt="skilled"
                        height="100px"
                        width="100px"
                      />
                    </a>
                  </div>
                  <div className="skilled-lecturers-content">
                    <h4>
                      <a href="#">Mr. Bhism Singh</a>
                    </h4>
                    <p>Senior Lecturer</p>
                  </div>
                  {/* <div class="skilled-lecturers-schedule">
                                  <ul>
                                    <li>
                                      <h4>Day</h4>
                                      <p>Mon Day</p>
                                    </li>
                                    <li>
                                      <h4>Time</h4>
                                      <p>04 pm - 11 05</p>
                                    </li>
                                  </ul>
                                </div> */}
                  <div className="skilled-lecturers-details">
                    <a href="#" className="details-accent-btn">
                      Details
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
