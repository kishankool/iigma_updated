// layout.js
import { metadata } from '../components/PaymentPopUp/utils/metaData';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import { FaBookmark } from "react-icons/fa";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <Script
          src="https://kit.fontawesome.com/e20sdfsd9.js"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body>
        <Header />
        <marquee scrollamount="15"><h3 style={{ color: '#bf0000' }}>Welcome to the International Institute of Goat Management! <FaBookmark style={{ color: 'black'}}/> Our Courses <FaBookmark style={{ color: 'black'}}/>Livestock Entrepreneurship And Business Management (LEBM) <FaBookmark style={{ color: 'black'}}/>Commercial Goat Farming And Management <FaBookmark style={{ color: 'black'}}/>Diploma In Livestock Entrepreneurship And Business Management<FaBookmark style={{ color: 'black'}}/></h3></marquee>
        {children}
        <Footer />
      </body>
    </html>
  );
}
