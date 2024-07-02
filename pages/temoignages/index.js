import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import {fadeIn} from '../../variants';

const Testimonials = () => {
  return (
    <div className=" bg-primary/30 py-40 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2 
          variants={fadeIn('up', 0.4)} 
          initial='hidden' 
          animate="show" 
          exit="hidden" 
          className="text-3xl xl:h2 mb-8 xl:mb-0"
        >
          Ce que les <span className="text-accent">clients</span> disent 
          <br />de moi 
        </motion.h2>
        <motion.div 
          variants={fadeIn('up', 0.6)} 
          initial='hidden' 
          animate="show" 
          exit="hidden" 
          className=""
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
)};

export default Testimonials;
