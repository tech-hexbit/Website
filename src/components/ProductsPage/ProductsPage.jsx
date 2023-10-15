import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// components
import Box from "../Product/Box";
import Des from "../Product/Des";
import SizeBox from "../Product/SizeBox";
import ColorBox from "../Product/ColorBox";

// css
import PPCss from "./Css/ProductPage.module.css";

export default function ProductsPage(props) {
  const [res, setres] = useState();

  // const { id } = useParams();

  useEffect(() => {
    loadProducts(props.id);
  }, [props.id]);

  const authCtx = useContext(AuthContext);

  const loadProducts = async (id) => {
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

  return (
    <div className={PPCss.mDiv}>
      <p className={PPCss.AddHPTag}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-move-left"
            className={PPCss.leftArrow}
            onClick={() => {
              console.log(`first`);
            }}
          >
            <path d="M6 8L2 12L6 16" />
            <path d="M2 12H22" />
          </svg>
        </span>
        Product Details
      </p>

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
              <Box
                title="Price"
                value={`₹ ${res.price.maximum_value}`}
                up="price.maximum_value"
              />
              <Box
                title="Stock"
                value={res.quantity.maximum.count}
                up="quantity.maximum.count"
              />
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
