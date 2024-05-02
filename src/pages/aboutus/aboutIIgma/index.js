import React from 'react';
import AboutUsNav from '../../../components/aboutUsNav/index';
import Image1 from '../../../../public/about/2.jpg';
import Image from 'next/image';
import { FaGraduationCap, FaUser, FaBook } from 'react-icons/fa';
import styles from './styles.module.css';
import Whatsaap from '../../../../public/whatsapp-icon.png'

const AboutIIGMA = () => {
    return (
        <div>
            <AboutUsNav pageName="About Us" pageType="About"/>
            <div id="whatsapp-icon">
                <a href="https://api.whatsapp.com/send?phone=9565777770&text=I%20want%20to%20enquire%20about%20courses" target="_blank" rel="noreferrer">
                    <Image src={Whatsaap} alt="WhatsApp Icon" />
                </a>
            </div>

            <div className="about-page1-area">
                <div className="container">
                    <div className="row about-page1-inner">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="about-page-content-holder">
                                <div className="content-box">
                                    <h2>About</h2>
                                    <p>International Institute of Goat Management (IIGMA) started as an academic and
                                        training wing of The Goat Trust (TGT). It has grown since and now provides several
                                        short-term and need-based certificate courses in the Field of Livestock Business
                                        Management, Livestock
                                        Trade and Marketing, Commercial Goat Farming, etc. <br /><br />
                                        IIGMA has two campuses, one at
                                        Lucknow (U.P) and other at Deoghar (Jharkhand). IIGMA is envisioned to prepare
                                        trained,
                                        skilled and competent professionals, managers and entrepreneurs in the field of
                                        Livestock
                                        business. It provides training and certificate courses for both job seekers and job
                                        providers in this field.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="about-page-img-holder">
                                <Image src={Image1} className="img-responsive" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-page3-area">
                <div className="container">
                    <div className="row about-page3-inner">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="about-box">
                                <h2 className="title-bar-medium-left "><a href="#">Our History</a></h2>
                                <p>International institute of Goat Management (IIGMA) has a rich and distinctive history that
                                    traces its origins to its inception as the training wing of The Goat Trust. Founded with
                                    a noble vision, IIGMA was established to cultivate capable and forward-thinking
                                    professionals who could lead grassroots interventions in the realm of goat management
                                    and livestock enterprises. This visionary initiative was the brainchild of the founding
                                    members of The Goat Trust, who recognized the crucial need for individuals well-versed
                                    in the intricacies of sustainable goat farming.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="about-box">
                                <h2 className="title-bar-medium-left "><a href="#">Our Alumnis</a></h2>
                                <p>IIGMA in the past 5 years have nurtured and mentored over 300+ professionals who have
                                    contributed to the sector through their respective organizations in meaningful ways.
                                    Students of Livestock Entrepreneurship and Business Management , a six month certificate
                                    course on various livestock based business and livelihood models gives ample capacity,
                                    clarity and confidence to excel in the sector from the scratch.The Livestock Sector
                                    today is fast evolving and job profiles have also been dynamically evolving providing
                                    ample opportunities for students to update themselves and progress faster in their
                                    career.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="about-box">
                                <h2 className="title-bar-medium-left "><a href="#">Our Campus</a></h2>
                                <p>The Institute is located on a verdant campus 8 Kms from Munshi Pulia Metro Station . The
                                    entire Solar Powered and Wi-Fi enabled campus houses the faculty residences, office
                                    complex, library and computer center complex, digital class room complex, residences for
                                    gents, ladies. The Institute has a floodlit volley ball court, Field Practice Farm, and
                                    Units and Production and Marketing centres for Practice.The Institute has a seperate
                                    complex for Cafeteria with multiple kitchens for Veg and Non Vegeterian servings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about2-area">
                <div className="container">
                    <h1 className="about-title">Why Choose Us?</h1>
                    <p className="about-sub-title">Welcome to India&apos;s first practice focused institute in livestock and natural
                        resource Entrepreneurship and Management with a mission to build capable and committed professionals
                        through innovation in imparting education, training and research. </p>
                </div>
                <div className="about2-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeIn" data-wow-duration="2s"
                                data-wow-delay=".1s">
                                <div className="service-box2">
                                    <div className="service-box-icon">
                                        <a href="#"><FaGraduationCap className={styles.blue_icon}/></a>
                                    </div>
                                    <h3><a href="#">Philosophy Of Entrepreneurship</a></h3>
                                    <p>Building competent professionals for implementations,research and Entrepreneurial
                                        initiatives in natural resource management domain.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeIn" data-wow-duration="2s"
                                data-wow-delay=".4s">
                                <div className="service-box2">
                                    <div className="service-box-icon">
                                        <a href="#"><FaUser className={styles.blue_icon} /></a>
                                    </div>
                                    <h3><a href="#">School Of Practice</a></h3>
                                    <p>Combining traditional wisdom and practices of natural resource management to foster
                                        culture of innovation, integration,partnerships and sustainability.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeIn" data-wow-duration="2s"
                                data-wow-delay=".7s">
                                <div className="service-box2">
                                    <div className="service-box-icon">
                                        <a href="#"><FaBook className={styles.blue_icon}/></a>
                                    </div>
                                    <h3><a href="#">Futuristic Hybrid Learning</a></h3>
                                    <p>Experience the joy of hands on exposure on the ground supported with latest digital tools
                                        for perfect learning and doing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutIIGMA;
