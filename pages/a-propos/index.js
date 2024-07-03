import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiSymfony,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'Compétences',
    info: [
      {
        title: 'Developpement Web',
        icons: [
          <FaHtml5 title="html"/>,
          <FaCss3 title="css"/>,
          <FaJs title="JavaScript"/>,
          <FaReact title="React"/>,
          <SiNextdotjs title="next.js"/>,
          <FaWordpress title="Wordpress"/>,
          <SiSymfony title="symfony"/>,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma title="Figma"/>, <SiAdobexd title="Adobe xd"/>],
      },
    ],
  },
  {
    title: 'Autres',
    info: [
      {
        title: 'Formation "mailinblack"',
        stage: '2023',
      },
      {
        title: 'Formation "google my business"',
        stage: '2022',
      },
    ],
  },
  {
    title: 'Expérience',
    info: [
      {
        title: 'Développeur web',
        stage: '2023 - 2024',
      },
      {
        title: 'Développeur web - stage / Adaka',
        stage: 'Mai - Juillet 2023',
      },
      {
        title: 'Développeur web - stage / Pixel digital',
        stage: 'février - Avril 2023',
      },
      {
        title: 'Opérateur Manutentionnaire',
        stage: '20010 - 2022',
      },
    ],
  },
  {
    title: 'Diplômes',
    info: [
      {
        title: 'BTS Développeur web et web mobile',
        stage: '2023',
      },
      {
        title: 'Bac Pro en Pilotage de Systèmes de Production Automatisés',
        stage: '2010',
      },
      {
        title: 'Bep Métiers de Production et de Mécanique Informatisées',
        stage: '2008',
      },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return <div className="about-page h-full bg-primary/30 pt-40 pb-20 text-center xl:text-left">
    <Circles />
    {/* avatar img */}
    <motion.div 
    animate="show"
    exit="hidden"
    variants={fadeIn('right', 0.2)} 
    initial="hidden" 
    className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 lolo">
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
          animate="show"
          exit="hidden"
          variants={fadeIn('right', 0.2)} 
          initial="hidden" 
          className="h2"
        >
        Chaque <span className="text-accent"> design</span> cache une histoire captivante</motion.h2>
        <motion.p 
        animate="show"
        exit="hidden"
        variants={fadeIn('right', 0.4)} 
        initial="hidden" 
        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-white/90" 
        >
          Il y a trois ans, je me suis lancé dans une reconversion dans le domaine de l&apos;informatique.
          Après l&apos;obtention de mon diplôme et plusieurs stages, j&apos;ai travaillé au sein d&apos;une agence sur divers projets de grande envergure (sites sur mesure et logiciels).
        </motion.p>
        {/* compteur */}
        <motion.div 
          animate="show"
          exit="hidden"
          variants={fadeIn('right', 0.6)} 
          initial="hidden" 
          className=" md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-2"
          >
          <div className="flex flex-1 xl:gap-x-6 mb-3">
            {/* xp */}
            <div className="mb-3 flex flex-col xl:items-start items-center relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={3} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Années d&apos;expérience
              </div>
            </div>
            {/*clients */}
            <div className="mb-3 flex flex-col xl:items-start items-center relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={50} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Clients satisfaits
              </div>
            </div>
            {/* projets */}
            <div className="mb-3 flex flex-col xl:items-start items-center relative flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={20} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Projets terminés
              </div>
            </div>

          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div 
        animate="show"
        exit="hidden"
        variants={fadeIn('left', 0.4)} 
        initial="hidden" 
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) =>{
            return (
            <div 
              key={itemIndex} 
              className={`${index === itemIndex && 'lulu text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-0 after:left-0`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          )})}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60" key={itemIndex}>
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex py-1">-</div>
                <div className="">{item.stage}</div>
                <div className="flex gap-x-4 py-1">
                {item.icons?.map((icon, itemIndex) => {
                  return <div className="text-2xl text-accent hover:animate-pulse" key={itemIndex}>{icon}</div>
                })}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
