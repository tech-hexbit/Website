import React , { useState, useContext } from "react";

import AuthContext from "../../store/auth-context";

// axios
import axios from "axios";

export default function UpdateContacted(props){
    const authCtx = useContext(AuthContext);
    const tagValue=props.tag;

    const updateTag = async () => {
        // console.log(props.id)
        try {
            const res = await axios.post(
                '/api/website/ContactUs/admin/updateTag',
                { id: props.id },
                {
                  headers: { Authorization: `${authCtx.token}` },
                }
              );
          console.log(res.data.message);
        } catch (e) {
          console.error('Tag update failed:', e);
        }
    };
    
      const contactedhandle=async()=>{
        try{
          const res=await axios.get(`api/website/ContactUs/admin/contacted`,{
            headers: { Authorization: `${authCtx.token}` },
          })
          const user=res.data.user;
          console.log(user.tag);
          setTagValue(true);
          updateTag();
    
        }catch(e){
          console.log("contacted not working...",e.message)
        }
      }

      console.log(props.tag)
    return(
        <div>
        {
            tagValue ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-check"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/></svg>
            ) : (
              // <input type="checkbox" value={tagValue} onClick={contactedhandle}/>
              <div class="checkbox-wrapper-3">
                <input type="checkbox" id="cbx-3" value={tagValue} onClick={contactedhandle}/>
                <label for="cbx-3" class="toggle">
                  <span></span>
                </label>
              </div>
            )
        } 
        </div>
    )
}