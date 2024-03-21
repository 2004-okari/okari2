import React from 'react';
import { Form } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <div>
        <h3>Contact Me</h3>
        <p>
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I’d love to help
          with it!
        </p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Message" />
          <button type="submit">Get in touch</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
