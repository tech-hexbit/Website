import React from "react";

// components
import Tags from "./Tags";

// css
import FCss from "./Css/filter.module.css";

const data = [
  "Shoes",
  "Heels",
  "Chairs",
  "Dry fruits",
  "Sofa sets",
  "Sneckers",
  "Sneckers",
];

export default function Filter() {
  return (
    <div className={FCss.mainDiv}>
      <div className={FCss.div1}>
        <div className={FCss.heading}>Filters</div>
        <div className={FCss.tags}>
          {data.map((e, i) => {
            return <Tags key={i} text={e} />;
          })}
        </div>
      </div>
      <div className={FCss.div1}>
        <div className={FCss.heading}>Category</div>
        <div>
          <div className={FCss.categoryOption}>
            Fashion <input type="checkbox" />
          </div>
          <div className={FCss.categoryOption}>
            Grocery <input type="checkbox" className={FCss.checkbox} />
          </div>
          <div className={FCss.categoryOption}>
            Furniture <input type="checkbox" />
          </div>
        </div>
      </div>
      <div className={FCss.div1}>
        <select className={FCss.select}>
          <option hidden>Brands</option>
        </select>
      </div>
      <div className={FCss.div1}>
        <select className={FCss.select}>
          <option hidden>Price</option>
        </select>
      </div>
      <div className={FCss.div1}>
        <select className={FCss.select}>
          <option hidden>Discounts</option>
        </select>
      </div>
      <div className={FCss.div1} id={FCss.rate}>
        <select className={FCss.select}>
          <option hidden>Rating</option>
        </select>
      </div>
    </div>
  );
}
