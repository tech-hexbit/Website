import {React , useState } from 'react'

// Css
// import SSDCss from './CSS/selectSellerDetail.module.css'
import SSDCss from '../CSS/selectSellerDetail.module.css'
import SCss from '../CSS/SellerDetail.module.css'

// Components
import SellerInventory from '../sellerMain/SellerInventory';
import SellerOrder from '../sellerMain/SellerOrder';
import KYCDetails from '../sellerComponents/KYCDetails';
import SideBar from '../sellerComponents/SideBar';
import StoreTxt from '../sellerComponents/StoreTxt';

function SelectSellerDetail() {

  const [activeTab, setActiveTab] = useState('Seller Details');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className={SSDCss.main}>
      {/* Sidebar */}
      <SideBar/>
      <div className={SSDCss.mainSec}>
        <StoreTxt/>
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
            <KYCDetails />
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