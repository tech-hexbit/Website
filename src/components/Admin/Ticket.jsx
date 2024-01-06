import React from 'react';
import TicCss from './Css/Tickets.module.css';
import TicketHeader from './TicketHeader';
import TicketRow from './TicketRow';

const Ticket = () => {
  return (
    <div className={TicCss.mDiv}>
      <p className={TicCss.TicketsPTag}>Tickets: ALL</p>

      <div className={TicCss.table}>
        <table className={TicCss.tableCatTTag}
                style={{ borderCollapse: "collapse" }}>
          <TicketHeader />
          <tbody>
            <TicketRow id="#20462" storeId="#20462" storeName="#20462" subject="#20462" date="13/05/2022" status="Solved" />
            <TicketRow id="#20462" storeId="#20462" storeName="#20462" subject="#20462" date="13/05/2022" status="Solved" />
            <TicketRow id="#20462" storeId="#20462" storeName="#20462" subject="#20462" date="13/05/2022" status="Pending" />
            <TicketRow id="#20462" storeId="#20462" storeName="#20462" subject="#20462" date="13/05/2022" status="Pending" />
            <TicketRow id="#20462" storeId="#20462" storeName="#20462" subject="#20462" date="13/05/2022" status="Solved" />
            <TicketRow id="#20462" storeId="#20462" storeName="#20462" subject="#20462" date="13/05/2022" status="Pending" />
            <TicketRow id="#20462" storeId="#20462" storeName="#20462" subject="#20462" date="13/05/2022" status="Solved" />
            <TicketRow id="#20462" storeId="#20462" storeName="#20462" subject="#20462" date="13/05/2022" status="Solved" />
            <TicketRow id="#20462" storeId="#20462" storeName="#20462" subject="#20462" date="13/05/2022" status="Solved" />
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ticket;