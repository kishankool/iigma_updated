import React from 'react';
import NewsItem from '../../../components/newsItem/index'
import HemantSharma from '../../../../public/news/7.jpg'
import Prem from '../../../../public/news/6.jpg'
import ChnadraKala from '../../../../public/news/5.jpg'
import Ravi from '../../../../public/news/4.jpg'
import Chanchal from '../../../../public/news/3.jpg'
import Suraj from '../../../../public/news/2.jpg'
import Ranjith from '../../../../public/news/1.jpg'
import Ruma from '../../../../public/news/8.jpg'




const NewsPage = () => {
    return (
      <div className="news-page-area">
        <div className="container">
          <div className="row">
            {/* Each news item */}
            <NewsItem
              imageSrc={HemantSharma}
              name="Hemant Sharma"
              qualification="B.Sc 2023"
              internship="Internship at Nuh Farmer Producer Company"
            />
            <NewsItem
              imageSrc={Prem}
              name="Prem Kumar Yadav"
              qualification="12th Pass"
              internship="Internship Purnia Farmer Producer Company Bihar"
            />
            <NewsItem
              imageSrc={ChnadraKala}
              name="Chandrakala Rani"
              qualification="B.C.A"
              internship="Internship Swawalambi Mahila Bakri Palak Farmer Producer Company"
            />
            <NewsItem
              imageSrc={Ravi}
              name="Ravi Pal"
              qualification="12th Pass"
              internship="Internship Nuh Farmer Producer Company"
            />
            <NewsItem
              imageSrc={Chanchal}
              name="Chanchal Pal"
              qualification="10th Pass"
              internship="Internship Nuh Farmer Producer Company"
            />
            <NewsItem
              imageSrc={Suraj}
              name="Suraj Kumar"
              qualification="12th Pass"
              internship="Internship Pashubajaar.com, Lucknow"
            />
            <NewsItem
              imageSrc={Ruma}
              name="Ruma Kumari"
              qualification="B.Sc"
              internship="Internship Pashubajaar.com, Lucknow"
            />
            <NewsItem
              imageSrc={Ranjith}
              name="Ranjit Kumar"
              qualification="B.A"
              internship="Ranjit Kumar"
            />
            {/* Add other news items similarly */}
          </div>
        </div>
      </div>
    );
  };
  export default NewsPage;