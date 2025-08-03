import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas/Earth";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!form.name || !form.email || !form.message) {
    alert('Please fill in all fields');
    return;
  }

  if (!form.email.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }

  setLoading(true);
  
  try {
  
    await emailjs.send(
  import.meta.env.VITE_SERVICE_ID,
  import.meta.env.VITE_TEMPLATE_ID,
  {
    from_name: form.name,
    to_name: 'Mrinal',
    from_email: form.email,
    to_email: 'mrinalanand561@gmail.com',
    message: form.message,
    time: new Date().toLocaleString(),
  },
  import.meta.env.VITE_KEY
);

    setLoading(false);
    alert('Thank you. I will get back to you as soon as possible.');
    setForm({ name: '', email: '', message: '' });
    
  } catch (error) {
    setLoading(false);
    console.error('Full error object:', error);
    
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
    
    alert('Failed to send message. Please check console for details and try again later.');
  }
};

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 1)} 
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              placeholder="What's your name?" 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="What's your email?" 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows={7} 
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              placeholder="What do you want to say?" 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
            />
          </label>

          <div className="flex items-center justify-center w-full">
            <button 
              type="submit" 
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl flex justify-center' 
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn("right", "tween", 0.2, 1)} 
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>  
  );
};

const ContactSection = SectionWrapper(<Contact />, "contact");
export default ContactSection;