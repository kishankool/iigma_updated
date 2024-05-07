import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLocationArrow } from '@fortawesome/free-solid-svg-icons';

const CourseDetails = () => {
  return (
    <div>
      <h2>Course Description</h2>
      <p>
        The three months programme is designed to prepare aspiring commercial goat farmers or Experienced Professionals looking to explore livestock based projects. The courses imparts a focussed specialization perspective, which enables students to view the entirety of a livestock based enterprise and scope for scaling and managing operations. The Students are given focussed immersion on 4 pillars of livestock namely Production Technology, Market, Finance and Institutions. Besides professional expertise, post the course , students are given value added support by various affiliated service units and mentorship to successfully undertake or scale commercial goat farming.
      </p>
      <p>
        The online module caters to convenience of busy commercial farm aspirants and module designed in intensive manner to ensure candidate is ready to start with confidence and also aware of all marketing opportunities and challenges.
      </p>

      <h2>Certification</h2>
      <p>
        International Institute of Goat Management awards a certification in Commercial Goat Farming to the students who successfully complete the course, fulfil the prescribed academic standards, and do the practical assignments as per the prescribed requirements. The Goat Trust and IIGMA has signed MoU with CV RAMAN UNIVERSITY and DUVASU and many other universities. It has signed MoU with Agriculture skill council of India and follows course curriculum. However IIGMA has its own practice oriented focused course and independent status.
      </p>

      <h2>Learning Outcomes</h2>
      <ul>
        <li><FontAwesomeIcon icon={faCircleLocationArrow} />Over 37 lectures and 55.5 hours of content!</li>
        <li><FontAwesomeIcon icon={faCircleLocationArrow} /> Testing Training Included.</li>
        <li><FontAwesomeIcon icon={faCircleLocationArrow} /> Online Programme consists of core course credits totalling 45 credits.</li>
        <li><FontAwesomeIcon icon={faCircleLocationArrow} /> Each credit covering 10 hours of classroom or field work.</li>
        <li><FontAwesomeIcon icon={faCircleLocationArrow} /> Course is divided into 7 major subjects.</li>
        <li><FontAwesomeIcon icon={faCircleLocationArrow} /> Each subject has 15 to 30 credits for certification.</li>
        <li><FontAwesomeIcon icon={faCircleLocationArrow} /> One credit is equivalent to 10 contact hours.</li>
        <li><FontAwesomeIcon icon={faCircleLocationArrow} /> The areas covered include Livestock Production Technology, Marketing, Institutions, Information Systems.</li>
      </ul>
      
      <p><FontAwesomeIcon icon={faCircleLocationArrow} /> For further questions check FAQ or contact support.</p>
    </div>
  );
};

export default CourseDetails;
