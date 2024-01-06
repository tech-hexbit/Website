import React from 'react';
import TicCss from './Css/Tickets.module.css';

const TicketHeader = () => {
  return (
    <thead>
      <tr className={TicCss.frameParent}>
        <th>Ticket ID</th>
        <th>Store ID</th>
        <th>Store Name</th>
        <th>Subject</th>
        <th>Date</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default TicketHeader;
