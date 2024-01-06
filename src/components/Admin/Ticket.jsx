import React from 'react';
import TicCss from './Css/Tickets.module.css';
import TicketHeader from './TicketHeader';
import TicketRow from './TicketRow';


const Ticket = () => {
  const ticketData = [
    { id: "#20462", storeId: "#20462", storeName: "#20462", subject: "#20462", date: "13/05/2022", status: "Solved" },
    { id: "#20462", storeId: "#20462", storeName: "#20462", subject: "#20462", date: "13/05/2022", status: "Solved" },
    { id: "#20462", storeId: "#20462", storeName: "#20462", subject: "#20462", date: "13/05/2022", status: "Solved" },
    { id: "#20462", storeId: "#20462", storeName: "#20462", subject: "#20462", date: "13/05/2022", status: "Pending" },
    { id: "#20462", storeId: "#20462", storeName: "#20462", subject: "#20462", date: "13/05/2022", status: "Solved" },
    { id: "#20462", storeId: "#20462", storeName: "#20462", subject: "#20462", date: "13/05/2022", status: "Pending" },
    { id: "#20462", storeId: "#20462", storeName: "#20462", subject: "#20462", date: "13/05/2022", status: "Pending" },
    { id: "#20462", storeId: "#20462", storeName: "#20462", subject: "#20462", date: "13/05/2022", status: "Pending" },
    { id: "#20462", storeId: "#20462", storeName: "#20462", subject: "#20462", date: "13/05/2022", status: "Solved" },

  ];




  return (
    <div className={TicCss.mDiv}>
      <div className={TicCss.headContain}>

       <svg width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8 13L1 7L8 1"
              stroke="#031849" stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
      <p className={TicCss.TicketsPTag}>Tickets: All</p>
      </div>

      <div className={TicCss.table}>
        <table className={TicCss.tableCatTTag}
          style={{ borderCollapse: "collapse" }}>

         
          <TicketHeader />
          <tbody>
            {ticketData.map((ticket, index) => (
              <TicketRow key={index} {...ticket} />
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ticket;