import React from 'react'

// Css
import SCss from '../CSS/SellerDetail.module.css'

function SellerDetailTop() {
  return (
    <div className={SCss.topText}>
                <p>
                   KYC
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </p>
                <p>
                    Seller Info
                </p>
    </div>
  )
}

export default SellerDetailTop