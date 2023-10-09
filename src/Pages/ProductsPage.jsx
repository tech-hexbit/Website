import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "../store/auth-context";

// components
import Box from "./../components/Product/Box";
import Des from "./../components/Product/Des";
import SizeBox from "./../components/Product/SizeBox";
import ColorBox from "./../components/Product/ColorBox";

// css
import PPCss from "./Css/ProductPage.module.css";

export default function ProductsPage() {
  const [res, setres] = useState();

  const { id } = useParams();

  useEffect(() => {
    loadProducts();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadProducts = async () => {
    try {
      const response = await axios.get(`/api/common/product/details/${id}`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setres(response?.data?.ProductDetail);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(res.price.maximum_value);
  }, [res]);
  return (
    <div className={PPCss.mDiv}>
      <p className={PPCss.AddHPTag}>Product Details</p>

      {res ? (
        <div className={PPCss.divDiv}>
          <div className={PPCss.leftDiv}>
            <img
              src={res.descriptor.images[0]}
              alt=""
              className={PPCss.productImg}
            />
          </div>
          <div className={PPCss.rightDiv}>
            <p className={PPCss.titleName}>{res.descriptor.name}</p>
            <p className={PPCss.pID}>{res._id}</p>
            <p className={PPCss.pSeller}>seller</p>
            <p className={PPCss.pPublished}>
              Seller:seller Published on: {res.when.date}
            </p>
            <div className={PPCss.boxmDiv}>
              <Box title="Price" value={res.price.maximum_value} />
              <Box title="Stock" value={res.quantity.maximum.count} />
            </div>

            {/* <ColorBox res={res} /> */}
            {/* <SizeBox res={res} /> */}
            <Des res={res} />
          </div>
        </div>
      ) : (
        <p>No Orders</p>
      )}
    </div>
  );
}
