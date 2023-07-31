import React from "react";

// components
import Title from "./Title";
import GridCard from "./GridCards";

// css
import WyCss from "./Css/WhyUs.module.css";

// icons
import share from "./../../assets/whyUs/support.png";
import Friendliness from "./../../assets/whyUs/user.png";
import check from "./../../assets/whyUs/analytics.png";
import Modules from "./../../assets/whyUs/module.png";
import Technology from "./../../assets/whyUs/tech.png";
import Managed from "./../../assets//whyUs/services.png";

export default function WhyUs() {
  return (
    <div className={WyCss.mDiv}>
      <div className={WyCss.ConDiv}>
        <Title title="Why Us ?" />
        <div className={WyCss.gridDivParent}>
          <div className={WyCss.gridDiv}>
            <GridCard
              title="User-Friendliness"
              imgSrc={Friendliness}
              desc="HEXBIT.IO is an easy-to-use platform with an intuitive UI/UX that allows sellers to work at their own pace and literacy level."
            />
            <GridCard
              title="Technology"
              imgSrc={Technology}
              desc="The platform is loaded with the best technology, ensuring that sellers have access to the latest tools and features to manage their businesses."
            />
            <GridCard
              title="Interactive Modules"
              imgSrc={Modules}
              desc="HEXBIT.IO offers interactive modules that enable sellers to register, digitize catalogs, create content, and go online with selective formats such as marketplaces and networks."
            />
            <GridCard
              title="Managed Services"
              imgSrc={Managed}
              desc="The platform offers both self-serve and managed options for sellers, making it suitable for both digitally aware and novice sellers."
            />
            <GridCard
              title="Analytics"
              imgSrc={check}
              desc="HEXBIT.IO provides rich analytics to help sellers make informed business decisions and plan for the future."
            />
            <GridCard
              title="Expert Support"
              imgSrc={share}
              desc="A dedicated team of experts and managed service providers are available to provide solutions on the go or against a subscription."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
