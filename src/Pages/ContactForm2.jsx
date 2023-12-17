import React, { useState } from 'react'
import "./Css/Contactform2.css";

function ContactForm() {
  const [subjectvalue, setsubjctvalue] = useState("")
  const [textareavalue, settextareavalue] = useState("")

  const handlechange = (event) => {
    setsubjctvalue(event.target.value)
  }
  const handletextchange = (event) => {
    settextareavalue(event.target.value)
  }
  return (
    <div >
      <div className='container'>
        <div className="maindiv">

          <label htmlFor="Subject">
            Subject
            <span className="astersk"> *</span>
          </label>
          <input
            type="text"
            name="Subject"
            id="Subject"
            placeholder="How can we Help"
            value={subjectvalue}
            onChange={handlechange}

          />
          <label htmlFor="textarea">
            Message
            <span className="astersk"> *</span>
          </label>
          <textarea
            name="FirstName"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Hello there, I would like to talk about how to..."
            value={textareavalue}
            onChange={handletextchange}

          ></textarea>
         <button className='button'>Send messege</button>
        </div>
      </div>

    </div>
  )
}

export default ContactForm