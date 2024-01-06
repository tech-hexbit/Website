import React from 'react';
import TicCss from './Css/Tickets.module.css';

const TicketRow = ({ id, storeId, storeName, subject, date, status }) => {
    return (
        <tr className={TicCss.frameGroup}>
            <td data-cell="Id">{id}</td>
            <td data-cell="storeId">{storeId}</td>
            <td data-cell="storeName">{storeName}</td>
            <td data-cell="subject">{subject}</td>
            <td data-cell="date">{date}</td>
            <td data-cell="status">
                <div
                    className={status === 'Solved' ? TicCss.solvedWrapper : TicCss.pendingWrapper}
                >
                    <div className={status === 'Solved' ? TicCss.solvedHead : TicCss.pendingHead}>{status}</div>
                </div>
            </td>
            <td data-cell="Action">
                <div className={TicCss.frameContainer}>
                    <div className={TicCss.tickMarkWrapper}>
                        <svg width="27"
                            height="27"
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path id="Path"
                                d="M7.2051 21.2979L2.38586 26.1167C1.56691 26.9355 0.166626 26.3556 
                                0.166626 25.1975V4.39961C0.166626 2.24591 1.91272 0.5 4.06663 0.5H22
                                .2666C24.4205 0.5 26.1666 2.24591 26.1666 4.39961V17.3983C26.1666 
                                19.552 24.4205 21.2979 22.2666 21.2979H7.2051Z"
                                 fill="black" 
                                 fill-opacity="0.71" />
                        </svg>
                    </div>

                </div>
            </td>
        </tr>
    );
};

export default TicketRow;
