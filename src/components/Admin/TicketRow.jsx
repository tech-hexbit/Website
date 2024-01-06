import React from 'react';
import TicCss from './Css/Tickets.module.css';

const TicketRow = ({ id, storeId, storeName, subject, date, status }) => {
  return (
    <tr className={TicCss.frameGroup}>
      <td data-cell ="Id">{id}</td>
      <td data-cell ="storeId">{storeId}</td>
      <td data-cell ="storeName">{storeName}</td>
      <td data-cell ="subject">{subject}</td>
      <td data-cell ="date">{date}</td>
      <td data-cell ="status">
        <div
          className={status === 'Solved' ? TicCss.solvedWrapper : TicCss.pendingWrapper}
        >
          <div className={status === 'Solved' ? TicCss.solvedHead : TicCss.pendingHead}>{status}</div>
        </div>
      </td>
      <td data-cell ="Action">
        <div className={TicCss.frameContainer}>
          <div className={TicCss.tickMarkWrapper}>
          <img className={TicCss.pathIcon} alt="" src="/src/assets/tickets/path@2x.png" />
          </div>
         
        </div>
      </td>
    </tr>
  );
};

export default TicketRow;
