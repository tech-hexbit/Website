// components
import HelpDeskForm from "./HelpDesk/HelpDeskForm";
import PastTicket from "./HelpDesk/PastTicket";
import QuickInquiries from "./HelpDesk/QuickInquiries";
// css
import hd from "../Dashboard/HelpDesk/Css/HelpDesk.module.css";
const HelpDesk = () => {
  return (
    <>
      <h1 className={hd.heading}>Contact Us</h1>
      <p className={hd.para}>
        Just answer a few questions, Helping us answer your queries better. We
        will surely revert within 48 hrs.
      </p>
      <div className={hd.main}>
        <HelpDeskForm />
        <div className={hd.submain}>
          <QuickInquiries />
          <PastTicket />
        </div>
      </div>
    </>
  );
};

export default HelpDesk;
