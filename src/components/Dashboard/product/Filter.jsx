import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// components
import Tags from "./Tags";

// css
import FCss from "./Css/filter.module.css";

// state
import AuthContext from "./../../../store/auth-context";

export default function Filter({ filteredlist, setfilteredlist }) {
  const [load, setLoad] = useState(false);
  const [unique, setunique] = useState([]);
  const [orderDel, setOrderDel] = useState([]);
  const [category, setcategory] = useState([]);
  const [allcategory, setallcategory] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const u = (allcategory) => [...new Set(allcategory)];
    setunique(u(allcategory));
  }, [allcategory]);

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get("/api/common/product/all", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setOrderDel(response?.data?.orderList);

        response?.data?.orderList?.forEach((order) => {
          setallcategory((prevState) => [...prevState, order.category_id]);
        });

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

      // orderDel?.forEach((orderDel) => {
      //   if (orderDel.category_id === e.target.value) {
      //     setfilteredlist([orderDel]);
      //   } else {
      //   }
      // });
    } else {
      const arr = category.filter((c) => c !== e.target.value);
      setcategory(arr);

      // const arr2 = filteredlist.filter((c) => c !== e.target.value);
      // setfilteredlist(arr2);

      // console.log(arr + " <-- category");
      // console.log("filteredlist");
      // console.log(filteredlist);
    }
  };

  useEffect(() => {}, [category]);

  return (
    <div className={FCss.mainDiv}>
      <div className={FCss.div1}>
        <div className={FCss.heading}>Filters</div>
        <div className={FCss.tags}>
          {category.length > 0 ? (
            <>
              {category?.map((val, key) => {
                return <Tags key={key} text={val} />;
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={FCss.div1}>
        <div className={FCss.heading}>Category</div>
        <div>
          {unique?.map((val, key) => {
            return (
              <div className={FCss.categoryOption} key={key}>
                {val}
                <input
                  type="checkbox"
                  onChange={(val) => handlechange(val)}
                  value={val}
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
