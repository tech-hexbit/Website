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

export default function Filter({ resarray, setresarray }) {
  const [orderDel, setOrderDel] = useState([]);
  const [load, setLoad] = useState(false);
  const [records, setrecords] = useState(orderDel);
  const [category, setcategory] = useState([]);
  const [allcategory, setallcategory] = useState([]);
  const [uniquecat, setuniquecat] = useState([]);
  // const [resarray, setresarray] = useState([]);
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
        console.log(response?.data?.orderList);

        setOrderDel(response?.data?.orderList);
        setrecords(response?.data?.orderList);
        orderDel.forEach((order) => {
          setallcategory((prevState) => [...prevState, order?.category_id]);
        });
        //console.log(allcategory)
        const unique = (allcategory) => [...new Set(allcategory)];
        setuniquecat(unique(allcategory));
        //console.log(unique(allcategory));

        // console.log(orderDel[0]?.descriptor?.name)
        // console.log(orderDel[0]?.category_id)
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
 
  useEffect(() => {
    
  }, []);



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
          {uniquecat?.map((e) => {
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
