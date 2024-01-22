import React, { useState, useEffect } from "react";

// components
import Tags from "./Tags";

// MicroInteraction
import Load from "./../../../MicroInteraction/LoadBlack";

// css
import FCss from "./Css/filter.module.css";

export default function Filter({
  load,
  allcategory,
  filterData,
  setfilterData,
}) {
  const [onFil, offFil] = useState(false);
  const [unique, setunique] = useState([]);

  useEffect(() => {
    const u = (allcategory) => [...new Set(allcategory)];
    setunique(u(allcategory));
  }, [allcategory]);

  return (
    <div className={FCss.mainDiv} id={onFil ? "onCat" : "offCat"}>
      <div className={FCss.div1} id="div1CatFilter">
        <div
          className={FCss.heading}
          id={FCss.filterLabel}
          onClick={() => {
            offFil(!onFil);
          }}
        >
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
            class="lucide lucide-filter"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
        </div>

        {filterData ? (
          <div className={FCss.tags}>
            {filterData.category.length > 0 ? (
              <>
                {filterData.category.map((val, key) => {
                  return <Tags key={key} text={val} />;
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        ) : (
          ""
        )}
      </div>

      <>
        <div className={FCss.div1} id={onFil ? "Div1Cat" : ""}>
          <div className={FCss.heading}>Category</div>
          <div>
            {unique?.map((val, key) => {
              return (
                <div className={FCss.categoryOption} key={key}>
                  {val}
                  <input
                    type="checkbox"
                    name="category"
                    checked={filterData.category.includes(val)}
                    onChange={(e) => {
                      const isChecked = e.target.checked;

                      setfilterData((prevFilterData) => ({
                        ...prevFilterData,
                        category: isChecked
                          ? Array.isArray(prevFilterData.category)
                            ? [...prevFilterData.category, e.target.value]
                            : [e.target.value]
                          : prevFilterData.category.filter(
                              (category) => category !== e.target.value
                            ),
                      }));
                    }}
                    value={val}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className={FCss.div1}>
            <select className={FCss.select}>
              <option hidden>Brands</option>
            </select>
          </div> */}

        {/* <div className={FCss.div1}>
            <select className={FCss.select}>
              <option hidden>Price</option>
            </select>
          </div> */}

        {/* <div className={FCss.div1}>
            <select className={FCss.select}>
              <option hidden>Discounts</option>
            </select>
          </div> */}

        {/* <div className={FCss.div1} id={FCss.rate}>
            <select className={FCss.select}>
              <option hidden>Rating</option>
            </select>
          </div> */}
      </>
    </div>
  );
}
