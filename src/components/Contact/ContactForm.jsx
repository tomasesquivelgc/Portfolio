import { motion } from 'framer-motion';

function ContactForm() {
  return (
    <form action="https://formspree.io/f/xwkjrkqw" method="post" className="flex flex-col w-full md:w-1/2">
      <label htmlFor="full-name" className="pb-1">
        Full name:
        <input className="w-full bg-magnolia text-night" id="full-name" type="text" name="name" placeholder="Full name" maxLength="30" required />
      </label>

      <label htmlFor="email" className="py-1">
        Email:
        <input className="w-full bg-magnolia text-night" id="email" type="email" name="email" placeholder="Email address" required />
      </label>

      <textarea className="py-1 bg-magnolia text-night" id="msg" name="user_message" maxLength="500" placeholder="Write me something..." required />

      <motion.input
        whileHover={{ scale: 1.05 }}
        className="p-2 w-full rounded-lg bg-argBlue hover:cursor-pointer my-2 text-night"
        type="submit"
        value="Submit"
      />
    </form>
  );
}

export default ContactForm;
