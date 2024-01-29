import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// components
import Box from "../Product/Box";
import Des from "../Product/Des";
import Offers from "../Product/Offers";
import SizeBox from "../Product/SizeBox";
import ColorBox from "../Product/ColorBox";
import UpdateLabel from "../Product/UpdateLabel";
import EditFeatures from "../Product/EditFeatures";
import EditServices from "../Product/EditServices";
import RatingndReview from "../Product/RatingndReview";
import ProductDescription from "../Product/ProductDescription";

// MicroInteraction
import Load from "../../MicroInteraction/LoadBlack";

// css
import PPCss from "./Css/ProductPage.module.css";

export default function ProductsPage() {
  const [res, setres] = useState();
  const [load, setLoad] = useState(false);
  const [change, setChange] = useState(false);

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

  useEffect(() => {
    loadProducts();

    window.scrollTo(0, 0);

    setChange(false);
  }, [, change]);

  const images = [
    {
      id: 0,
      value:
        "https://rukminim2.flixcart.com/image/832/832/kq18n0w0/mobile/u/w/b/narzo-30-rmx2156-realme-original-imag45ymfpry9ecq.jpeg?q=70&crop=false",
    },
    {
      id: 1,
      value:
        "https://rukminim2.flixcart.com/image/832/832/kq18n0w0/mobile/7/y/i/narzo-30-rmx2156-realme-original-imag45ymgsgjtqux.jpeg?q=70&crop=false",
    },
    {
      id: 3,
      value:
        "https://rukminim2.flixcart.com/image/832/832/kq18n0w0/mobile/7/q/e/narzo-30-rmx2156-realme-original-imag45ymbhypjf8e.jpeg?q=70&crop=false",
    },
    {
      id: 4,
      value:
        "https://rukminim2.flixcart.com/image/832/832/kq18n0w0/mobile/z/x/f/narzo-30-rmx2156-realme-original-imag45ymjupkgkaq.jpeg?q=70&crop=false",
    },
  ];

  const [sliderData, setSliderData] = useState(images[0]);

  const handleClick = (index) => {
    console.log(index);
    setSliderData(images[index]);
  };

  const handleLeft = () => {
    const currentIndex = images.findIndex((img) => img.id === sliderData.id);
    if (currentIndex === -1) {
      return;
    }
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSliderData(images[previousIndex]);
  };

  const handleNext = () => {
    if (sliderData.id === images.length - 1) {
      setSliderData(images[0]);
    } else {
      setSliderData(images[sliderData.id + 1]);
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
            onClick={goBack}
          >
            <path d="M6 8L2 12L6 16" />
            <path d="M2 12H22" />
          </svg>
        </span>
        Product Details
      </p>

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
                    <img
                      src={sliderData.value}
                      height={300}
                      width={200}
                      className={PPCss.image}
                    />
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
                  {images.map((data, i) => (
                    <img
                      src={data.value}
                      key={data.id}
                      onClick={() => handleClick(i)}
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
