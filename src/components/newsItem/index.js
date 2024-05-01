import Image from 'next/image';
import {
  FaEnvelope,
  FaLinkedin,
  FaUser,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";


const NewsItem = ({ imageSrc, name, qualification, internship }) => {
    return (
      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
        <div className="news-box">
          <div className="news-img-holder">
          <Image src={imageSrc} alt="team" width={500} height={500} />
          </div>
          <h3 className="title-news-left-bold">
            <a href="#">{name}</a>
          </h3>
          <b>{qualification}</b>
          <ul className="title-bar-high news-comments">
            <li>
              <a href="">
              <FaUser />
                <span>Internship</span>
                {internship}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  export default NewsItem;