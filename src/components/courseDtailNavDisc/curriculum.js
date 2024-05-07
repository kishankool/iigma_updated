// components/CurriculumAccordion.js
const CurriculumAccordion = () => {
    return (
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
                    <i className="fa fa-file-o" aria-hidden="true"></i>
                  </li>
                  <li>Module 1</li>
                  <li>Introduction</li>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <span> 00.20.00</span>
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
                <b>Week1-:Session 1</b> Introduction &amp; Expectation analysis
              </li>
              <li>
                <b>Week2-:Session 2</b> Why commercial goat farming – Opportunities &amp; challenges?
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
                    <i className="fa fa-file-o" aria-hidden="true"></i>
                  </li>
                  <li>Module 2</li>
                  <li>Setting up the Business</li>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <span> 00.40.00</span>
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
                <b>Week3-:Session 3</b> Market based business options in Commercial goat farming.
              </li>
              <li>
                <b>Week4-:Session 4</b> Planning a goat farm.
              </li>
              <li>
                <b>Week5-:Session 5</b> Selection of right breed &amp; quality goats.
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
                    <i className="fa fa-file-o" aria-hidden="true"></i>
                  </li>
                  <li>Module 3</li>
                  <li>Business and Farm Strategy</li>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <span> 01.05.00</span>
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
                <b>Week7-:Session 7</b> Goat Feeds and Low cost Feeding strategy.
              </li>
              <li>
                <b>Week8-:Session 8</b> Right breeding strategy for commercial goat farming.
              </li>
              <li>
                <b>Week9-:Session 9</b> Managing Goat Health &amp; productivity.
              </li>
              <li>
                <b>Week10-:Session 10</b> Developing profitable goat marketing strategy (10).
              </li>
              <li>
                <b>Week11-:Session 11</b> Goat products and processing.
              </li>
              <li>
                <b>Week12-:Session 12</b>Economics of Goat farming &amp; developing business plan
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
                    <i className="fa fa-file-o" aria-hidden="true"></i>
                  </li>
                  <li>Module 4</li>
                  <li>Business and Farm Management</li>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <span> 00.35.00</span>
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
                <b>Week13-:Session 13</b> Role of Goat Farm Manager and Key monitoring indicators.
              </li>
              <li>
                <b>Week14-:Session 14</b> Ten Golden rules of commercial goat farming.
              </li>
              <li>
                <b>Week15-:Session 15</b>Enhancing resource optimization through Integrated goat farming.
              </li>
              <li>
                <b>Week16-:Session 16</b> Goat Farm Records &amp; Analytical reports.
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
                    <i className="fa fa-file-o" aria-hidden="true"></i>
                  </li>
                  <li>Module 5</li>
                  <li>Schemes and Fund Management</li>
                  <li>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <span> 00.10.00</span>
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
                <b>Week17-:Session 17</b> Govt schemes, Bank loans and managing finances.
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CurriculumAccordion;
  