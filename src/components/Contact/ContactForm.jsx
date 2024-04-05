function ContactForm() {
  return (
    <form action="https://formspree.io/f/xwkjrkqw" method="post" className="flex flex-col w-full md:w-1/2 py-4">
      <label htmlFor="full-name" className="py-1">
        Full name:
        <input className="w-full bg-magnolia" id="full-name" type="text" name="name" placeholder="Full name" maxLength="30" required />
      </label>

      <label htmlFor="email" className="py-1">
        Email:
        <input className="w-full bg-magnolia" id="email" type="email" name="email" placeholder="Email address" required />
      </label>

      <textarea className="py-1 bg-magnolia" id="msg" name="user_message" maxLength="500" placeholder="Write me something..." required />

      <input className="p-2 w-full" type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;
