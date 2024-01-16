import React from 'react'

// Css
import SCss from '../CSS/SellerDetail.module.css'

function BackBtnSvg() {
  return (
    <div className={SCss.svg}>
        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left">
        <path d="m15 18-6-6 6-6"/></svg>
    </div>
  )
}

export default BackBtnSvg