import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import {
    FaEnvelope,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
} from "react-icons/fa";

const LecturerItem = ({ imageSrc, name, position }) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 diploma cse">
            <div className="single-item">
                <div className="lecturers-item-wrapper">
                    <Image src={imageSrc} alt="team" width={400} height={400} />
                    <div className="lecturers-content-wrapper">
                        <h3>{name}</h3>
                        <span>{position}</span>
                        <ul className="lecturers-social">
                            <li><a href="#"><FaEnvelope /></a></li>
                            <li><a href="#"><FaLinkedin /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaFacebook /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LecturerItem;
