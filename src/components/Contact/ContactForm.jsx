import { motion } from 'framer-motion';

function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xwkjrkqw"
      method="post"
      className="flex w-full flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#1a3348] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
    >
      <input
        className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:shadow-[0_0_0_2px_rgb(59_130_246)]"
        id="full-name"
        type="text"
        name="name"
        placeholder="Your name"
        maxLength="30"
        required
      />

      <input
        className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:shadow-[0_0_0_2px_rgb(59_130_246)]"
        id="email"
        type="email"
        name="email"
        placeholder="Your Email address"
        required
      />

      <textarea
        className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:shadow-[0_0_0_2px_rgb(59_130_246)]"
        id="msg"
        name="user_message"
        maxLength="500"
        placeholder="Write me something..."
        rows="5"
        required
      />

      <motion.input
        whileHover={{ scale: 1.02 }}
        className="my-1 w-full cursor-pointer rounded-xl bg-gradient-to-r from-argBlue to-[#3b82f6] py-3 font-semibold text-magnolia shadow-none transition hover:from-[#7ec4f5] hover:to-argBlue hover:shadow-[0_8px_24px_rgba(59,130,246,0.35)]"
        type="submit"
        value="Submit"
      />
    </form>
  );
}

export default ContactForm;
