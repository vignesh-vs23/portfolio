import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact_container">
        <h1>CONTACT</h1><span>ME</span>
        <form>
          <input type="text" name="name" placeholder="NAME" required />
          <input type="email" name="email" placeholder="EMAIL" required /><br />
          <textarea name="message" placeholder="MESSAGE" required></textarea><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
