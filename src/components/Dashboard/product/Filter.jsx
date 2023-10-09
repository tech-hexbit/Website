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
  const [onFil, offFil] = useState(false);
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
    } else {
      const arr = category.filter((c) => c !== e.target.value);
      setcategory(arr);
    }
  };

  useEffect(() => {
    let newFIltered = [];

    if (category.length > 0) {
      filteredlist.forEach((orderDel) => {
        category.forEach((e) => {
          if (orderDel.category_id === e) {
            console.log("Match");
            console.log(orderDel.category_id === e);
            console.log(`Match ${orderDel.category_id} === ${e}`);

            newFIltered.push(orderDel);
          }
        });
      });

      setfilteredlist(newFIltered);

      // const filteredOrders =
      //   category.length > 0
      //     ? filteredlist.filter((order) => {
      //         return [order].some((item) => {
      //           category.forEach((e) => {
      //             console.log(
      //               "more than 0 --> " +
      //                 category.length +
      //                 `item.category_id === e --> ${item.category_id} === ${e}` +
      //                 item.category_id ===
      //                 e
      //             );
      //             item.category_id === e;
      //           });
      //         });
      //       })
      //     : filteredlist;
    } else {
      setfilteredlist(orderDel);
    }
  }, [category]);

  return (
    <div className={FCss.mainDiv} id={onFil ? "onCat" : "offCat"}>
      <div className={FCss.div1}>
        <div className={FCss.heading}>
          {/* Filters */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-filter"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
        </div>
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

      {/* <div className={FCss.div1}>
        <select className={FCss.select}>
          <option hidden>Brands</option>
        </select>
      </div> */}

      {/* <div className={FCss.div1}>
        <select className={FCss.select}>
          <option hidden>Price</option>
        </select>
      </div> */}

      {/* <div className={FCss.div1}>
        <select className={FCss.select}>
          <option hidden>Discounts</option>
        </select>
      </div> */}

      {/* <div className={FCss.div1} id={FCss.rate}>
        <select className={FCss.select}>
          <option hidden>Rating</option>
        </select> 
      </div>*/}

      <div
        className={FCss.floatRightArrowDiv}
        onClick={() => {
          offFil(!onFil);
        }}
      >
        {onFil ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-left"
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg>
          </>
        )}
      </div>
    </div>
  );
}
