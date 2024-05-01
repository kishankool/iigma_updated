import React from 'react';

const RecognitionPage = () => {
    return (
        <div>
            <div className="inner-page-banner-area" style={{backgroundImage: "url('img/banner/5.jpg')"}}>
                <div className="container">
                    <div className="pagination-area">
                        <h1>Recognition</h1>
                        <ul>
                            <li><a href="#">Home</a> -</li>
                            <li>Recognition</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="whatsapp-icon">
                <a href="https://api.whatsapp.com/send?phone=9565777770&text=I%20want%20to%20enquire%20about%20courses" target="_blank" rel="noreferrer">
                    <img src="whatsapp-icon.png" alt="WhatsApp Icon" />
                </a>
            </div>

            <div className="about-page1-area">
                <div className="container">
                    <div className="row about-page1-inner">
                        <div className="col-xl-12 col-lg-12 col-md-6 col-sm-12">
                            <div className="about-page-content-holder">
                                <div className="content-box">
                                    <h2>Recognition</h2>
                                    <p>
                                        IIGM curriculum has been developed over 15 years along with the journey of The Goat
                                        Trust as it established a well-tested livelihood model and income generation for
                                        grassroots livestock extension workers. IIGM sees itself as the culmination of The
                                        Goat Trust to share with young professionals the learnings of the founding members.
                                        IIGM also shares direct linkage with The Goat Trust experts and repository to be
                                        updated and dynamics as per changing needs of the sector.
                                        <br /><br />
                                        The institute faculty and curriculum have been recognized by the Academic body of CV
                                        Raman University – Madhya Pradesh and DUVASU Veterinary Institute Mathura for its
                                        unique pedagogy and field exposure modules having immense potential to shape the
                                        future academic programs in the country.
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

export default RecognitionPage;
