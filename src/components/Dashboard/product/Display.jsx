// import React from 'react'

import DCss from "./Css/display.module.css";

import image from "../../../assets/dashboard/tablerow.png";

const data = [
  {
    image: image,
    col1TextTop: "Urban Ladder Pashe chair",
    col1TextBottom: "Furniture",
    price: "₹ 9,000",
    stock: "74",
    orders: "32",
    date: "10-02-2021",
    time: "10:00AM",
  },
  {
    image: image,
    col1TextTop: "Urban Ladder Pashe chair",
    col1TextBottom: "Furniture",
    price: "₹ 9,000",
    stock: "74",
    orders: "32",
    date: "10-02-2021",
    time: "10:00AM",
  },
  {
    image: image,
    col1TextTop: "Urban Ladder Pashe chair",
    col1TextBottom: "Furniture",
    price: "₹ 9,000",
    stock: "74",
    orders: "32",
    date: "10-02-2021",
    time: "10:00AM",
  },
  {
    image: image,
    col1TextTop: "Urban Ladder Pashe chair",
    col1TextBottom: "Furniture",
    price: "₹ 9,000",
    stock: "74",
    orders: "32",
    date: "10-02-2021",
    time: "10:00AM",
  },
  {
    image: image,
    col1TextTop: "Urban Ladder Pashe chair",
    col1TextBottom: "Furniture",
    price: "₹ 9,000",
    stock: "74",
    orders: "32",
    date: "10-02-2021",
    time: "10:00AM",
  },
  {
    image: image,
    col1TextTop: "Urban Ladder Pashe chair",
    col1TextBottom: "Furniture",
    price: "₹ 9,000",
    stock: "74",
    orders: "32",
    date: "10-02-2021",
    time: "10:00AM",
  },
  {
    image: image,
    col1TextTop: "Urban Ladder Pashe chair",
    col1TextBottom: "Furniture",
    price: "₹ 9,000",
    stock: "74",
    orders: "32",
    date: "10-02-2021",
    time: "10:00AM",
  },
  {
    image: image,
    col1TextTop: "Urban Ladder Pashe chair",
    col1TextBottom: "Furniture",
    price: "₹ 9,000",
    stock: "74",
    orders: "32",
    date: "10-02-2021",
    time: "10:00AM",
  },
  {
    image: image,
    col1TextTop: "Urban Ladder Pashe chair",
    col1TextBottom: "Furniture",
    price: "₹ 9,000",
    stock: "74",
    orders: "32",
    date: "10-02-2021",
    time: "10:00AM",
  },
];

export default function Display() {
  return (
    <div className={DCss.mainDiv}>
      <div className={DCss.top}>
        <div className={DCss.search}>
          <input type="text" placeholder="Search your product here.." />
        </div>
        <div className={DCss.button}>
          <button>+ Add product</button>
        </div>
      </div>
      <div className={DCss.table}>
        <table style={{ borderCollapse: "collapse" }}>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th id={DCss.stock}>Stock</th>
            <th id={DCss.orders}>Orders</th>
            <th id={DCss.published}>Published on</th>
            <th>Action</th>
          </tr>
          {data.map((element, i) => {
            return (
              <>
                <tr key={i}>
                  <td id={DCss.checkBox}>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className={DCss.row} id={DCss.col1}>
                    <div className={DCss.col1}>
                      <div className={DCss.image}>
                        <img src={element.image} />
                      </div>
                      <div className={DCss.col1Text}>
                        <div className={DCss.textTop}>
                          {element.col1TextTop}
                        </div>
                        <div className={DCss.textBottom}>
                          Category : {element.col1TextBottom}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={DCss.row} id={DCss.price}>
                    {element.price}
                  </td>
                  <td className={DCss.row} id={DCss.stock}>
                    {element.stock}
                  </td>
                  <td className={DCss.row} id={DCss.orders}>
                    {element.orders}
                  </td>
                  <td className={DCss.row}>
                    <div className={DCss.col5}>
                      <div className={DCss.textTop}>{element.date}</div>
                      <div className={DCss.textBottom}>{element.time}</div>
                    </div>
                  </td>
                  <td className={DCss.row} id={DCss.col6}>
                    <div className={DCss.dots}>
                      <div style={{ marginTop: "-5px" }}>...</div>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
      <div className={DCss.bottom}>
        <div></div>
        <div className={DCss.pages}>
          <div className={DCss.arrow}>{`<<`}</div>
          <div className={DCss.numbers}>
            <div className={DCss.active}>1</div>
            <div className={DCss.inactive}>2</div>
            <div className={DCss.inactive}>3</div>
          </div>
          <div className={DCss.arrow}>{`>>`}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
