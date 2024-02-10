import React from 'react'

// Css
import SCss from '../CSS/sellerDetail.module.css'

function DownloadBtn(props) {
  return (
    <>
        <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <a href={props.props.show.val.cancelledCheques}  className={SCss.btnText}>Download Cheque</a>
                </div>
                <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <a href={props.props.show.val.idProof} className={SCss.btnText}>Download Seller Data</a>
                </div>
                <div className={SCss.downloadBtn}>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg></p>
                    <a href={props.props.show.val.addressProof}  className={SCss.btnText}>Download Address Proof</a>
                </div>
                <div class="checkbox-wrapper-3" id={SCss.storeBtn}>
                  <input type="checkbox" id="cbx-3"  />
                  <label for="cbx-3" class="toggle" >
                    <span> </span>
                  </label>
                  Store Offline
                </div>
    </>
  )
}

export default DownloadBtn