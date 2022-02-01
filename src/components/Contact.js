import React from 'react';
import '../App.css';

const Contact = () => {
  return (  
    <div>
    <h1 className="contact-heading">We Love To Hear Some Feedback!
    <hr/><hr/>Your Thoughts Matter To The World</h1>
    <form className="form-check" action="src/components/ThankYou.js">
    <label>
      First Name:
      <input type="text" name="name" placeholder="Enter First Name" />
    </label>
    <label>
      Last Name:
      <input type="text" name="name" placeholder="Enter Last Name" />
    </label>
    <label>
      Give Us Feedback:
      <input type="text" cols="10" rows="500" name="feedback" placeholder="(Max: 100 characters)"/>
    </label>
  
    <input className="submit_btn"type="submit" value="Submit" />
  </form>
  </div>
)
};

export default Contact;
