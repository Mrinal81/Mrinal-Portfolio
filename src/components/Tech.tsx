import { BallCanvas } from './canvas/Ball';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technologies) => (
        <div className='w-28 h-28' key={technologies.name}>
          <BallCanvas icon={technologies.icon} />
          <p className='mt-2 text-center text-white font-bold'>{technologies.name}</p>
        </div>
      ))}
      
    </div>
  )
}

const TechSection = SectionWrapper(<Tech />, "tech");
export default TechSection;