import React from "react";

// components
import Tags from "./Tags";

// css
import FCss from "./Css/filter.module.css";
import { useState, useEffect, useContext } from "react";
import axios, { all } from "axios";
import AuthContext from "./../../../store/auth-context";

const data = [
  "Shoes",
  "Heels",
  "Chairs",
  "Dry fruits",
  "Sofa sets",
  "Sneckers",
  "Sneckers",
];

export default function Filter({ filteredlist, setfilteredlist }) {
  const [orderDel, setOrderDel] = useState([]);
  const [load, setLoad] = useState(false);
  const [records, setrecords] = useState(orderDel);
  const [category, setcategory] = useState([]);
  const [allcategory, setallcategory] = useState([]);
  const [unique, setunique] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const u = (allcategory) => [...new Set(allcategory)];
    setunique(u(allcategory));
    console.log(unique);
  }, [allcategory]);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/common/product/all", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        console.log(response?.data?.orderList);

        setOrderDel(response?.data?.orderList);

        response?.data?.orderList?.forEach((order) => {
          setallcategory((prevState) => [...prevState, order.category_id]);
          console.log(allcategory);
        });

        console.log(unique(allcategory));

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

  const handlechange = (e) => {
    if (e.target.checked) {
      setcategory((prevState) => [...prevState, e.target.value]);

      orderDel?.forEach((orderDel) => {
        if (orderDel.category_id === e.target.value) {
          setfilteredlist((prevState) => [...prevState, orderDel]);
          console.log(orderDel);
        } else {
        }
      });
    } else {
      const arr = category.filter((c) => c !== e.target.value);
      setcategory(arr);
      const arr2 = filteredlist.filter((c) => c !== e.target.value);
      setfilteredlist(arr2);
    }
  };

  return (
    <div className={FCss.mainDiv}>
      <div className={FCss.div1}>
        <div className={FCss.heading}>Filters</div>
        <div className={FCss.tags}>
          {category?.map((e, i) => {
            return <Tags key={i} text={e} />;
          })}
        </div>
      </div>
      <div className={FCss.div1}>
        <div className={FCss.heading}>Category</div>
        <div>
          {unique?.map((e) => {
            return (
              <div className={FCss.categoryOption}>
                {e}{" "}
                <input
                  type="checkbox"
                  onChange={(e) => handlechange(e)}
                  value={e}
                />
              </div>
            );
          })}
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
      s
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
