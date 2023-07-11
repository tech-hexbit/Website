import { useEffect } from "react";

// components
import RegisterFooter from "../components/footer/RegisterFooter";
import PrivacyContent from "../components/privacy/PrivacyContent";

const Privacy = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PrivacyContent />
      <RegisterFooter />
    </div>
  );
};

export default Privacy;
