import {React , useState } from 'react'


import SSDCss from './CSS/selectSellerDetail.module.css'
import SellerInventory from './SellerInventory';
import SellerOrder from './SellerOrder';
import Sellers from '../../Sellers';



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
          <Sellers/>
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