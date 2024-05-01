import React from 'react';
import styles from './details.module.css'
import Payment from '../../components/paymentPage/index'
import AboutUsNav from '../../components/aboutUsNav/index'
import SidebarBox from '@/components/sideBar';
import CourseFormat from '@/components/courseFomat';

const DetailPage = () => {
  return (
    <div>
       <AboutUsNav pageName="Commercial Goat Farming Online" pageType="Commercial Goat Farming Online"/>
    <div className={styles.course_detail_price}>
      <div className={styles.course_detail}>
        <h2>Commercial Goat Farming</h2>
      <p>
        If you are aspiring to set up a Commercial Goat Farming, this course is the go-to destination for you. With 15 years of experience, our experts know what an entrepreneur is looking for and how profits can be multiplied year on year.
        <br />
        Our Assignments, self-explanatory videos, one-to-one interactions ensure an immersive experience, and our certification is done in partnership with key universities in livestock in the country.
      </p>
      <div>
        <iframe 
          title="Commercial Goat Farming Course Video"
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/zwbtE-vaBW0" 
          frameBorder="0" 
          allowfullscreen
        ></iframe>
        <CourseFormat />
      </div>
      </div>
      <div className={styles.payment_section}>
       <Payment/>
       <SidebarBox />

      </div>
    </div>
    </div>
  );
};

export default DetailPage;
