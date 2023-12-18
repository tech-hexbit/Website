// components
import GatewayPaymentList from "./Gateway/GatewayPaymentList";
import GatewayPaymentTable from "./Gateway/GatewayPaymentTable";

// css
import Gate from "../Dashboard/Gateway/Css/Gateway.module.css";

export default function Gateway() {
  return (
    <div className={Gate.main}>
      <GatewayPaymentList />
      <GatewayPaymentTable />
    </div>
  );
}
