import mi from "./Css/MoreInquiries.module.css";

const MoreInquiries = () => {
  return (
    <div className={mi.inquiry}>
      <h1>For more Inquiries</h1>
      <div className={mi.box}>
        <div className={mi.inside}>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="59"
              viewBox="0 0 60 59"
              fill="none"
            >
              <rect width="59.5767" height="58.1" rx="20" fill="#9570FF" />
              <path
                d="M12.9199 25.1992L29.0702 31.2337L45.2205 25.1992V32.6992C45.2205 38.2221 40.7434 42.6992 35.2205 42.6992H22.9199C17.3971 42.6992 12.9199 38.2221 12.9199 32.6992V25.1992Z"
                fill="#BFA9FF"
              />
              <path
                d="M12.9199 23.3542C12.9199 19.3476 16.1679 16.0996 20.1745 16.0996H37.966C41.9726 16.0996 45.2205 19.3476 45.2205 23.3542L29.0702 29.3996L12.9199 23.3542Z"
                fill="white"
              />
            </svg>
            Mail Us
          </p>
          <p>support@hexibit.io</p>
        </div>
      </div>
    </div>
  );
};

export default MoreInquiries;
