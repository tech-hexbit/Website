import React, { useEffect, useContext, useState } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// components
import Box from "../Product/Box";
import Des from "../Product/Des";
import SizeBox from "../Product/SizeBox";
import ColorBox from "../Product/ColorBox";

// MicroInteraction
import Load from "../../MicroInteraction/LoadBlack";

// Css
import PPN from './Css/ProductPageNew.module.css'
import PPCss from "./Css/ProductPage.module.css";


function ProductPageNew(props) {

    const [res, setres] = useState();
  const [load, setLoad] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(() => {
    loadProducts(props.id);

    window.scrollTo(0, 0);

    setChange(false);
  }, [, props.id, change]);

  const authCtx = useContext(AuthContext);

  const loadProducts = async (id) => {
    if (id !== "") {
      setLoad(true);

      try {
        const response = await axios.get(`/api/common/product/details/${id}`, {
          headers: { Authorization: `${authCtx.token}` },
        });

        if (response.data.success) {
          setLoad(false);

          setres(response?.data?.ProductDetail);
        } else {
          setLoad(false);

          console.log("error");
        }
      } catch (e) {
        setLoad(false);

        console.log(e);
      }
    }
  };

  return (
    <div>
       <div className={PPN.prodDetailMain}>
            <div  onClick={() => {
              props.setProductDel(false);
            }} >
                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </div>
            <p className={PPN.prodText}>
                Product Details
            </p>
       </div>
       <hr className={PPN.below} />

       <div className={PPN.main}>
       {load ? (
        <div className="loadCenterDiv">
          <Load />
        </div>
      ) : (
      <>
        {
            res ? (
                < div className={PPN.main}>
                <div className={PPN.left}>
                    <img
                    src={res.descriptor.images[0]}
                    alt=""
                    className={PPCss.productImg}
                    />
                    
                </div>
                <div className={PPN.right}>
                    <div className={PPN.prodDet}>
                        <p className={PPN.name}>{res.descriptor.name}</p>
                        <p className={PPN.prodId}>Product Id: {res._id} </p>
                        <p className={PPN.prodSeller}>Seller: Adidias </p>
                        <p className={PPN.prodMRP}>MRP: ₹ 200 </p>
                        <p className={PPN.prodId}>Published On: {res.when.date} </p>
                        <div className={PPN.prodBox}>
                        <Box
                            title="Selling Price"
                            value={`₹ ${res.price.maximum_value}`}
                            up="price.maximum_value"
                            id={res._id}
                            setChange={setChange}
                            placeholderLabel="Updated Price"
                        />
                        <Box
                            title="Orders"
                            value={res.quantity.maximum.count}
                            up="quantity.maximum.count"
                            id={res._id}
                            setChange={setChange}
                            placeholderLabel="Updated Stock"
                        />
                        <Box
                            title="Stock"
                            value={res.quantity.maximum.count}
                            up="quantity.maximum.count"
                            id={res._id}
                            setChange={setChange}
                            placeholderLabel="Updated Stock"
                        />
                        <Box
                            title="Tax %"
                            value={res.quantity.maximum.count}
                            up="quantity.maximum.count"
                            id={res._id}
                            setChange={setChange}
                            placeholderLabel="Updated Stock"
                        />
                        <Box
                            title="Discount %"
                            value={res.quantity.maximum.count}
                            up="quantity.maximum.count"
                            id={res._id}
                            setChange={setChange}
                            placeholderLabel="Updated Stock"
                        />

                        </div>
                        <div className={PPN.prodColor}>
                            <ColorBox
                                imgSrc="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                                label="Navel Blue"
                                code="#00007c"
                            />
                        </div>
                        <div className={PPN.prodSize}>
                            <SizeBox
                                label="S"
                            />
                        </div>
                        <div className={PPN.Desc} >
                            <Des res={res} id={res._id} setChange={setChange} />
                        </div>
                         
                    </div>
                </div>
                </div>
            ): (
                <p>No Orders</p>
        )}
      </>
        )}
       </div>
    </div>
  )
}

export default ProductPageNew