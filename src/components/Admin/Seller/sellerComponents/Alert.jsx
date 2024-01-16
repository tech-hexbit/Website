import React from 'react'

// Css
import SCss from '../CSS/SellerDetail.module.css'

function Alert() {
  return (
    <div  className={SCss.alert}>
        <p className={SCss.alertSvg}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f52929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
        </p>
        <p>UNVERIFIED SELLER</p>
    </div>
  )
}

export default Alert