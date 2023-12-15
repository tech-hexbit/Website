import Gate from "./Css/Gateway.module.css";
import GatewayPaymentList from "./GatewayPaymentList";
import GatewayPaymentTable from "./GatewayPaymentTable";

export default function Gateway() {
  return (
    <div className={Gate.main}>
      <GatewayPaymentList />
      <GatewayPaymentTable />
    </div>
  );
}
