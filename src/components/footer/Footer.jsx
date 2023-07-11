import { Link } from "react-router-dom";

// css
import FCss from "./Css/Footer.module.css";

const Footer = () => {
  return (
    <div className={FCss.mDiv}>
      <div className={FCss.contentDiv}>
        <div className={FCss.leftDiv}>
          <p className={FCss.AboutCompany}>
            <b>About Company</b>
          </p>
          <p className={FCss.desPTag}>
            hexbit.io is a full-stack solution enabling sellers across the globe
            to sell online across platforms and networks. It is an end-to-end
            integrated platform to enable micro, small, medium, and large
            enterprises across the products and services category. The solution
            cuts across trade formats like retail, aggregations, import,
            production, trading, and micro-entrepreneurship like artisans or
            kiranas. hexbit.io platform is easy to use, integration agnostic,
            loaded with the best technology, and comes in handy with interactive
            modules to register, digitise catalogue, create content, go online
            with selective formats (marketplaces/networks), manage accounts,
            boost sales, reconcile financials, and get rich analytics for a
            decisive future.
          </p>
        </div>
        <div>
          <p className={FCss.AboutCompany}>
            <b>Pages</b>
          </p>
          <ul className={FCss.ful}>
            <li>
              <Link to="/AboutUs" className="LinkStyle">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/terms" className="LinkStyle">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="LinkStyle">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="LinkStyle">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
