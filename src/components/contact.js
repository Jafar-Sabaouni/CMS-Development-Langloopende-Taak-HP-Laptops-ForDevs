import React from 'react';
import {
    contactContainer
} from "../pages/index.module.css"

const Contact = () => {

  
    return (
        <section className={contactContainer}>
        <p>contact us</p>
      <form name="contact" method="POST" data-netlify="true">
            <label>First Name</label>
            <input type="text" name="FirstName" required={true} />
            <label>Last Name</label>
            <input type="text" name="LastName" required={true} />
            <label>Email</label>
            <input type="email" name="email" required={true} />
            <label>Message</label>
            <textarea name="message" required={true}></textarea>
            <input type="hidden" name="form-name" value="contact" />
            <button type="submit">Send</button>
        </form>
      </section>
    )
  }

export default Contact;