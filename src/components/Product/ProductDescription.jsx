import React from "react";

//css
import PDCss from'./Css/ProductDesc.module.css'


export default function ProductDescription() {
  return (
    <div className={PDCss.mDiv}>
         <p className={PDCss.editHead}>Edit</p>
         <p className={PDCss.subTitlePTag}>Product description :</p>
         <div className={PDCss.list}>
            <table>
              <tr>
                <td className={PDCss.types}>Category :</td>
                <td className={PDCss.ans}>Shoes</td>
              </tr>
              <tr>
                <td className={PDCss.types}>Brand :</td>
                <td className={PDCss.ans}>Adidas</td>
              </tr>
              <tr>
                <td className={PDCss.types}>Color :</td>
                <td className={PDCss.ans}>Navy Blue</td>
              </tr>
              <tr>
                <td className={PDCss.types}>Material :</td>
                <td className={PDCss.ans}>Synthetic light weight</td>
              </tr>
              <tr>
                <td className={PDCss.types}>Weight :</td>
                <td className={PDCss.ans}>950 g</td>
              </tr>
              <tr>
                <td className={PDCss.types}>Dimensions :</td>
                <td className={PDCss.ans}>33.5 x 21 x 13.5 cm</td>
              </tr>
              <tr>
                <td className={PDCss.types}>Department :</td>
                <td className={PDCss.ans}>Men's</td>
              </tr>
              <tr>
                <td className={PDCss.types}>Manufacturer :</td>
                <td className={PDCss.ans}>Adidas India Marketing Private Ltd</td>
              </tr>
            </table>
         </div>
    </div>
  );
}
