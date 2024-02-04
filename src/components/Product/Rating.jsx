import React from 'react'

// css
import RCss from './Css/Rating.module.css'

function Rating() {
  return (
    < >
        
        <div className={RCss.comments}>
            <div className={RCss.userTop}>
                <p className={RCss.user}>
                    <div className={RCss.firstLetter}>
                        <>
                         R
                        </>
                    </div>
                    <p>
                        Ramesh
                    </p>
                </p>
                <p>
                    10:30 AM
                </p>
            </div>
            <div className={RCss.userComment}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero qui totam ut cupiditate enim, ad officiis .
            </div>
        </div>

    </>
  )
}

export default Rating