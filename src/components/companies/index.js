import React from "react";
import Image from "next/image";
import Slider from "react-slick"; // Import react-slick for carousel functionality
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme CSS

const BrandArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div
    // className={styles.brandArea}
    >
      <div className="container">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div
              // className={styles.brandAreaBox}
              key={index}
            >
              <a href="#">
                <Image
                  src={`/brand/${index}.jpg`}
                  alt="brand"
                  width={214}
                  height={214}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandArea;
