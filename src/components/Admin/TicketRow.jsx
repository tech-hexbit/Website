import React from 'react';
import TicCss from './Css/Tickets.module.css';

const TicketRow = ({ id, storeId, storeName, subject, date, status }) => {
  return (
    <tr className={TicCss.frameGroup}>
      <td>{id}</td>
      <td>{storeId}</td>
      <td>{storeName}</td>
      <td>{subject}</td>
      <td>{date}</td>
      <td>
        <div
          className={status === 'Solved' ? TicCss.solvedWrapper : TicCss.pendingWrapper}
        >
          <div className={TicCss.solved}>{status}</div>
        </div>
      </td>
      <td>
        <div className={TicCss.frameContainer}>
          <div className={TicCss.tickMarkWrapper}>
            <img
              className={TicCss.tickMarkIcon}
              alt=""
            //   src="/tick-mark@2x.png"
            />
          </div>
          {/* <img className={TicCss.pathIcon} alt="" src="/path@2x.png" /> */}
        </div>
      </td>
    </tr>
  );
};

export default TicketRow;
