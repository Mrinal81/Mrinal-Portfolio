import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { live } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { projects as Projects } from '../constants';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      
      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("up", "spring", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are some of my projects that showcase my skills and creativity in web development. 
          Each project reflects my dedication to building functional and visually appealing applications.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {Projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="w-full h-full"
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary p-5 rounded-2xl h-full flex flex-col"
            >
              <div className='relative w-full h-[200px]'>
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className='w-full h-full object-cover rounded-2xl'
                />
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                  <div 
                    onClick={() => window.open(project.source_code_link, "_blank")}
                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  >
                    <img src={live} alt="live" className='w-1/2 h-1/2 object-contain' />
                  </div>
                </div>
              </div>

              <div className='mt-5 flex-1 flex flex-col'>
                <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
                <p className='mt-2 text-secondary text-[16px] flex-1'>{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const WorkSection = SectionWrapper(<Works />, "works");
export default WorkSection;