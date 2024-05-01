// LecturerItem.js

import React from 'react';
import AboutUsNav from '../../../components/aboutUsNav/index'
import BoardAdvisior from '../../../components/boardAdvisior/index'
import Default from "../../../../public/default.jpg";


const VisitingProfile = () => {
  return (
    <div className="row featuredContainer">
         <AboutUsNav pageName="Visiting Faculty" pageType="Visiting Faculty"/>
         <BoardAdvisior imageSrc={Default}
            name="Mr Dinesh Awasthi"
        position="Ex Director, EDII"/>
        <BoardAdvisior imageSrc={Default}
            name="Dr Manoj Mishra"
        position="Ex Senior Faculty of EDII"/>
<BoardAdvisior imageSrc={Default}
            name="Dr. James Nell"
        position="Head TP & Technical Support, World Vision Of India"/>
<BoardAdvisior imageSrc={Default}
            name="Mr. Ashok Mathur"
        position="Ex CGM NABARD"/>
<BoardAdvisior imageSrc={Default}
            name="Mr. Manoj Sharma"
        position="Director, MICRO SAVE-MSC"/>
<BoardAdvisior imageSrc={Default}
            name="Mr. P. Vivekanandan"
        position="Director, MICRO SAVE-MSC"/>
<BoardAdvisior imageSrc={Default}
            name="Dr.D.K. Sadana"
        position="x. Principal Scientist, ABAGAR & NDRI"/>
<BoardAdvisior imageSrc={Default}
            name="Dr. R.S. Reddy"
        position="Sr. Faculty Member, BIRD"/>
<BoardAdvisior imageSrc={Default}
            name="Dr. D.V. Ragnekar"
        position="Consultant, Livestock Research & Development"/>
<BoardAdvisior imageSrc={Default}
            name="Mr. Manoj Gopalkrishna"
        position="CEO CARE India"/>
<BoardAdvisior imageSrc={Default}
            name="Prof N Punniamurthy"
        position="Professor and Head"/>
<BoardAdvisior imageSrc={Default}
            name="Mr. Ashok Mathur"
        position="Ex CGM NABARD"/>
<BoardAdvisior imageSrc={Default}
            name="Prof. N. Kumarvelu"
        position="Professor"/>
<BoardAdvisior imageSrc={Default}
            name="Dr. KK Updhyay"
        position="Director SWASTi"/>
<BoardAdvisior imageSrc={Default}
            name="Mr. Ashok Mathur"
        position="Ex CGM NABARD"/>
<BoardAdvisior imageSrc={Default}
            name="
            Mr. Ashok Mathur"
        position="Ex CGM NABARD"/>







      
    </div>
  );
};

export default VisitingProfile;
