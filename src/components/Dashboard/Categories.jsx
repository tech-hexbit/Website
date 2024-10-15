import React, { useState, useEffect, useContext, useRef } from "react";
import Header from "./MainParts/Header";
import DataMain from "./Categories/DataMain";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import Ccss from "./Css/Categories.module.css";
import DCss from "./product/Css/display.module.css";

export default function Categories() {
  const [showFilter, setFilter] = useState(false);
  const [orderlist, setorderlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prodcutsCount, setProdcutsCount] = useState(0);
  const [max, setMax] = useState(false);
  const observerRef = useRef();

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    try {
      const response = await axios.post(
        `/api/common/product/all/${showFilter}?page=${currentPage}`,
        {
          category: [],
        },
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setorderlist((prev) => [...prev, ...response.data.orderList]); // Append new products
        setProdcutsCount(response.data.prodcutsCount);
      } else {
        console.error("Error loading data");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const maxPage = () => {
    if (prodcutsCount > 0) {
      setMax(currentPage === Math.ceil(prodcutsCount / 10));
    } else {
      setMax(true);
    }
  };

  useEffect(() => {
    loadData();
  }, [currentPage, showFilter]);

  useEffect(() => {
    maxPage();
  }, [prodcutsCount, currentPage]);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !max) {
      setCurrentPage((prev) => prev + 1); // Increment currentPage when the observer is visible
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "20px",
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [max]);

  return (
    <div className={Ccss.mDiv}>
      <div className={Ccss.headerFlex}>
        <Header name="Inventory" />
        <div className={Ccss.addCsv}>
          <button onClick={() => setFilter(!showFilter)}>
            {showFilter ? "Reset" : "Low Inventory"}
          </button>
        </div>
      </div>

      <DataMain />

      <div className={Ccss.middlecontent}>
        <div className={Ccss.middle}></div>
        <div id="wrap" className={Ccss.tableCat}>
          <table className={Ccss.tableCatTTag}>
            {orderlist.length > 0 ? (
              <>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Available Inventory</th>
                  <th>Total Orders</th>
                  <th>Shipping Time</th>
                  <th>Return Window</th>
                  <th>Published on</th>
                </tr>
                {orderlist.map((val, key) => (
                  <tr key={key}>
                    <td>{val.descriptor.name}</td>
                    <td>₹ {val.price.value.toFixed(2)}</td>
                    <td>{val.quantity.maximum.count}</td>
                    <td>{val.totalSold}</td>
                    <td>{val["@ondc/org/time_to_ship"]}</td>
                    <td>{val["@ondc/org/return_window"]}</td>
                    <td>{val.when.date}</td>
                  </tr>
                ))}
              </>
            ) : (
              <p className="NoOrders">No Orders</p>
            )}
          </table>
          <p className={DCss.showingPTag}>
            Showing {orderlist.length} of <b>{prodcutsCount}</b> results
          </p>
        </div>
      </div>

      {/* Intersection Observer target */}
      <div ref={observerRef} style={{ height: "20px" }}></div>
    </div>
  );
}
