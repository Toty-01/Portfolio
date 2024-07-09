import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants"

const Home = () => {
  return <div className="bg-primary/60 h-full ">
    { /*text*/}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/40 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-32 xl:text-left h-full container mx-auto pt-8">
        {/* title */}
        <motion.h1 
          variants={fadeIn('down', 0.3)} 
          initial="hidden" 
          animate="show"
          exit="hidden"
          className="text-[25px] leading-tight md:text-[54px] md:leading-[1.3] mb-4 font-semibold">
          Transformez vos idées <br /> en  <span className="text-accent">Réalité Digitale</span>
        </motion.h1>
        {/* Subtitle */}
        <motion.p 
          variants={fadeIn('down', 0.4)} 
          initial="hidden" 
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-2 text-white font-medium">
            Bienvenue sur mon portfolio <span className="text-accent text-2xl"> .</span>
        </motion.p>
        <motion.p 
          variants={fadeIn('down', 0.4)} 
          initial="hidden" 
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-2 xl:mb-16 text-white">
            Vous y trouverez une sélection de mes projets, les services que je propose, une introduction à mon parcours professionnel, et bien d&#39;autres choses encore..
            <br />Bonne visite
        </motion.p>
        {/* btn */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div 
          variants={fadeIn('down', 0.6)} 
          initial="hidden" 
          animate="show"
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjectsBtn/>
        </motion.div>
      </div>
    </div>
      { /*image*/ }
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
      {/* particules */}
        <ParticlesContainer />
      {/* Image */}
        <motion.div 
            variants={fadeIn('up', 0.5)} 
            initial="hidden" 
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mix-blend-color-none translate-z-0 w-full h-full max-w-[600px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>

    </div>
  </div>
};

export default Home;
