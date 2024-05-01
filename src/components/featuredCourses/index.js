import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from '../../../public/featured/1.jpg'
import Image2 from '../../../public/featured/2.jpg'
import Image3 from '../../../public/featured/3.jpg'
import Image4 from '../../../public/featured/4.jpg'
import Image from 'next/image'
import styles from './featured.module.css'
const Features = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={styles.bg_color}>
      <h3>Featured Courses</h3>
    <Carousel responsive={responsive}>
      <div className={styles.card}>
      <Image className={styles.product_image} src={Image1} alt="product image" />
      <h2 className={styles.font_size}>Livestock Entrepreneurship And Business Management</h2>
      <p>
      Livestock Entrepreneurship And Business Management
This is the Flagship course of IIGMA. Be employment ready with a 6 months rigorous module on all facets of Livestock Entrepreneurship and Business Management.
        </p>
      </div>
      <div className={styles.card}>
      <Image className={styles.product_image} src={Image2} alt="product image" />
      <h2 className={styles.font_size}>Livestock Entrepreneurship And Business Management</h2>
      <p>Livestock Entrepreneurship And Business Management
This is the Flagship course of IIGMA. Be employment ready with a 6 months rigorous module on all facets of Livestock Entrepreneurship and Business Management.</p>
      </div>
      <div className={styles.card}>
      <Image className={styles.product_image} src={Image3} alt="product image" />
      <h2 className={styles.font_size}>Livestock Entrepreneurship And Business Management</h2>
      <p>Livestock Entrepreneurship And Business Management
This is the Flagship course of IIGMA. Be employment ready with a 6 months rigorous module on all facets of Livestock Entrepreneurship and Business Management.</p>
      </div>
      <div className={styles.card}>
      <Image className={styles.product_image} src={Image4} alt="product image" />
      <h2 className={styles.font_size}>Livestock Entrepreneurship And Business Management</h2>
      <p>Livestock Entrepreneurship And Business Management
This is the Flagship course of IIGMA. Be employment ready with a 6 months rigorous module on all facets of Livestock Entrepreneurship and Business Management.</p>
      </div>
    </Carousel>
    </div>
  );
};

export default Features;
