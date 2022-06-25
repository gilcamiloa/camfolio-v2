import './contact.scss';
import {React, useState} from 'react';

export default function Contact() {

  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" >
      <div className="contactContainer">
        <div className="left">
          <h5>Any questions?..</h5>
          <h4>Let's connect!</h4>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit} className='form'>
            <span><input type="text" placeholder="First Name" id='firstName'/><input type="text" placeholder="Last Name" id='lastName'/></span>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">SEND</button>
            {message && <span>Thanks, I'll reply ASAP!</span>}
          </form>
        </div>
      </div>
    </div>
  )
}
