// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from './carousel.module.css'

const Carousel = ({ items }) => {
  const settings = {
    dots:true,
        speed:1000,
        slideToShow:1,
        slideToScroll:1,
        initialSlide:0,
        pauseOnHover:true,
        autoplay:true,
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>
          <Image src={item.imageUrl} alt={item.altText} className={styles.imageWidth} height={500} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
