import React from 'react'

// Css
import SCss from '../CSS/sellerDetail.module.css'

function DownloadBtn() {
  return (
    <>
        <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <p className={SCss.btnText}>Download Cheque</p>
                </div>
                <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <p className={SCss.btnText}>Download GST Certificate</p>
                </div>
                <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <p className={SCss.btnText}>Download PAN Certificate</p>
                </div>
                <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <p className={SCss.btnText}> Download Seller Data</p>
                </div>
    </>
  )
}

export default DownloadBtn