import React from "react";
import star from './../../assets/Vector.png'
//css
import RRCss from'./Css/RatingReview.module.css'
import StarRating from "./StarRating";
import People from "./People";


export default function RatingndReview() {
  return (
    <div className={RRCss.mDiv}>
         <p className={RRCss.subTitlePTag}>Ratings & reviews :</p>
        <div className={RRCss.leftright}>
         <div className={RRCss.left}>
            {/* //left */}
            <div className={RRCss.stars}>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <p>4.5 out of 5</p>
            </div>
            <p className={RRCss.review}>Total 50.8k reviews</p>
            <div className={RRCss.starCount}>
                <StarRating label={'5'} count={'2123'}/>
                <StarRating label={'4'} count={'1092'}/>
                <StarRating label={'3'} count={'324'}/>
                <StarRating label={'2'} count={'51'}/>
                <StarRating label={'1'} count={'7'}/>
            </div>
         </div>
         {/* right */}
         <div className={RRCss.right}>
            <People name={'Ramesh'} message={'It is light weight shoes for sports as well as casual use.'}></People>
            <People name={'Suresh'} message={'Good Quality.'}/>
            <People name={'Mahesh'} message={'It is light weight shoes for sports as well as casual use.'}/>
         </div>
        </div>
    </div>
  );
}
