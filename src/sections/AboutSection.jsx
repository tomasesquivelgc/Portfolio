import { motion } from 'framer-motion';
import InfoList from '../components/InfoList';

function AboutSection() {
  return (
    <section id="about" className="bg-richBlack min-h-screen gap-4 px-10 py-20 md:px-16 lg:px-32 flex flex-col md:flex-row-reverse">
      <div className="w-full lg:w-1/2">
        <h2 className="font-medium text-5xl py-1">About me</h2>
        <p className="py-3 mb-3">
          Creative and resourceful. Oriented towards problem-solving and continuous learning.
          Quick to adapt to new environments and challenges, managing pressure and deadlines.
          <br />
          <br />
          Experienced in teamwork and project management, constantly aiming to deliver
          high-quality results.
          <br />
          <br />
          Dreaming of helping others through technology and innovation since young,
          always looking for new ways to improve and learn new things.
          <br />
        </p>
        <motion.a
          href="https://docs.google.com/document/d/e/2PACX-1vRgXEd3utL9Uql57taDOidPbsYLvzCnwtv_B22REQOEhlTgC6zVEXrgss-M-YwjkjGsK22qdDXvzRmh/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center inline-block w-full bg-gradient-to-r from-argBlue to-argBlue/70 tracking-wider text-xl p-1 md:text-base rounded-md text-black font-semibold"
          whileHover={{ scale: 1.06 }}
        >
          Curriculum Vitae
        </motion.a>
        <div className="py-1  mt-4 flex gap-4">
          <p className="py-1 w-1/2">
            If you must know one thing about me is that I love challenging myself to 
            solve any problem. But if you want to get to know me better,
            you can check this list.
          </p>
          <div  className="w-1/2">
            <InfoList />
          </div>
        </div>

      </div>
      <img src="cropped_face.webp" alt="thats me!" className="w-1/2 h-auto object-cover p-1" loading="lazy" />
    </section>
  );
}

export default AboutSection;
