import React from "react";

// components
import Table from "./Ticket/Table";
import Header from "./Ticket/Header";

export default function Contact() {
  return (
    <div>
      <Header title="Tickets: All" />
      <Table />
    </div>
  );
}
