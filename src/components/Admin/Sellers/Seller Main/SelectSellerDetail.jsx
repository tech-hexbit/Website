import {React , useState } from 'react'


import SSDCss from './CSS/selectSellerDetail.module.css'
import SCss from './CSS/sellerDetail.module.css'
import SellerInventory from './SellerInventory';
import SellerOrder from './SellerOrder';


function SelectSellerDetail() {

  const [activeTab, setActiveTab] = useState('Seller Details');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className={SSDCss.main}>
      <div className={SSDCss.mainSec}>
        <p className={SSDCss.topText}>
         DETAILS OF STORE A
        </p>
        <div className={SSDCss.slide}>
          <div   className={`${SSDCss.slideSec} ${activeTab === 'Seller Details' ? SSDCss.slideSecClicked : ''}`}
        onClick={() => handleTabClick('Seller Details')}>
            <p>Seller Details</p>
          </div>
          <div  className={`${SSDCss.slideSec} ${activeTab === 'Seller Inventory' ? SSDCss.slideSecClicked : ''}`}
        onClick={() => handleTabClick('Seller Inventory')}>
            <p>Seller Inventory</p>
          </div>
          <div  className={`${SSDCss.slideSec} ${activeTab === 'Seller Orders' ? SSDCss.slideSecClicked : ''}`}
        onClick={() => handleTabClick('Seller Orders')}>
            <p>Seller Orders</p>
          </div>
        </div>
       {
        activeTab === 'Seller Details' ? (
          <div className={SSDCss.KYCmain}>
          <p className={SCss.KYCtop}>KYC INFO</p>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>NAME:</p>
              <p>Shoes</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>BUSINESS NAME:</p>
              <p>Adidas</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>PHONE NUMBER:</p>
              <p>Navy Blue</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>EMAIL ID:</p>
              <p>Synthetic light weight</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>ADDRESS:</p>
              <p>Men's</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>STATE:</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>CITY:</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>PINCODE:</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>GEO-LOCATION:</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div>

          <div className={SCss.KYCSec}>
              <p className={SCss.empty}></p>
          </div>
          {/* Bank Details */}
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>BANK DETAILS:</p>
              <p></p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>A/c Holder Name:</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>IFSC CODE:</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>BRANCH NAME:</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div>
          {/* GSTIN */}
          <div className={SCss.empty2}>
              {/* <p className={SCss.empty}></p> */}
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>GSTIN:</p>
              <p>950gm</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>ID PROOF (PAN)</p>
              <p>33.5 x 21 x 13.5 cm</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>FSSAI LICENCE NO:</p>
              <p>33.5 x 21 x 13.5 cm</p>
          </div>
          {/* ONDC DETAILS */}
          <div className={SCss.empty2}>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>ONDC DETAILS:</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>TIME TO SHIP:</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div>
          <div className={SCss.KYCSec}>
              <p className={SCss.secText}>CANCELLABLE :</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div><div className={SCss.KYCSec}>
              <p className={SCss.secText}>RETURNABLE :</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div><div className={SCss.KYCSec}>
              <p className={SCss.secText}>Contact Details For Consumer Care :</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div><div className={SCss.KYCSec}>
              <p className={SCss.secText}>Category ID :</p>
              <p>Adidas India Marketing Private Ltd</p>
          </div><div className={SCss.KYCSec}>
              <p className={SCss.secText}>LOCATION AVAILABILITY :</p>
              <p>950 gm</p>
          </div><div className={SCss.KYCSec}>
              <p className={SCss.secText}>STORE TIMING :</p>
              <p>950 gm</p>
          </div>
  </div>
        ):(
          ""
        )
       }
       {
        activeTab==='Seller Inventory' ? (
          <SellerInventory/>
        ):("")
       }
       {
        activeTab === 'Seller Orders' ? (
          <SellerOrder/>
        ):("")
       }
      </div>

    </div>
  )
}

export default SelectSellerDetail