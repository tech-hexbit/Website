import React from "react";

// components
import TicketTable from "./Ticket/TicketTable";
import Header from "./Ticket/Header";

export default function Contact() {
  return (
    <div>
      <Header title="Tickets: All" />
      <TicketTable />
    </div>
  );
}
