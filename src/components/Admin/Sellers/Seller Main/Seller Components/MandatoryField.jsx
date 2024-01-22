import React from 'react'

// Css
import SCss from '../CSS/sellerDetail.module.css'

function MandatoryField() {
  return (
    <div className={SCss.mandatoryFields}>
                        <u>
                            
                            <div className={SCss.mandatoryT}>
                            <p className={SCss.asterisk}>**</p>
                            <p>
                            All Check Box Verification are Mandatory
                            </p>
                            <p className={SCss.asterisk}>**</p>
                            </div>
                        </u>
                        <div>
                            <label className={SCss.checkbox}>
                            <input type="checkbox" name="checkbox" />
                            <p>BANK DETAILS VERIFIED </p>
                            </label>
                            <label className={SCss.checkbox}>
                            <input type="checkbox" name="checkbox" />
                            <p>GST & PAN VERIFIED</p>
                            </label>
                            <label className={SCss.checkbox}>
                            <input type="checkbox" name="checkbox" />
                            <p>ONDC DETAILS VERIFIED   </p>
                            </label>
                        </div>
                        <div className={SCss.verifiedBtn}>
                            <p>KYC DETAILS VERIFIED</p>
                        </div>
                </div>
  )
}

export default MandatoryField