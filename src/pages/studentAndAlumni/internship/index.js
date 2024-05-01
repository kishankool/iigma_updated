import Image from 'next/image';
import IntershipImage from '../../../../public/internship/1.jpg'
import IntershipImage1 from '../../../../public/internship/2.jpg'
import IntershipImage2 from '../../../../public/internship/3.jpg'
import IntershipImage3 from '../../../../public/internship/4.jpg'
import IntershipImage4 from '../../../../public/internship/5.jpg'
import AboutUsNav from '../../../components/aboutUsNav/index'

const InternshipComponent = () => {
    return (
        <div className="about-page1-area">
            <AboutUsNav pageName="Internship" pageType="Internship"/>
            <div className="container">
                <div className="row about-page1-inner">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-content-holder">
                            <div className="content-box">
                                <h2>Experiencing The Grassroots</h2>
                                <p>
                                    Students of Livestock Entrepreneurship and Business Management are provided
                                    Internship Opportunities with associated organizations of IIGM and partner
                                    organizations through out the country.
                                    This year our students have secured internships in distant
                                    locations such as Haryana. Bihar, Noida, Unnau with Farmer Producer Companies, NGOs,
                                    Livestock Startups.
                                    Intense exposure during internships provide students with solid perspectives of
                                    community towards their development, practical issues on field and requirements for
                                    managing field based operations and lead businesses of grassroot social enterprises.
                                    Internships are a core aspect of the curriculum and regular mentorship and guidance
                                    are provided to students throughout the three months. The Fooding and Lodging
                                    arrangements are discussed prior with the hosting agency and safety of students
                                    during internships are well taken care of.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-img-holder">
                            <Image
                                src={IntershipImage}
                                alt="about"
                                width={600} // Set your desired width
                                height={400} // Set your desired height
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-page1-area">
            <div className="container">
                <div className="row about-page1-inner">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
                        <div className="about-page-img-holder">
                            <Image
                                src={IntershipImage1}
                                alt="about"
                                width={300} // Set your desired width
                                height={200} // Set your desired height
                            />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
                        <div className="about-page-img-holder">
                            <Image
                                src={IntershipImage2}
                                alt="about"
                                width={300} // Set your desired width
                                height={200} // Set your desired height
                            />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
                        <div className="about-page-img-holder">
                            <Image
                                src={IntershipImage3}
                                alt="about"
                                width={300} // Set your desired width
                                height={200} // Set your desired height
                            />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
                        <div className="about-page-img-holder">
                            <Image
                                src={IntershipImage4}
                                alt="about"
                                width={300} // Set your desired width
                                height={200} // Set your desired height
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default InternshipComponent;
