import React, { useState, useEffect } from "react";

// css
import BoxCss from "./Css/Box.module.css";
import pt from "./../Payment/Css/PaymentTable.module.css";

export default function Box({ key, val, handleOverlay, showOverlay }) {
  const [expectedTime, setExpectedTime] = useState("");
  const [edit, setEdit] = useState(true);
  const [isOverOneDay, setIsOverOneDay] = useState(false);

  useEffect(() => {
    const currentTime = new Date();

    const expectedTime = new Date(val.timeStramp);

    expectedTime.setHours(
      expectedTime.getHours() +
        parseInt(val.expected_response_time.duration.slice(2, -1))
    );

    setIsOverOneDay(currentTime > expectedTime);

    // Format the expected resolution time
    const expectedTimeState = expectedTime.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setExpectedTime(expectedTimeState.toString());
  }, []);

  return (
    <>
      <tr key={key} className={pt.payRes}>
        <td data-cell="ID">{val._id.slice(-4)}</td>
        <td data-cell="Customer">{val.complainant_info.person.name}</td>
        <td data-cell="Date">{val.when.date}</td>
        <td
          data-cell="DeadLine"
          style={{ color: isOverOneDay ? "red" : "green" }}
        >
          {expectedTime}
        </td>
        <td data-cell="Status">
          <>
            {
              val.respondent_actions[val.respondent_actions.length - 1]
                .respondent_action
            }
          </>
        </td>
        <td data-cell="Action" onClick={() => handleOverlay(val._id)}>
          {showOverlay ? "Close Details" : "View Details"}
          {val.issue_actions.complainant_actions[0].complainant_action ===
          "OPEN" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-badge-alert"
                className={BoxCss.openSvg}
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-check-check"
                className={BoxCss.closeSvg}
              >
                <path d="M18 6 7 17l-5-5" />
                <path d="m22 10-7.5 7.5L13 16" />
              </svg>
            </>
          )}
        </td>
      </tr>
    </>
  );
}
