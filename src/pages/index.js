// pages/index.js
import React from "react";
import Carousel from "../components/carousel/index";
import Image1 from "../../public/2-1.jpg";
import Image2 from "../../public/2-2.jpg";
import Image3 from "../../public/1-2.jpg";
import AboutArea from "@/components/aboutArea";
import FeaturedCourses from "@/components/featuredCourses";
import LecturersArea from "@/components/lecturers";
import VideoArea from "@/components/youtube";
import BrandArea from "@/components/companies";

const Home = () => {
  const items = [
    { imageUrl: Image1, altText: "Image 1" },
    { imageUrl: Image2, altText: "Image 2" },
    { imageUrl: Image3, altText: "Image 3" },
  ];
  return (
    <>
      <Carousel items={items} />
      <AboutArea />
      <FeaturedCourses />
      <LecturersArea /> 
      <VideoArea
        videoSrc="https://www.youtube.com/embed/zwbtE-vaBW0"
        videoHeading="FIVE YEARS OF IIGMA"
        content="Welcome to a new aspiring world of Livestock Entrepreneurship & Business management. As you are aware,
        Livestock is a large cash income source for rural & semi urban farmers and provides us highly nutritious foods like
        milk, eggs, meat and many value added products like leather, hairs and manures. Livestock has been a part of
        natural resources and humans has adopted its as first livelihood source since its settlement."
      />
      <VideoArea
        videoSrc="https://www.youtube.com/embed/f7Ik3pTKtq4?si=Cp9Q6_gl4DVoVIco"
        videoHeading="IIGMA ONLINE"
        content="Students of Livestock Entrepreneurship and Business
        Management are provided Internship Opportunities with
        associated organizations of IIGM and partner organizations
        through out the country.
        This year our students have secured internships in distant
        locations such as Haryana. Bihar, Noida, Unnau with Farmer
        Producer Companies, NGOs, Livestock Startups.
        Intense exposure during internships provide students with solid
        perspectives of community towards their development, practical
        issues on field and requirements for managing field based
        operations and lead businesses of grassroot social enterprises.
        Internships are a core aspect of the curriculum and regular
        mentorship and guidance are provided to students throughout the
        three months. The Fooding and Lodging arrangements are
        discussed prior with the hosting agency and safety of students
        during internships are well taken care of.
        ."
      />
      <BrandArea />
    </>
  );
};

export default Home;
