import React, { useState, useEffect, useContext } from "react";

//components
import TicketDetailsOverlay from "../PayDetails/TicketDetailsOverlay";

// MicroInteraction
import Load from "../../../MicroInteraction/LoadBlack";
import { Alert } from "../../../MicroInteraction/Alert";

//state
import AuthContext from "../../../store/auth-context";

//axios
import axios from "axios";

//css
import Gptable from "./Css/Ticket.module.css";

export default function Table() {
  const authCtx = useContext(AuthContext);

  const [showOverlay, setShowOverlay] = useState(false);

  const [selectedItem, setSelectedItem] = useState([]);

  const [variants, setError] = useState({
    mainColor: "",
    secondaryColor: "",
    symbol: "",
    title: "",
    text: "",
    val: false,
  });

  const handleOverlay = (_id) => {
    setShowOverlay(true);
    setSelectedItem(_id);
  };

  const closeOverlay = () => {
    setSelectedItem(null);
    setShowOverlay(false);
  };
  const [data, setData] = useState([]);

  const filteredRowItem = data.filter((item) => item._id === selectedItem);

  const loadStore = async () => {
    try {
      const response = await axios.get("/api/website/admin/Ticket/List", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (response.data.success) {
        setData(response.data.qnaEntries);
      } else {
        setError({
          mainColor: "#FDEDED",
          secondaryColor: "#F16360",
          symbol: "error",
          title: "Error",
          text: "An unexpected error occurred",
          val: true,
        });
      }
    } catch (e) {
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
    loadStore();
  }, []);

  return (
    <>
      <div className={Gptable.main}>
        {data.length > 0 ? (
          showOverlay ? (
            <>
              <table className={Gptable.trans_table}>
                <tr>
                  <th>Ticket ID</th>
                  <th>Store ID</th>
                  <th>Store Name</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
                {filteredRowItem.map((item, index) => (
                  <tr key={index} className={Gptable.payRes}>
                    <td data-cell="ref no">#HX{item._id.slice(-5)}</td>
                    <td data-cell="order id">{item.StoreID}</td>
                    <td data-cell="name">{item.StoreName}</td>
                    <td data-cell="date">{item.subject}</td>
                    <td data-cell="amount">{item.when.date}</td>
                    <td
                      className={
                        item.Status === "Solved"
                          ? Gptable.processed
                          : Gptable.rejected
                      }
                      data-cell="status"
                    >
                      {item.Status}
                    </td>
                    <td data-cell="action" onClick={() => closeOverlay()}>
                      Close details
                    </td>
                  </tr>
                ))}
              </table>

              <TicketDetailsOverlay selectedItem={filteredRowItem} />
            </>
          ) : (
            <table className={Gptable.trans_table}>
              <tr>
                <th>Ticket ID</th>
                <th>Store ID</th>
                <th>Store Name</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
              {data.map((item, index) => (
                <tr key={index} className={Gptable.payRes}>
                  <td data-cell="ref no">#HX{item._id.slice(-5)}</td>
                  <td data-cell="order id">{item.StoreID}</td>
                  <td data-cell="name">{item.StoreName}</td>
                  <td data-cell="date">{item.subject}</td>
                  <td data-cell="amount">{item.when.date}</td>
                  <td
                    className={
                      item.Status === "Solved"
                        ? Gptable.processed
                        : Gptable.rejected
                    }
                    data-cell="status"
                  >
                    {item.Status}
                  </td>
                  <td
                    data-cell="action"
                    onClick={() => handleOverlay(item._id)}
                  >
                    View Details
                  </td>
                </tr>
              ))}
            </table>
          )
        ) : (
          <div className={Gptable.loading}>
            <Load />
          </div>
        )}
      </div>
      <Alert variant={variants} val={setError} />
    </>
  );
}
