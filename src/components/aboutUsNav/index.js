import React from 'react'
import styles from "../carousel/carousel.module.css"

const AboutUsNav=(props)=>{
  return (
    <div className="inner-page-banner-area" style={{backgroundImage: "url('img/banner/5.jpg')"}}>
                <div className="container">
                    <div className="pagination-area">
                        <h1>{props.pageName}</h1>
                        <ul>
                            <li><a href="#">Home</a> -</li>
                            <li>{props.pageType}</li>
                        </ul>
                    </div>
                </div>
  </div>
  );
}

export default AboutUsNav
