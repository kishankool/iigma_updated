import Image from 'next/image';
import FiledImage from '../../../../public/pg.jpg'
import classRoomimage from '../../../../public/classroom.jpg'
import PlayGround from '../../../../public/resid.jpg'
import AboutUsNav from '../../../components/aboutUsNav/index'
const Inftarastructure = () => {
    return (
        <div className="about-page1-area">
            <AboutUsNav pageName="Infrastructure
" pageType="Infrastructure
"/>
            <div className="container">
                <div className="row about-page1-inner">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-content-holder">
                            <div className="content-box">
                                <h2>International Institute Of Goat Management</h2>
                                <p>
                                    The Institute is located on 10 Acres of verdant campus 8 Kms from Munshi Pulia Metro
                                    Station. The entire Solar Powered and Wi-Fi enabled campus houses the faculty
                                    residences, office complex, library and computer center complex, digital class room
                                    complex, residences for gents, ladies. The Institute has a floodlit volley ball
                                    court, Field Practice Farm, and Units and Production and Marketing centres for
                                    Practice.
                                    The Institute has a separate complex for Cafeteria with multiple kitchens for Veg
                                    and Non Vegetarian servings.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-img-holder">
                            <Image
                                src={FiledImage}
                                alt="about"
                                width={600} // Set your desired width
                                height={400} // Set your desired height
                            />
                        </div>
                    </div>
                </div>
                <div className="row about-page1-inner">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-content-holder">
                            <div className="content-box">
                                <h2>Class Room Complex</h2>
                                <p>
                                    The Class Room Complex includes air-conditioned lecture halls,
                                    seminar rooms, multimedia hall, computer labs, library, and common facility
                                    center. The class rooms are equipped with educational audio/video
                                    equipment; tablet PCs, computers with large monitors, LCD projectors, and network
                                    connections. While most classes are held in the lecture halls, some prefer the lawn
                                    adjacent to the classroom complex for education with the soulful touch of nature.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-img-holder">
                            <Image
                                src={classRoomimage}
                                alt="about"
                                width={600} // Set your desired width
                                height={400} // Set your desired height
                            />
                        </div>
                    </div>
                </div>
                <div className="row about-page1-inner">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-content-holder">
                            <div className="content-box">
                                <h2>Residential Facilities</h2>
                                <p>
                                    With academic activities round-the-clock, students are required to live on the
                                    campus. There are separate Residences for gents and ladies. All the rooms have
                                    24-hour Internet connectivity through the latest Wi-Fi technology. With the
                                    installation of laser printer and photocopying machines, round-the-clock printing
                                    and copying facilities are available to the students. The Residences also have a Multi-purpose Hall,
                                    Cooperative Store, and a Book Club. The Residence is equipped with washing machines, water coolers, telephones, televisions,
                                    and indoor games like carrom and table tennis. We also have facilities for
                                    undisturbed power supply to all the Residences during power failure. The Mess is
                                    managed by a student committee and serves both vegetarian and non-vegetarian
                                    meals. A doctor is available for consultation in the campus
                                    from 6.00 p.m. to 7.00 p.m. every day except on Sundays. A dispensary is set up
                                    in the University Campus where the doctor is available from 5.00 p.m. to 7.00 p.m.
                                    every day except on Sundays. A full-time nurse will be assigned to help
                                    the residents for consulting any health concerns. All the residences have security
                                    guards to safeguard and to stop
                                    any outsiders entering into the residences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-img-holder">
                            <Image
                                src={PlayGround}
                                alt="about"
                                width={600} // Set your desired width
                                height={400} // Set your desired height
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inftarastructure;
