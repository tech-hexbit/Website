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

  const getStatusColor = (status) => {
    let style = {};
    switch (status) {
      case "Payment Processed":
        style = {
          backgroundColor: "#EBF9F1",
          color: "#1F9254",
          fontWeight: "bold",
          textAlign: "center",
          borderRadius: "0.5rem",
          fontSize: "12px"
        };
        break;
      case "Payment Pending":
        style = {
          backgroundColor: "#FEF2E5",
          color: "#CD6200",
          fontWeight: "bold",
          textAlign: "center",
          borderRadius: "0.5rem",
          fontSize: "12px"
        };
        break;
      case "Payment Rejected":
        style = {
          backgroundColor: "#FFBABA",
          color: "#CD0000",
          fontWeight: "bold",
          textAlign: "center",
          borderRadius: "0.5rem",
          fontSize: "12px"
        };
        break;
      default:
        break;
    }
    return style;
  };

  return (
    <div className={Gptable.main}>
      <h4>Transactions</h4>
      <table className={Gptable.trans_table}>
        <thead>
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
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.refNo}</td>
              <td>{item.orderId}</td>
              <td>{item.accountHolderName}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>{item.paymentMode}</td>
              <td style={getStatusColor(item.status)}>{item.status}</td>
              <td>{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GatewayPaymentTable;
