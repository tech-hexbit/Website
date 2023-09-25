import React from "react";

// components
import Tags from "./Tags";

// css
import FCss from "./Css/filter.module.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
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

export default function Filter() {
  const [orderDel, setOrderDel] = useState([]);
  const [load, setLoad] = useState(false);
  const [records, setrecords] = useState(orderDel);
  const [category, setcategory] = useState([]);

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
        // orderDel?.forEach((order) => {
        //   //setcategory((prevState) => [...prevState, order?.category_id]);
        // });

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

  //console.log(category);
  
  const handlechange=(e)=>{
    console.log(e.target.value)
    if(e.target.checked){
    setcategory(prevState=>[...prevState,e.target.value])
      
    }else{
      const arr = category.filter((c)=> c !== e.target.value)
      setcategory(arr);
    }
  }

  return (
    <div className={FCss.mainDiv}>
      <div className={FCss.div1}>
        <div className={FCss.heading}>Filters</div>
        <div className={FCss.tags}>
          {category?.map((e, i) => {
            return (
              <Tags key={i} text={e}  />
            );
          })}
        </div>
      </div>
      <div className={FCss.div1}>
        <div className={FCss.heading}>Category</div>
        <div>
          <div className={FCss.categoryOption}>
            Fashion <input type="checkbox" onChange={(e) => handlechange(e)} value="fashion"/>
          </div>
          <div className={FCss.categoryOption}>
            Grocery <input type="checkbox" className={FCss.checkbox} onChange={(e) => handlechange(e)} value="Grocery" />
          </div>
          <div className={FCss.categoryOption}>
            Furniture <input type="checkbox" onChange={(e) => handlechange(e)} value="Furniture" />
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
