import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// MicroInteraction
import { Alert } from "./../../MicroInteraction/Alert";

// state
import AuthContext from "./../../store/auth-context";

// components
import Filter from "./product/Filter";
import Display from "./product/Display";
import Archive from "./product/Archive";

// css
import pdtCSS from "./Css/products.module.css";

export default function Products() {
  const [load, setLoad] = useState(false);
  const [archive, setArchive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [allcategory, setallcategory] = useState([]);
  const [filterData, setfilterData] = useState({
    category: [],
  });
  const [filteredlist, setfilteredlist] = useState({
    productList: [],
    prodcutsCount: 0,
  });
  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const authCtx = useContext(AuthContext);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.post(
        `/api/common/product/all/false?page=${currentPage}`,
        filterData,
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );

      if (response.data.success) {
        setfilteredlist({
          ...filteredlist,
          productList: response.data.orderList,
          prodcutsCount: response.data.prodcutsCount,
        });

        response?.data?.orderList?.forEach((order) => {
          setallcategory((prevState) => [...prevState, order.category_id]);
        });

        setLoad(false);
      } else {
        setLoad(false);
      }
    } catch (e) {
      setLoad(false);

      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [filterData, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterData]);

  return (
    <>
      {archive ? (
        <Archive />
      ) : (
        <div>
          <div className={pdtCSS.mdiv}>
            <div className={pdtCSS.filterVis}>
              <Filter
                load={load}
                filteredlist={filteredlist}
                allcategory={allcategory}
                setfilterData={setfilterData}
                filterData={filterData}
                setfilteredlist={setfilteredlist}
              />
            </div>
            <Display
              load={load}
              filterData={filterData}
              currentPage={currentPage}
              filteredlist={filteredlist}
              setfilterData={setfilterData}
              setCurrentPage={setCurrentPage}
              setfilteredlist={setfilteredlist}
            />
          </div>

          <div className={pdtCSS.archiveIcon}>
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
              class="lucide lucide-history"
              onClick={() => {
                setArchive(true);
              }}
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M12 7v5l4 2" />
            </svg>
          </div>
        </div>
      )}

      <Alert variant={variants} val={setError} />
    </>
  );
}
