import React from 'react'
import Circles from '../../components/Circles';
import Image from 'next/image';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaReact,
  FaWordpress,
  FaFigma,
  FaBootstrap ,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiSymfony,
} from "react-icons/si";
import { fadeIn } from '../../variants';
import { motion } from "framer-motion";

const prodatasss = {
  datasss: 
    {
      url: {
        ref: 'https://lockify.fcpriay.fr',
      },
      text: {
        title: 'Lockify',
        subtitle: "logiciel - Lockify",
        year: '2024',
        icons: [
          <SiSymfony title='Symfony' />,
          <FaPhp title='php'/>,
          <FaHtml5 title='html'/>,
          <FaCss3 title='CSS'/>,
          <FaJs title='JavaScript' />,
          <FaBootstrap title='Bootstrap' />,
          <FaFigma title='Figma' />,
        ],
      },
      image: {
        sources: [ '/locki.png','/lockify.png', '/louk.png'],
        classes: [
          'w-full h-60 object-cover object-bottom rounded-md sm:h-52 sm:col-span-2 lg:col-span-full',
          ' w-full h-52 object-cover object-bottom rounded-md sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32',
          ' w-full h-52 object-cover object-bottom rounded-md md:block lg:row-start-2 lg:col-span-2 lg:h-32'
        ],
      }
    }
};


const lock = () => {
  return (
    <div className="h-full bg-primary/20 relative xl:top-34 top-44 pt-10 lolo xl:pb-4 pb-40">
      <motion.h2 
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='xl:text-4xl text-2xl text-center font-bold pb-10'>
        {prodatasss.datasss.text.title} <span className='text-accent'>.</span>
      </motion.h2>
      <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 mb-40 xl-mb-0">
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h2 className="mt-1 text-lg font-semibold text-white md:text-2xl dark:sm:text-white lg:mb-2 order-2">{prodatasss.datasss.text.subtitle}</h2>
            <p className="text-xl leading-4 font-medium text-white lg:order-first order-1 mt-4 lg:mb-2 lg:mt-2">Technologies</p>
          </div>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden" 
            className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            {prodatasss.datasss.image.sources.map((source, index) => (
              <Image key={index} width={600} height={400} src={source} alt={`image-${index}`} className={prodatasss.datasss.image.classes[index]} loading="lazy" />
            ))}
          </motion.div>
          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">

          <div className="flex gap-x-4 py-1">
                {prodatasss.datasss.text.icons.map((icon, itemIndex) => {
                  return <div className="text-2xl text-accent hover:animate-pulse" key={itemIndex}>{icon}</div>
                })}
                </div>
          </dl>
          <p class="mt-2 text-lg leading-6 col-start-1 sm:col-span-2 lg:row-start-3 lg:mt-2 lg:col-span-1 text-white/90">
          J&#39;ai développé from scratch un logiciel de gestion des mots de passe. J&#39;ai utilisé Symfony pour sa proximité avec la base de données. Ce gestionnaire permet, après enregistrement ou connexion, de gérer les accès à des sites web, de créer des mots de passe aléatoires, de copier les données, et d&#39;être redirigé vers les sites aussi etc..
          <br />Les données sensibles sont cryptées en base, l&#39;accès à l&#39;espace personnel est privé. L&#39;administrateur a la capacité de gérer toutes les données de l&#39;application sans pouvoir en voir le contenu.
          <br />J&#39;ai réalisé ce projet pour usage personnel, compatible smartphone.
          <br /><span className='mt-2 line-clamp-1 font-bold'>Année : {prodatasss.datasss.text.year}</span>
          </p>
          <div class="mt-4 col-start-1 row-start-4 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-5 lg:row-end-6">
            <a href={prodatasss.datasss.url.ref} className='border-accent hover:bg-transparent bg-customBlue transition-all duration-500 p-2 rounded-md border-2 w-full h-full' target='_blank'><button type="button" class="bg-transparent text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Tester le logiciel</button></a>
            <a href={"/mes-projets"}><button type="button" className="bg-accent hover:bg-red-800 transition-all duration-500 ml-3 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Revenir aux projets</button></a>
            <br /><a href={"/contact"}><button type="button" className="bg-accent hover:bg-red-800 mt-4 transition-all duration-500  text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"> Me contacter</button></a>
          </div>
        </div>
      </div>

      <Circles />
    </div>
  )
}

export default lock