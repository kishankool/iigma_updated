import React from 'react';
import Image from 'next/image'
import PGimage from '../../../../public/pg.jpg'

const PgDiploma = () => {
    return (
        <div className="about-page1-area">
            <div className="container">
                <div className="row about-page1-inner">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-content-holder">
                            <div className="content-box">
                                <h2>Objective</h2>
                                <p>
                                    The one year programme is designed to prepare competent
                                    individuals for a promising career in management and entrepreneurship in the
                                    livestock sector and social enterprises.
                                    The courses impart a practice-focused generalist perspective, which enables students
                                    to view the entirety of a livestock-based
                                    social enterprise as well as its place in a larger environment. The
                                    Students are given focused immersion on 4 pillars of livestock
                                    namely Production Technology, Market, Finance, and Institutions. The students are
                                    also trained in technical and functional business
                                    skills such as accounting, finance, marketing, systems, and operations; and are
                                    helped to develop their analytical and
                                    integrative skills so that they can define problems with clarity and formulate
                                    alternative solutions for implementation. Besides
                                    professional expertise, the programme looks to train students for collaboration and
                                    teamwork through the development of human relation skills, and of attitudes which
                                    elicit a commitment to excellence along with awareness of their social and ethical
                                    responsibility.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-img-holder">
                            <Image src={PGimage} className="img-responsive" alt="about" />
                        </div>
                    </div>
                </div>
                <div className="row about-page1-inner">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="about-page-content-holder">
                            <div className="content-box">
                                <h2>Faculty</h2>
                                <p>
                                    International Institute of Goat Management boasts of a blend of
                                    entrepreneurs, academicians, researchers, professionals, administrators, consultants
                                    and managers which bestow the students with high-quality training during the course
                                    of the programme. The permanent faculty comprises experienced entrepreneurs from
                                    the various pillars of Livestock, with many of them having industrial and
                                    corporate experience. Also, there is a healthy pool of visiting faculty and
                                    professionals from other major Corporate and Scientific Organizations of the Natural
                                    Resource Management spectrum of India and other nations
                                    enabling a diverse exposure to all spectrum of management.
                                </p>
                                <h2>Programme Design</h2>
                                <p>
                                    The Livestock Entrepreneurship and Business Management Programme consists of core
                                    course credits and elective course- credits totaling 90 credits. Each credit
                                    covering 10 hours of
                                    classroom or field work. The course is divided into 7 major subjects
                                    and each subject has 15 to 30 credits for certification. One credit is equivalent
                                    to 10 contact hours. The objective is to expose the students to the social
                                    and economic environment within which livestock-based value chains operate in India.
                                    The areas covered
                                    include Livestock Production Technology, Marketing, Finance, Institutions,
                                    Accounting, Information Systems, Personality
                                    Development, and communications.
                                </p>
                                <h2>Degree</h2>
                                <p>
                                    International Institute of Goat Management awards PG Diploma in Livestock
                                    Entrepreneurship and Management degree to the students who successfully
                                    complete the course, work equivalent to 125 credits, fulfill the prescribed academic
                                    standards, and do
                                    the summer internships and project as per the prescribed requirements. The Goat
                                    Trust and IIGM has signed MoU with CV RAMAN UNIVERSITY and DUVASU and many other
                                    universities. It has signed MoU with Agriculture skill council of India and
                                    follows course curriculum. However, IIGM has its own practice-oriented
                                    focused course and independent status.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PgDiploma;
