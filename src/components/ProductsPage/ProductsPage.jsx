import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// components
import Box from "../Product/Box";
import Des from "../Product/Des";
import Offers from "../Product/Offers";
import SizeBox from "../Product/SizeBox";
import Rating from "../Product/Rating";
import ColorBox from "../Product/ColorBox";
import EditFeatures from "../Product/EditFeatures";
import EditServices from "../Product/EditServices";
import Header from "./../Dashboard/MainParts/Header";
import RatingndReview from "../Product/RatingndReview";
import ProductDescription from "../Product/ProductDescription";

// MicroInteraction
import Load from "../../MicroInteraction/LoadBlack";

// css
import PPCss from "./Css/ProductPage.module.css";
import odcss from "./../Dashboard/Css/Orderdetails.module.css";

export default function ProductsPage() {
  const [res, setres] = useState();
  const [load, setLoad] = useState(false);
  const [change, setChange] = useState(false);
  const [sliderData, setSliderData] = useState([]);

  const { id } = useParams();

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const loadProducts = async () => {
    if (id !== "") {
      setLoad(true);

      try {
        const response = await axios.get(`/api/common/product/details/${id}`, {
          headers: { Authorization: `${authCtx.token}` },
        });

        if (response.data.success) {
          setLoad(false);

          setSliderData(response.data.ProductDetail.descriptor.images[0]);

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

  const handleClick = (index) => {
    setSliderData(res.descriptor.images[index]);
  };

  const handleLeft = () => {
    const currentIndex = res.descriptor.images.findIndex(
      (img) => img.id === sliderData.id
    );
    if (currentIndex === -1) {
      return;
    }
    const previousIndex =
      (currentIndex - 1 + res.descriptor.images.length) %
      res.descriptor.images.length;
    setSliderData(res.descriptor.images[previousIndex]);
  };

  const handleNext = () => {
    if (sliderData.id === res.descriptor.images.length - 1) {
      setSliderData(res.descriptor.images[0]);
    } else {
      setSliderData(res.descriptor.images[sliderData.id + 1]);
    }
  };

  useEffect(() => {
    loadProducts();

    setChange(false);
  }, [, change]);

  return (
    <div className={PPCss.mDiv}>
      {/* Header */}
      <div className={odcss.header}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-left"
          className={odcss.leftArrow}
          onClick={goBack}
        >
          <path d="m15 18-6-6 6-6" />
        </svg>

        {res && (
          <>
            <Header name={`Product ID : #${res._id.slice(-4)}`} />
          </>
        )}
      </div>

      {load ? (
        <div className="loadCenterDiv">
          <Load />
        </div>
      ) : (
        <>
          {res ? (
            <div className={PPCss.divDiv}>
              <div className={PPCss.leftDiv}>
                <div className={PPCss.upper}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-left"
                    className={PPCss.arrow}
                    onClick={handleLeft}
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>

                  <div className={PPCss.center}>
                    <img src={sliderData} className={PPCss.image} />
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-right"
                    className={PPCss.arrow}
                    onClick={handleNext}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
                <div className={PPCss.imageContainer}>
                  {res.descriptor.images.map((data, key) => (
                    <img
                      src={data}
                      key={key}
                      onClick={() => handleClick(key)}
                      className={PPCss.imgs}
                    />
                  ))}
                </div>
                <div className={PPCss.buttons}>
                  <button className={PPCss.button1}>GO TO INVENTORY</button>
                  <button className={PPCss.button3}>DELETE</button>
                </div>
              </div>
              <div className={PPCss.rightDiv}>
                <p className={PPCss.titleName}>{res.descriptor.name}</p>
                <p className={PPCss.pID}>Product id: {res._id}</p>
                <p className={PPCss.pPublished}>Seller:seller</p>
                <p className={PPCss.pPublished}>
                  {" "}
                  Published on: {res.when.date}
                </p>
                <div className={PPCss.boxmDiv}>
                  <Box
                    title="Price"
                    value={`₹ ${res.price.maximum_value}`}
                    up="price.maximum_value"
                    id={res._id}
                    setChange={setChange}
                    placeholderLabel="Updated Price"
                  />
                  <Box
                    title="Orders"
                    value={`₹ ${res.price.maximum_value}`}
                    up="price.maximum_value"
                    id={res._id}
                    setChange={setChange}
                    placeholderLabel="Updated Orders"
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
                    value={`₹ ${res.price.maximum_value}`}
                    up="price.maximum_value"
                    id={res._id}
                    setChange={setChange}
                    placeholderLabel="Updated Tax"
                  />
                  <Box
                    title="Discount %"
                    value={`₹ ${res.price.maximum_value}`}
                    up="price.maximum_value"
                    id={res._id}
                    setChange={setChange}
                    placeholderLabel="Updated Discount"
                  />
                </div>

                <ColorBox />
                <SizeBox />
                <Des res={res} id={res._id} setChange={setChange} />
                <div className={PPCss.container}>
                  <EditFeatures label={"features"} />
                  <EditServices label={"services"} />
                </div>
                <Offers />
                <ProductDescription />
                <RatingndReview />
              </div>
            </div>
          ) : (
            <p>No Orders</p>
          )}
        </>
      )}
    </div>
  );
}
