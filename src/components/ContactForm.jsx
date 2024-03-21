import React from "react";

function ContactForm() {
  return(
    <form action="https://formspree.io/f/xwkjrkqw" method="post" className="flex flex-col w-full md:w-1/2 py-3">
          <label htmlFor="full-name">
            <input className="w-full" id="full-name" type="text" name="name" placeholder="Full name" maxLength="30" required />
          </label>

          <label htmlFor="email">
            <input className="w-full" id="email" type="email" name="email" placeholder="Email address" required />
          </label>

          <textarea id="msg" name="user_message" maxLength="500" placeholder="Write me something..." required />

          <input type="submit" value="Submit" />
        </form>
  );
}

export default ContactForm;