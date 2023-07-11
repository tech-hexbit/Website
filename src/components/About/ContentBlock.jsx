import React from "react";

// Components
import Block from "./Block";

// Css
import CbCss from "./Css/ContentBlock.module.css";

export default function ContentBlock() {
  return (
    <div className={CbCss.mDiv}>
      <div className={CbCss.block1}>
        <div className={CbCss.bgParent}>
          <div className={CbCss.bgDiv}></div>
        </div>
        <div className={CbCss.circle}></div>
        <Block
          txt="The phenomenon of buying & selling is changing rapidly. The market boundaries are constantly expanding with the introduction of digital commerce. Online selling is the new normal for a startup as well as an existing player. However, selling online is more complex than it sounds. It requires an array of technological capabilities to be put together and constant maintenance to keep the products or services saleable. And that is the reason why with more than two decades of e-commerce maturity in the country along with very high internet as well as smartphone penetration, India is still below 1% digitization of sellers and less than 6% of e-commerce GMV of the total commerce."
          side="left"
        />
        <div className={CbCss.circleleft}></div>
      </div>
      <div className={CbCss.block0}>
        <Block
          txt="In a country like India, where micro and small enterprises contribute to more than 3/4th of commerce, online selling is a dream for them to practice. Top of it, the monopolistic approach and proprietary processes of the existing digital marketplaces w.r.t. registration, cataloging, content management, price & inventory management, fulfilment and reconciliation have made it a big entry barrier and dissonance post-go-live."
          side="right"
        />
      </div>
      <div className={CbCss.block2}>
        <div className={CbCss.bgParent}>
          <div className={CbCss.bgDiv2}></div>
        </div>
        <Block
          txt="There is no holistic solution available, which can handhold the MSME sector in India to make them digitally aware, make their catalogue e-commerce ready, help them sell online, support them in capacity building,  and continuously enrich them with meaningful market insights for their profitable growth"
          side="left"
        />
      </div>
    </div>
  );
}
