import React, { useState, useEffect, useContext } from "react";

// components
import QA from "../Admin/QA";
import AddQuestiom from "../Admin/AddQuestiom";
import Contacted from "../Admin/Contacted";
import EditQuestion from "../Admin/EditQuestion";

// state
import AuthContext from "./.././../store/auth-context";

// axios
import axios from "axios";

// MicroInteraction
import Load from "./../../MicroInteraction/LoadBlack";

// css
// import SupCss from "./Css/Support.module.css";
import SupCss from "../Admin/Css/Support.module.css";
import { Link } from "react-router-dom";


export default function SupportNew() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [showAdd, setAdd] = useState(false);
  const [showRef, setRef] = useState(false);
  const [showCurr, setCurr] = useState("Support");

  const [showEdit, setShowEdit] = useState(false);
  const [editdata, setEditdata] = useState(null);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    loadData();
    setRef(false);
  }, [showRef]);

  const loadData = async () => {
    setLoad(true);

    try {
      const response = await axios.get(`/api/website/qna/get`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setData(response.data.qnaEntries);

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

  const deleteHandle = async (_id) => {
    try {
      const res = await axios.delete(`/api/website/qna/delete/${_id}`, {
        headers: { Authorization: `${authCtx.token}` },
      });

      console.log(res.data.message);

      if (res.data.success) {
        loadData();
      } else {
        console.log("problem in loading data");
      }
    } catch (e) {
      console.log("delete handle not working");
    }
  };

  const editHandle = async (_id) => {
    console.log(_id);
  };

  return (
    <>
      {showAdd ? (
        <AddQuestiom setAdd={setAdd} setRef={setRef} />
      ) : (
        <>
          {showEdit ? (
            <EditQuestion
              data={editdata}
              setShowEdit={setShowEdit}
              setRef={setRef}
            />
          ) : (
            <>
              <div>
                <div className={SupCss.titleDiv}>
                  <p
                    id={showCurr === "Support" ? "Support" : "nonAc"}
                    onClick={() => {
                      setCurr("Support");
                    }}
                  >
                    Support
                  </p>
                  <p
                    id={showCurr === "Contacted" ? "Contacted" : "nonAc"}
                    onClick={() => {
                      setCurr("Contacted");
                    }}
                  >
                    Contacted
                  </p>

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
                    class="lucide lucide-plus"
                    className={SupCss.plusIcon}
                    onClick={() => {
                      setAdd(true);
                    }}
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>

                {showCurr === "Support" ? (
                  <>
                    <div className={SupCss.qamDiv}>
                      {load ? (
                        <div className="loadCenterDiv">
                          <Load />
                        </div>
                      ) : (
                        <>
                          {data.length > 0 ? (
                            <>
                              {data.map((val, key) => {
                                return (
                                  <div className={SupCss.iconsContainer}>
                                    <QA
                                      key={key}
                                      answer={val.answer}
                                      question={val.question}
                                    />

                                    <div className={SupCss.icons}>
                                      {/* Edit */}
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
                                        class="lucide lucide-pencil"
                                        className={SupCss.editIcon}
                                        onClick={() => {
                                          const selectedItem = data.find(
                                            (item) => item._id === val._id
                                          );
                                          setShowEdit(true);
                                          setEditdata({
                                            _id: selectedItem._id,
                                            ques: selectedItem.question,
                                            ans: selectedItem.answer,
                                          });
                                        }}
                                      >
                                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                        <path d="m15 5 4 4" />
                                      </svg>
                                      {/* Delete */}
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
                                        class="lucide lucide-trash"
                                        className={SupCss.DeleteIcon}
                                        onClick={() => deleteHandle(val._id)}
                                      >
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                      </svg>
                                    </div>
                                  </div>
                                );
                              })}
                            </>
                          ) : (
                            <>
                              <p id={SupCss.NoData}>No Data</p>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  ""
                )}

                {showCurr === "Contacted" ? (
                  <>
                    <Contacted />
                  </>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
