// LecturerItem.js

import React from 'react';
import AboutUsNav from '../../../components/aboutUsNav/index'
import BoardAdvisior from '../../../components/boardAdvisior/index'
import SanjeevImage from "../../../../public/team/1.jpg";
import BhismaImage from "../../../../public/team/3.jpg";
import UjjwalImage from "../../../../public/team/2.jpg";
import SaurabhImage from "../../../../public/team/4.jpg";
import AshishImage from "../../../../public/team/5.jpg";
import VinayImage from "../../../../public/team/6.jpg";
import DkImage from "../../../../public/team/9.jpg";
import AnkitImage from "../../../../public/team/7.jpg";
import Default from "../../../../public/default.jpg";
import PankageImage from "../../../../public/team/8.jpg";


const FacultyProfile = () => {
  return (
    <div className="row featuredContainer">
    <AboutUsNav pageName="Faculty Profile" pageType="Faculty Profile"/>
    <BoardAdvisior imageSrc={SanjeevImage}
                name="Prof. Sanjeev Singh"
                position="Director, The Goat Trust"/>
        <BoardAdvisior imageSrc={BhismaImage}
            name="Mr. Bhishm Singh"
        position="Executive Director, The Goat Trust"/>
         <BoardAdvisior imageSrc={UjjwalImage}
            name="Mr. Ujjval Sarkar"
        position="Trustee The Goat Trust & Ex Managing Director IIGMA"/>
         <BoardAdvisior imageSrc={SaurabhImage}
            name="Mr. Saurabh Gupta"
        position="Veterinary from TDU 11+ Years experience"/>
         <BoardAdvisior imageSrc={AshishImage}
            name="Dr. Ashish Kumar"
        position="Veterinary Graduate. 6+ years of experience"/>
         <BoardAdvisior imageSrc={VinayImage}
            name="Mr Vinay Gautam"
        position="CEO Pashubajar.com IIM Lucknow Strategic Management"/>
         <BoardAdvisior imageSrc={DkImage}
            name="Mr. Dharmendra DK"
        position="15 years of experience Community Institution Building , Project Implementation"/>
         <BoardAdvisior imageSrc={AnkitImage}
            name="Dr. Ankit Kumar"
        position="B.V. Sc. & A.H. Experience - 7 year"/>
         <BoardAdvisior imageSrc={PankageImage}
            name="Dr. Pankaj Yadav"
        position="B.V. Sc. & A.H. Experience - 5 year"/>
         <BoardAdvisior imageSrc={Default}
            name="Vikash Singh"
        position="CA IPCC: Intermediate(IIPC) Pursuing from ICAI"/>






      
    </div>
  );
};

export default FacultyProfile;
