import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// state
import AuthContext from "./../../../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import DCss from "./Css/display.module.css";

// img
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
  const [orderDel, setOrderDel] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/common/product/all", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        console.log(response.data.orderList);

        setOrderDel(response.data.orderList);

        setLoad(false);
      } else {
        setLoad(false);

        console.log(e);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };

  return (
    <div className={DCss.mainDiv}>
      <div className={DCss.top}>
        <div className={DCss.search}>
          <input type="text" placeholder="Search your product here.." />
        </div>
        <div className={DCss.button}>
          <Link to="/me/addProduct" className="LinkStyle">
            <button>+ Add product</button>
          </Link>
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
                    <Link
                      to="/products/650bc24250c9d6985943bf3d"
                      className="LinkStyle"
                    >
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
                    </Link>
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
