import React from "react";
import axios from "axios";

// components
import Box from "./../components/Product/Box";
import Des from "./../components/Product/Des";
import SizeBox from "./../components/Product/SizeBox";
import ColorBox from "./../components/Product/ColorBox";
import { useEffect, useContext, useState } from "react";

// css
import PPCss from "./Css/ProductPage.module.css";
import { useParams } from "react-router-dom";
import AuthContext from "../store/auth-context";

export default function ProductsPage() {
  const [res, setres] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProducts();
  }, []);

  const authCtx = useContext(AuthContext);

  const loadProducts = async () => {
    try {
      console.log(id);
      const response = await axios.get(`/api/common/product/details/${id}`, {
        headers: { Authorization: `${authCtx.token}` },
      });
      console.log(response);
      setres(response?.data?.ProductDetail);
      console.log(res);
      return response.data.ProductDetails;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={PPCss.mDiv}>
      <p className={PPCss.AddHPTag}>Product Details</p>

      {res?.length > 0 ? (
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
              <Box res={res} />
              <Box res={res} />
              <Box res={res} />
              <Box res={res} />
            </div>

            <ColorBox res={res} />
            <SizeBox res={res} />
            <Des res={res} />
          </div>
        </div>
      ) : (
        <p>No Orders</p>
      )}
    </div>
  );
}
