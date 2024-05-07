// components/FAQ.js

const FAQ = () => {
    return (
      <div className="faq-page-area">
        <div className="container">
          <div className="faq-items" id="accordionFaq">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-item">
                  <div className="faq-title" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="faq-count">1</span>Will I get certification? Will it be valid?
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="faq-body">
                      <ul>
                        <li>
                          Yes, This is a certification program. IIGMA is an
                          academic wing of The Goat Trust , which has been
                          working in the livestock sector especially small
                          ruminants and has providing valuable goat value chain
                          services for the last 15 years.
                        </li>
                        <li>
                          The online training is a rigorous programme, which
                          involves multiple levels of assessments which needs to
                          be cleared for certification and hence it is valid to
                          any organization assessing skills for financial
                          assistance.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-title" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span class="faq-count">2</span>Would there be classes
                      every day, what if I don’t attend a class.
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="faq-body">
                      <ul>
                        <li>
                          The Commercial Goat Farming Online Training follows a
                          multiplatform model. Pre - recorded sessions by our
                          experts and practitioners are available 24/7 in our
                          online portal.
                        </li>
                        <li>
                          Doubt Sessions which are live interactions with our
                          technical experts would be scheduled on weekends in
                          multiple slots for convenience of participants.
                        </li>
                        <li>
                          Major focus of the program would be assignments upon
                          submission of which participants can move to the next
                          session which would have comfortable timelines.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-title" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span class="faq-count">3</span>It will be difficult for
                      me schedule time everyday, week.
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="faq-body">
                      <ul>
                        <li>
                          The Commercial Goat Farming Online Training follows a
                          multiplatform model. Pre - recorded sessions by our
                          experts and practitioners are available 24/7 in our
                          online portal.
                        </li>
                        <li>
                          Doubt Sessions which are live interactions with our
                          technical experts would be scheduled on weekends in
                          multiple slots for convenience of participants.
                        </li>
                        <li>
                          Major focus of the program would be assignments upon
                          submission of which participants can move to the next
                          session which would have comfortable timelines.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-title" id="headingSeven">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <span class="faq-count">4</span>Is it recorded sessions?
                      will it be helpful?
                    </button>
                  </div>
                  <div
                    id="collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="faq-body">
                      <ul>
                        <li>
                          <ul>
                            <li>
                              Sessions are continuously updated with latest
                              interface and fine editing making it interactive
                              and holistic. One on one doubt solving sessions
                              are included on weekends.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-title" id="headingEight">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      <span class="faq-count">5</span>I have specific need such
                      as ( understanding deseases, or meat marketing) ,remaining
                      I know. Can I get to ask for solution based on my
                      problems.
                    </button>
                  </div>
                  <div
                    id="collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="faq-body">
                      <ul>
                        <li>
                          If candidate wishes, they can at the end of online
                          module, visit our campus for a practical orientation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="faq-item">
                  <div class="faq-title" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span class="faq-count">6</span>How long will the course
                      be for? Can I complete it fast?
                    </button>
                  </div>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="faq-body">
                      <ul>
                        <li>
                          The Course consists of 17 modules ranging from
                          Opportunities and Challenges, Planning of goat farm,
                          Marketing, Feeding, Breeding to Schemes and Loan
                          products. Comfortable time to complete all sessions
                          with assignments is 3 months.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-title" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <span class="faq-count">7</span>Many fraud happening
                      nowadays, How to trust, need to visit campus.
                    </button>
                  </div>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="faq-body">
                      <ul>
                        <li>
                          The online portal is available at
                          online.iigminstitute.com and IIGMA courses available
                          on iigminstitute.com. Our Institute campus is located
                          at Goat Gurukul campus, Rasoolpur Sadat , Lucknow
                          226028.
                        </li>
                        <li>
                          The institute is legally registered as Foundation for
                          Incubation in Livestock Entrepreneurship and Research
                          which is a section 8 company.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-title" id="headingNine">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      <span class="faq-count">8</span>Only online, will it make
                      me ready? Would there be some practical attached with
                      online course.
                    </button>
                  </div>
                  <div
                    id="collapseNine"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="faq-body">
                      <ul>
                        <li>
                          If candidate wishes, they can at the end of online
                          module, visit our campus for a practical orientation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="faq-item">
                  <div class="faq-title" id="headingSix">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      <span class="faq-count">9</span>What after taking course?
                    </button>
                  </div>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="faq-body">
                      <ul>
                        <li>
                          You can be a confident commercial goat farmer and
                          expand your number of goats to a larger scale post
                          taking this course.
                        </li>
                        <li>
                          You can also be a certified trainer who can provide
                          basic training to other aspirants in local area
                          looking to set up commercial goat farms.
                        </li>
                        <li>
                          You can take the course and decide many factors before
                          starting the goat farms.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQ;
  