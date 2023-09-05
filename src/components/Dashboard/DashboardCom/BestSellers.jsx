import React from "react";

import image from "../../../assets/dashboard/tablerow.png";

import BSCss from "./css/bestSeller.module.css";

const data = [
  {
    col1Image: image,
    col1Text: "Bentwood chair",
    col2: "₹ 10,769",
    col3: "899",
    col4Top: "89K",
    col4Bottom: "Instock",
    col5: "5.0",
  },
  {
    col1Image: image,
    col1Text: "Nike shoes",
    col2: "₹ 6,999",
    col3: "1209",
    col4Top: "71K",
    col4Bottom: "Instock",
    col5: "5.0",
  },
  {
    col1Image: image,
    col1Text: "One seater sofa",
    col2: "₹ 21,769",
    col3: "1101",
    col4Top: "89",
    col4Bottom: "Out of stock",
    col5: "4.9",
  },
];

export default function BestSellers() {
  return (
    <div className={BSCss.mainDiv}>
      <div className={BSCss.heading}>Best sellers</div>
      <div className={BSCss.table}>
        <table style={{ borderCollapse: "collapse" }}>
          <tr>
            <th id={BSCss.th} className={BSCss.product}>
              Product
            </th>
            <th id={BSCss.th} className={BSCss.amount}>
              Amount
            </th>
            <th id={BSCss.th} className={BSCss.sales}>
              Sales
            </th>
            <th id={BSCss.th} className={BSCss.stock}>
              Stock
            </th>
            <th id={BSCss.th}>Ratings</th>
          </tr>
          {data.map((element, i) => {
            return (
              <tr key={i}>
                <td data-cell="Product" id={BSCss.td} className="prod">
                  <div className={BSCss.col1}>
                    <div className={BSCss.image}>
                      <img src={element.col1Image} />
                    </div>
                    <div>{element.col1Text}</div>
                  </div>
                </td>
                <td data-cell="Amount" id={BSCss.td}>
                  {element.col2}
                </td>
                <td data-cell="Sales" id={BSCss.td}>
                  {element.col3}
                </td>
                <td data-cell="Stock" id={BSCss.td} className="stock">
                  <div>
                    <div>{element.col4Top}</div>
                    {element.col4Bottom == "Instock" && (
                      <div style={{ color: "#4BB543" }}>
                        {element.col4Bottom}
                      </div>
                    )}
                    {element.col4Bottom == "Out of stock" && (
                      <div style={{ color: "#D0342C" }}>
                        {element.col4Bottom}
                      </div>
                    )}
                  </div>
                </td>
                <td data-cell="Ratings" id={BSCss.td}>
                  {element.col5}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
