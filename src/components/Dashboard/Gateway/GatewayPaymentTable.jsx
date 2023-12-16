import Gptable from "./Css/GatewayPaymentTable.module.css";

const GatewayPaymentTable = () => {
  const data = [
    {
      refNo: "#20462",
      orderId: "23331",
      accountHolderName: "Matt Dickerson",
      date: "13/05/2022",
      amount: "₹ 366.16",
      paymentMode: "Not Paid",
      status: "Payment Processed",
      action: "View Details"
    },
    {
      refNo: "#18933",
      orderId: "23232324",
      accountHolderName: "Wiktoria",
      date: "22/05/2022",
      amount: "₹ 366.16",
      paymentMode: "Paid",
      status: "Payment Processed",
      action: "View Details"
    },
    {
      refNo: "#45169",
      orderId: "89780970",
      accountHolderName: "Trixie Byrd",
      date: "15/06/2022",
      amount: "₹ 366.16",
      paymentMode: "Not Paid",
      status: "Payment Pending",
      action: "View Details"
    },
    {
      refNo: "#34304",
      orderId: "89y9y",
      accountHolderName: "Brad Mason",
      date: "06/09/2022",
      amount: "₹ 366.16",
      paymentMode: "Paid",
      status: "Payment Pending",
      action: "View Details"
    },
    {
      refNo: "#73003",
      orderId: "987788",
      accountHolderName: "Jun Redfern",
      date: "04/10/2022",
      amount: "₹ 366.16",
      paymentMode: "Not Paid",
      status: "Payment Rejected",
      action: "View Details"
    },
    {
      refNo: "#58825",
      orderId: "565788",
      accountHolderName: "Miriam Kidd",
      date: "17/10/2022",
      amount: "₹ 366.16",
      paymentMode: "Paid",
      status: "Payment Processed",
      action: "View Details"
    },
    {
      refNo: "#44122",
      orderId: "353535",
      accountHolderName: "Dominic",
      date: "24/10/2022",
      amount: "₹ 366.16",
      paymentMode: "Not Paid",
      status: "Payment Rejected",
      action: "View Details"
    },
    {
      refNo: "#85252",
      orderId: "8797",
      accountHolderName: "Poppy-Rose",
      date: "22/11/2022",
      amount: "₹ 366.16",
      paymentMode: "Paid",
      status: "Payment Pending",
      action: "View Details"
    },
    {
      refNo: "#85252",
      orderId: "897t",
      accountHolderName: "Poppy-Rose",
      date: "22/11/2022",
      amount: "₹ 366.16",
      paymentMode: "Paid",
      status: "Payment Pending",
      action: "View Details"
    },
    {
      refNo: "#85252",
      orderId: "789787",
      accountHolderName: "Poppy-Rose",
      date: "22/11/2022",
      amount: "₹ 366.16",
      paymentMode: "Paid",
      status: "Payment Pending",
      action: "View Details"
    }
  ];

  return (
    <div className={Gptable.main}>
      <h4>Transactions</h4>
      <table className={Gptable.trans_table}>
        <tr>
          <th>Ref. No.</th>
          <th>Order Id</th>
          <th>A/c Holder Name</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Mode</th>
          <th>Status</th>
          <th>Action</th>
        </tr>

        {data.map((item, index) => (
          <tr key={index}>
            <td data-cell="ref no">{item.refNo}</td>
            <td data-cell="order id">{item.orderId}</td>
            <td data-cell="holder name">{item.accountHolderName}</td>
            <td data-cell="date">{item.date}</td>
            <td data-cell="amount">{item.amount}</td>
            <td data-cell="payment mode">{item.paymentMode}</td>
            <td
              className={
                item.status === "Payment Processed"
                  ? Gptable.processed
                  : item.status === "Payment Pending"
                  ? Gptable.pending
                  : Gptable.rejected
              }
              data-cell="status"
            >
              {item.status}
            </td>
            <td data-cell="action">{item.action}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default GatewayPaymentTable;
