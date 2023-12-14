import React from 'react';
import "../styles/Contact.css";
import contact from "../assets/contact.jpeg";

const Contact = () => {
  return (
    <div className="contact">
        <div className="leftside" style={{backgroundImage:`url(${contact})`}}>
        </div>
        <div className="rightSide">
           <h1>Contact Us</h1>
           <form id='contact-form' method='POST'>
            <label htmlFor='name'>Full Name</label>
            <input name='name' type='text' placeholder='Enter Your Name'/>
            <label htmlFor='email'>Email</label>
            
            <input name='email' type='email' placeholder='Enter Your email address'/>
            <label htmlFor='message'>Message</label>
            <textarea name='message' placeholder='Enter your Message' rows="7"></textarea>
            <button type='submit'>Send Message</button>
           </form>
        </div>
    </div>
  )
}

export default Contact;
