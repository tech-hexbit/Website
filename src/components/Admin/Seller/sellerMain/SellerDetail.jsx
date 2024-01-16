import React from 'react'
// css
import SCss from '../CSS/SellerDetail.module.css'
import KYCDetails from '../sellerComponents/KYCDetails'
import SellerHeader from '../sellerComponents/SellerHeader'
import Alert from '../sellerComponents/Alert'
import SellerDetailTop from '../sellerComponents/SellerDetailTop'
import DownloadBtn from '../sellerComponents/DownloadBtn'
import MandatoryField from '../sellerComponents/MandatoryField'
import BackBtnSvg from '../sellerComponents/BackBtnSvg'


function SellerDetail() {
  return (
    <div className={SCss.main}>
       <BackBtnSvg/>
        <div>
            <SellerDetailTop/>
            <SellerHeader/>
            {/* Alert for verified and unverified seller */}
            <Alert/>
            {/* KYC INFO */}
            <KYCDetails />
        </div>
        <div className={SCss.btn}>
        {/* Download Button */}
            <>
                <DownloadBtn/>
                <MandatoryField/>
            </>
        </div>
    </div>
  )
}

export default SellerDetail