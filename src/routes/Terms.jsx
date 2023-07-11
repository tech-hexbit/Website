import { useEffect } from "react";

// components
import TermsContent from "../components/terms/TermsContent";
import RegisterFooter from "../components/footer/RegisterFooter";

const Terms = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TermsContent />
      <RegisterFooter />
    </div>
  );
};

export default Terms;
