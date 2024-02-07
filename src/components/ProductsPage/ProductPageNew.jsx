import React, { useEffect, useContext, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// components
import Box from "../Product/Box";
import Des from "../Product/Des";
import Rating from "../Product/Rating";
import SizeBox from "../Product/SizeBox";
import ColorBox from "../Product/ColorBox";
import UpdateLabel from "../Product/UpdateLabel";
import Header from "./../Dashboard/MainParts/Header";

// MicroInteraction
import Load from "../../MicroInteraction/LoadBlack";
import LoadW from "../../MicroInteraction/Load";
import { Alert } from "../../MicroInteraction/Alert";

// Css
import PPCss from "./Css/ProductPage.module.css";
import PPN from "./Css/ProductPageNew.module.css";

function ProductPageNew(props) {
  const [res, setres] = useState();
  const [load, setLoad] = useState(false);
  const [change, setChange] = useState(false);
  const [loadDel, setLoadDel] = useState(false);
  const [sliderData, setSliderData] = useState([]);
  const [sliderImages, setSliderImages] = useState([]);
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

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

          setSliderImages(response.data.ProductDetail.descriptor.images);
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

  const handlePrevious = () => {
    const currentIndex = sliderImages.findIndex((img) => img === sliderData);

    if (currentIndex === -1) {
      return;
    }
    const previousIndex =
      (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    setSliderData(sliderImages[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = sliderImages.findIndex((img) => img === sliderData);
    if (currentIndex === -1) {
      return;
    }
    const nextIndex = (currentIndex + 1) % sliderImages.length;

    setSliderData(sliderImages[nextIndex]);
  };

  const deleteproduct = async (_id) => {
    setLoadDel(true);

    try {
      const response = await axios.delete(`/api/common/product/delete/${_id}`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.status === 200) {
        setLoadDel(false);
      } else {
        console.log("error");

        setLoadDel(false);

        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "Unable to Delete",
          val: true,
        });
      }
    } catch (error) {
      console.log(error);

      setLoadDel(false);

      setError({
        mainColor: "#FDEDED",
        secondaryColor: "#F16360",
        symbol: "error",
        title: "Error",
        text: "An unexpected error occurred",
        val: true,
      });
    }
  };

  useEffect(() => {
    loadProducts();

    setChange(false);
  }, [, change]);

  return (
    <>
      <div>
        <div className={PPN.prodDetailMain}>
          <div className={PPN.arcHeaderDiv}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-left"
              className={PPN.arcHeadBackIcon}
              onClick={goBack}
            >
              <path d="m15 18-6-6 6-6" />
            </svg>

            <Header name="Product Details" />
          </div>
        </div>
        <hr className={PPN.below} />

        <div className={PPN.main}>
          {load ? (
            <div className="loadCenterDiv">
              <Load />
            </div>
          ) : (
            <>
              {res ? (
                <div className={PPN.main}>
                  <div className={PPN.left}>
                    <div className={PPN.pics}>
                      <div className={PPN.productImgMain}>
                        <img src={sliderData} className={PPCss.productImg} />
                      </div>

                      {sliderImages.length > 1 && (
                        <div className={PPN.rightLeft}>
                          <div className={PPN.sliderSvgLeft}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-chevron-left"
                              onClick={handlePrevious}
                            >
                              <path d="m15 18-6-6 6-6" />
                            </svg>
                          </div>

                          <div className={PPN.sliderSvgRight}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-chevron-right"
                              onClick={handleNext}
                            >
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className={PPN.secPic}>
                        {sliderImages.map((data, key) => (
                          <img
                            src={data}
                            key={key}
                            onClick={() => handleClick(key)}
                            className={PPN.productImg}
                          />
                        ))}
                      </div>
                    </div>

                    <div className={PPN.btns}>
                      <div className={PPN.goToInv}>
                        <Link to="/me/inventory" className={PPN.goToInvText}>
                          Go to Inventory
                        </Link>
                      </div>
                      <div
                        className={PPN.del}
                        onClick={() => deleteproduct(res._id)}
                      >
                        {loadDel ? (
                          <LoadW />
                        ) : (
                          <>{res.deleted ? "Insert" : "Delete"}</>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={PPN.right}>
                    <div className={PPN.prodDet}>
                      <p className={PPN.name}>{res.descriptor.name}</p>
                      <p className={PPN.prodId}>Product Id: {res._id} </p>
                      <p className={PPN.prodId}>
                        Published On: {res.when.date}{" "}
                      </p>
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

                      {/* Color Box */}
                      {/* <div className={PPN.prodColor}>
                      <ColorBox
                        imgSrc={
                          response.data.ProductDetail.descriptor.images[0]
                        }
                        label="Navel Blue"
                        code="#00007c"
                      />
                    </div> */}

                      {/* Size */}
                      {/* <div className={PPN.prodSize}>
                      <SizeBox label="S" />
                    </div> */}
                      <div className={PPN.Desc}>
                        <Des res={res} id={res._id} setChange={setChange} />
                      </div>

                      {/* Review */}
                      {/* <div className={PPN.prodCom}>
                      <p className={PPN.prodComText}>Ratings & Reviews:</p>
                      <Rating />
                      <Rating />
                      <Rating />
                      <Rating />
                    </div> */}
                    </div>
                  </div>
                </div>
              ) : (
                <p>No Orders</p>
              )}
            </>
          )}
        </div>
      </div>

      <Alert variant={variants} val={setError} />
    </>
  );
}

export default ProductPageNew;
