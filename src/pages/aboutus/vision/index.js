import React from 'react';

const VisionPage = () => {
    return (
        <div>
            <div className="inner-page-banner-area" style={{backgroundImage: "url('img/banner/5.jpg')"}}>
                <div className="container">
                    <div className="pagination-area">
                        <h1>Our Vision</h1>
                        <ul>
                            <li><a href="#">Home</a> -</li>
                            <li>Our Vision</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="whatsapp-icon">
                <a href="https://api.whatsapp.com/send?phone=9565777770&text=I%20want%20to%20enquire%20about%20courses" target="_blank" rel="noreferrer">
                    <img src="whatsapp-icon.png" alt="WhatsApp Icon" />
                </a>
            </div>

            <div className="about-page3-area">
                <div className="container">
                    <div className="row about-page3-inner">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="about-box">
                                <h2 className="title-bar-medium-left "><a href="#">Our Vision</a></h2>
                                <p>
                                    To be a leading global practice focused institute
                                    in livestock and natural resource focused entrepreneurship & management
                                    to build capable & committed professionals through innovation in imparting education,
                                    training & research
                                    for a just, equitable and sustainable society.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="about-box">
                                <h2 className="title-bar-medium-left "><a href="#">Our Mission</a></h2>
                                <p>
                                    To build innovative practice oriented pedagogy for livestock & sustainable natural
                                    resource management. <br /><br />
                                    Combining traditional wisdom & practices of livestock farming with modern scientific
                                    process in value additions for efficient and sustainable natural resources
                                    management. <br /><br />
                                    To build a large cadre of competent
                                    professionals for implementations, research and entrepreneurial initiatives in
                                    Natural resource management domain. <br /><br />
                                    Build and foster culture of innovation, integration, partnershipsand sustainable
                                    approach to live happy life in harmony with Nature.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="about-box">
                                <h2 className="title-bar-medium-left "><a href="#">Our Values</a></h2>
                                <p>
                                    Excellence and Execution
                                    <br /><br />Innovation & creativity
                                    <br /><br />Transparency & accountability <br /><br />Inclusiveness & Fairness
                                    Compassion & Simplicity
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisionPage;
