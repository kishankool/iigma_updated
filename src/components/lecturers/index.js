import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FaEnvelope, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Bhisma from "../../../public/team/3.jpg";
import Sanjeev from "../../../public/team/1.jpg";
import Ujjwal from "../../../public/team/2.jpg";
import Saurabh from "../../../public/team/4.jpg";
import Ashish from "../../../public/team/5.jpg";
import Vinay from "../../../public/team/6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const lecturers = [
  {
    id: 1,
    name: "Mr. Bhishma Singh",
    designation: "Senior Faculty Livelihoods",
    image: Bhisma,
  },
  {
    id: 2,
    name: "Mr. Saurabh Gupta",
    designation: "Faculty Of Ethno-Veterinary Practices",
    image: Saurabh,
  },
  {
    id: 3,
    name: "Dr. Ashish Kumar",
    designation: "Faculty Of Production Technology",
    image: Ashish,
  },
  {
    id: 4,
    name: "Mr. Vinay Gautam",
    designation: "Livestock Marketing",
    image: Vinay,
  },
];

const PrevArrow = (props) => {
  const { onClick } = props;
  return <FiChevronLeft onClick={onClick} className="slick-prev" />;
};

const NextArrow = (props) => {
  const { onClick } = props;
  return <FiChevronRight onClick={onClick} className="slick-next" />;
};

const LecturersArea = () => {
  const settings = {
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lecturers-area">
      <div className="container">
        <h3 className="title-default-left">Our Skilled Lecturers</h3>
      </div>
      <div className="container">
        <Slider {...settings}>
          {lecturers.map((lecturer) => (
            <div className="single-item" key={lecturer.id}>
              <div className="lecturers1-item-wrapper">
                <div className="lecturers-img-wrapper">
                  <a href="#">
                    <Image
                      src={lecturer.image}
                      alt="team"
                      width={214}
                      height={214}
                    />
                  </a>
                </div>
                <div className="lecturers-content-wrapper">
                  <h3 className="item-title">
                    <a href="#">{lecturer.name}</a>
                  </h3>
                  <span className="item-designation">
                    {lecturer.designation}
                  </span>
                  <ul className="lecturers-social">
                    <li>
                      <a href="#">
                        <FaEnvelope />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LecturersArea;
