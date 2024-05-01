import React from 'react';
import AboutUsNav from '../../../components/aboutUsNav/index';
import Image from 'next/image';
import DirectorImage from '../../../../public/about/director.jpg';

const DirectorMessage = () => {
    return (
        <div className="about-page1-area">
          <AboutUsNav pageName="About Us" pageType="About"/>
            <div className="container">
                <div className="row about-page1-inner">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-content-holder">
                            <div className="content-box">
                                <h2>Director&apos;s Message</h2>
                                <p>
                                    Welcome to a new aspiring world of Livestock Entrepreneurship & Business management.
                                    As you are aware, Livestock is a large cash income source for rural &semi urban
                                    farmers and provides us highly nutritious foods like milk, eggs, meat and many value
                                    added products like leather, hairs and manures. Livestock has been a part of natural
                                    resources and humans has adopted its as first livelihood source since its
                                    settlement.
                                    Livestock and its integration with other natural resources provides an opportunity
                                    to live a sustainable happy life. Livestock production and its value chain has
                                    diverse employment opportunity ranging from inputs like feed,
                                    breeding, pharmacy (Health) to finance (loan/leasing/insurance) and value added
                                    products of milk, meat, where many local and global companies and establishments has
                                    been established on large scale. Government and non Government organizations,
                                    Corporate Social responsibility ( C S ) by large companies do require competent &
                                    trained professionals to manage business &development projects. With focus on Farmer
                                    Producer Organisations,
                                    need of a large number of trained &certified rural youths in livestock business
                                    management has been perceived and it will be growing as FPOs get into larger scale
                                    of business.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="about-page-img-holder">
                            <Image src={DirectorImage} className="img-responsive" alt="about" />
                        </div>
                    </div>
                </div>
                <p>
                    Rural youths need an in depth knowledge, skills and attitude to manage
                    this upcoming opportunity and may get employed in its value chain.
                    International Institute of Goat Management (IIGM) provides you an unique opportunity
                    to get skilled, develop breadth & perspectives on livestock value chain and natural
                    resource management and build your own business
                    or get employment with large business units and Farmer organization and contribute
                    to make a positive change in
                    life of rural farmers and meet customer demands with quality and competitive
                    affordable price. Linking farmers to markets has been a constant challenge where
                    livestock products provide a much better edge due to its high
                    nutritive value and growing demands.
                    Iwelcome you to this course and wish you divine power within you to be able to
                    learn, contribute and take this
                    mission to remote rural areas and build a strong efficient livestock product value
                    chain and have a life with a
                    purpose &mission. Being young, you have enough time to learn, grow and write a story
                    of your life as change maker, as entrepreneur or as an intra-preneur (contributing
                    to an organization with your innovation and skills).
                    There will be ample opportunity once you are able to imbibe course contents,
                    practice skills and build your perspectives during the course and Ibelieve &quot;Sky will
                    be limit&quot; for your creativity and action in times to come.
                    I personally wish you a joy of learning, explorations and a dream growing and
                    fulfilled to live a life happily and purposeful once you graduate and start
                    makingchange, whereit matters most.<br />
                    <br />With Compliments<br /> Prof. Sanjeev Kumar<br /> Director
                </p>
            </div>
        </div>
    );
}

export default DirectorMessage;
