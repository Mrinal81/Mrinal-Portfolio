


import { styles } from '../styles';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

export const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt className='w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      
      <motion.p 
        variants={fadeIn("up", "spring", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled full-stack developer with a passion for creating dynamic and responsive web applications. 
        My expertise lies in both front-end and back-end development, allowing me to build complete solutions that deliver exceptional user experiences.
      </motion.p>
      
      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  )
}

const AboutSection = SectionWrapper(<About />, "about");
export default AboutSection;