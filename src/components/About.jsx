import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        I am a sophomore at IIT BHU in the maths and computing branch. I am interested in development of all
        kinds, be it web or web3 or system dev. I also find the field of quant
        really interesting. <br></br>Currently, my CPI is 9.68 and my codeforces rating
        is about 1400. I am learning every second, every day, wherever I go,
        whether from my seniors, professors, or peers. <br /> <br />I want to tell you why I
        chose this as my field of study. When I was in 10th, I had no specific
        interest in Olympiad maths. I was selected for a camp at that time. When
        I reached there, I saw everyone doing complicated Olympiad maths, and I
        got interested in seeing what all the fuss was about. I tried it and
        found it to be fascinating. I continued doing that even in 11th, amid my
        JEE advanced preparation. Eventually, I cracked JEE advanced. Then I saw
        the options that I had. When I saw that I was getting mathematics and
        computing at IIT BHU, I knew I had to take it, as it would allow me to
        continue doing maths and learn computer science! After reaching here, I
        feel like I made the right decision.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
