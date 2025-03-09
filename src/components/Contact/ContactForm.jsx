import { motion } from 'framer-motion';

function ContactForm() {
  return (
    <form action="https://formspree.io/f/xwkjrkqw" method="post" className="flex flex-col w-full md:w-1/2 bg-prussiaBlue p-8 rounded-xl gap-2">

      <input className="w-full bg-magnolia text-black p-2 rounded-2xl" id="full-name" type="text" name="name" placeholder="Your name" maxLength="30" required />

      <input className="w-full bg-magnolia text-black p-2 rounded-2xl" id="email" type="email" name="email" placeholder="Your Email address" required />

      <textarea className="py-1 bg-magnolia text-black p-2 rounded-2xl" id="msg" name="user_message" maxLength="500" placeholder="Write me something..." rows="5" required />

      <motion.input
        whileHover={{ scale: 1.05 }}
        className="p-2 w-full rounded-2xl bg-gradient-to-r from-argBlue to-argBlue/70 hover:cursor-pointer my-2 text-black font-bold"
        type="submit"
        value="Submit"
      />
    </form>
  );
}

export default ContactForm;
