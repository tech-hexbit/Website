import React from "react";

// components
import ImgCard from "./ImgCard";

// Css
import FCss from "./Css/Founders.module.css";

// img
import img1 from "./../../assets/Image 19.png";
import img2 from "./../../assets/Image 16.png";

export default function Founders() {
  return (
    <div className={FCss.mDIv}>
      <p className={FCss.Founders}>Founders</p>
      <ImgCard
        img={img1}
        name="Tathagat Choudhary"
        des="NIFT (Gold Medallist) Ex-Walmart, A result-oriented professional and an entrepreneur by heart, he is someone who likes challenging situations and drive impact. He believes in delivering on commitments and achieve more with the team. Enjoys working in a dynamic and multi-disciplinary environment. 

With over 14 years of experience in business management, buying, merchandising, pricing, negotiations, partnership management across omni-channels, his background lies in setting up and driving Business, Strategy, Category Management, P&L, Buying and Merchandising, Sourcing, Supply Chain Management for various categories globally, E-commerce, Customer Behavior, Consumer experience, Trend analysis & forecasting. 
His journey from a trainee in a retail startup to the business head of a large format retailer proves his ability to strategize, plan and execute across various aspect of retail."
      />
      <ImgCard
        img={img2}
        name="Anuj Prakash"
        des="A NIFTian and Ex Fab-India. The youngest sibling in his family, he is a young, enthusiastic, and adept professional with diverse experience spanning over 15 years.
      He has a keen eye for leading practices in operations and growth management. His professional experiences in a variety of roles define him as a dynamic leader in organisations like Orient Craft, Fabindia, fashionandyou.com, and utsavfashion.com.
      Anuj has rich exposure to business wherein both his elder brothers are successfully grooming businesses across sectors like Airport Services, Defence, Hospitality, and Distribution Channels."
      />
      <div className={FCss.backDaignolDivParent}>
        <div className={FCss.backDaignolDiv}></div>
      </div>
    </div>
  );
}
