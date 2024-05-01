import React from 'react';
import Image from 'next/image'
import courseImage from '../../../../public/course/1.jpg'
import courseImage2 from '../../../../public/course/2.jpg'
import courseImage3 from '../../../../public/course/3.jpg'
import courseImage4 from '../../../../public/course/4.jpg'
import courseImage5 from '../../../../public/course/5.jpg'
import styles from './certifiacte.module.css'
import Link from 'next/link' 

const Courses = () => {
    return (
        <div className="tab-pane tab-item animated fadeIn show active" id="menu-2" role="tabpanel" aria-labelledby="menu-2-tab" style={{padding: "5%"}}>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="courses-box3">
                        <div className="single-item-wrapper">
                            <div className="courses-img-wrapper hvr-bounce-to-right">
                                <Image className="img-responsive" src={courseImage} alt="courses" />
                                <a href="cgf.html"><i className="fa fa-link" aria-hidden="true"></i></a>
                            </div>
                            <div className="courses-content-wrapper">
                                <h3 className="item-title"><a href="cgf.html">Commercial Goat Farming and Management</a></h3>
                                <p className="item-content">This is the Flagship course of IIGM. Be employment ready with a 6 months rigorous module on all facets of Livestock Entrepreneurship and Business Management.</p>
                                <ul className="courses-info">
                                    <li>3 Months<br /><span> Course</span></li>
                                    <li>16<br /><span> Modules</span></li>
                                    <li>Online Course<br /><span> Model</span></li>
                                </ul>
                                <div className="courses-fee">₹ 3500</div>
                                <a href="https://forms.gle/EFZ7sqa18MXtkJxJ9" target="_blank" className={styles.button_c} rel="noreferrer">Enroll Now</a>
                                <Link href="/detailpage"  className={styles.button_c}>Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Repeat similar structure for other courses */}
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="courses-box3">
                <div className="single-item-wrapper">
                    <div className="courses-img-wrapper hvr-bounce-to-right">
                        <Image className="img-responsive" src={courseImage2} alt="courses" />
                        <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                    </div>
                    <div className="courses-content-wrapper">
                        <h3 className="item-title"><a href="#">Livestock Entrepreneurship And Business Management</a></h3>
                        <p className="item-content">This course provides you hands-on experience from seasoned entrepreneurs, practitioners and focuses on ways to maximize your profits from Day 1.</p>
                        <ul className="courses-info">
                            <li>6 Months<br /><span> Course</span></li>
                            <li>180<br /><span> Classes</span></li>
                            <li>Hybrid Course<br /><span> Model</span></li>
                        </ul>
                        <div className="courses-fee">₹50000</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="courses-box3">
                <div className="single-item-wrapper">
                    <div className="courses-img-wrapper hvr-bounce-to-right">
                        <Image className="img-responsive" src={courseImage3} alt="courses" />
                        <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                    </div>
                    <div className="courses-content-wrapper">
                        <h3 className="item-title"><a href="#">Livestock Based Livelihoods Project Management (LLPM)</a></h3>
                        <p className="item-content">This 3 months course provides strong insights into project management and monitoring and common issues faced and solutions from experienced veterans.</p>
                        <ul className="courses-info">
                            <li>3 Months<br /><span> Course</span></li>
                            <li>16<br /><span> Modules</span></li>
                            <li>Hybrid Course<br /><span> Model</span></li>
                        </ul>
                        <div className="courses-fee">₹ 2500</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="courses-box3">
                <div className="single-item-wrapper">
                    <div className="courses-img-wrapper hvr-bounce-to-right">
                        <Image className="img-responsive" src={courseImage4} alt="courses" />
                        <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                    </div>
                    <div className="courses-content-wrapper">
                        <h3 className="item-title"><a href="#">Goat Value Chain Management</a></h3>
                        <p className="item-content">This six months hybrid program is designed to prepare aspiring commercial goat farmers or Experienced professionals looking to explore livestock-based projects</p>
                        <ul className="courses-info">
                            <li>3 Months<br /><span> Course</span></li>
                            <li>15<br /><span> Modules</span></li>
                            <li>Online<br /><span> Course</span></li>
                        </ul>
                        <div className="courses-fee">₹ 5000</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="courses-box3">
                <div className="single-item-wrapper">
                    <div className="courses-img-wrapper hvr-bounce-to-right">
                        <Image className="img-responsive" src={courseImage5} alt="courses" />
                        <a href="#"><i className="fa fa-link" aria-hidden="true"></i></a>
                    </div>
                    <div className="courses-content-wrapper">
                        <h3 className="item-title"><a href="#">Diploma in Livestock Entrepreneurship and Business Management</a></h3>
                        <p className="item-content">In this one year engagement, Learn hands-on with maximum field exposure, working with seasoned professionals and entrepreneurs and away from the City Buzz in campus situated in Kukrail Jungle.</p>
                        <ul className="courses-info">
                            <li>1 Year<br /><span> Course</span></li>
                            <li>110<br /><span> Credits</span></li>
                            <li>Offline<br /><span> Course</span></li>
                        </ul>
                        {/* <div className="courses-fee">Comin</div> */}
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default Courses;
