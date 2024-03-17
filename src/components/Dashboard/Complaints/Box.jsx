import React, { useState, useEffect } from "react";

// css
import BoxCss from "./Css/Box.module.css";
import pt from "./../Payment/Css/PaymentTable.module.css";

export default function Box({ key, val }) {
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
          {edit ? (
            <>
              {
                val.respondent_actions[val.respondent_actions.length - 1]
                  .respondent_action
              }
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
                className={BoxCss.editBtn}
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
            </>
          ) : (
            <>
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
                class="lucide lucide-ban"
                className={BoxCss.cancelBtn}
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m4.9 4.9 14.2 14.2" />
              </svg>

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
                class="lucide lucide-save"
                className={BoxCss.saveBtn}
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
            </>
          )}
        </td>
        <td data-cell="Action">
          View Details
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
