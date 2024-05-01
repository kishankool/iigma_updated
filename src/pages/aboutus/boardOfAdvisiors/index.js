import React from 'react';
import Image1 from '../../../../public/team/3.jpg';
import DefaultImage from '../../../../public/default.jpg'
import Banner from '../../../../public/banner/5.jpg'
import Image2 from '../../../../public/team/2.jpg';
import BoardAdvisior from '../../../components/boardAdvisior'
// Assuming this is the correct path to your image
import Image from 'next/image';

const Lecturers = () => {
    return (
        <div className="row featuredContainer" >
          
           <div className="inner-page-banner-area" style={{backgroundImage: "url('Banner')"}}>
            <div className="container">
                <div className="pagination-area">
                    <h1>Our Board Of Advisors</h1>
                    <ul>
                        <li><a href="#">Home</a> -</li>
                        <li>Board Of Advisors</li>
                    </ul>
                </div>
            </div>
        </div>
            
            {/* Add content for other lecturers similarly */}
            <BoardAdvisior  imageSrc={Image1}
                name="Mr Bhishma Singh"
                position="Executive Director, The Goat Trust" />

                
            <BoardAdvisior  imageSrc={DefaultImage}
                name="Mr Dinesh Awasthi"
                position="Ex Director, EDII" />

                
            <BoardAdvisior  imageSrc={DefaultImage}
                name="Dr Manoj Mishra"
                position="Ex Senior Faculty of EDII" />

                
            <BoardAdvisior  imageSrc={DefaultImage}
                name="Mr. Ashok Mathur"
                position="Ex CGM NABARD" />

                
            <BoardAdvisior  imageSrc={Image2}
                name="Mr Ujjwal Sarkar"
                position="Trustee The Goat Trust & Ex Managing Director IIGM" />

            <BoardAdvisior  imageSrc={DefaultImage}
                name="Dr. James Nell"
                position="Head TP & Technical Support, World Vision Of India" />

                
        </div>
    );
};

export default Lecturers;
