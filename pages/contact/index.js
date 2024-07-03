import Circles from "/components/Circles"
import {BsArrowRight} from 'react-icons/bs'
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import React, { useState } from 'react';

const Contact = () => {
  const [nomError, setNomError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [sujetError, setSujetError] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nom = event.target.elements['Nom'].value;
    const email = event.target.elements['email'].value;
    const sujet = event.target.elements['sujet'].value;
    setNomError('');
    setEmailError('');
    setSujetError('');

    let formIsValid = true;

    if (!nom) {
      setNomError('Veuillez remplir le champ Nom.');
      formIsValid = false;
    } else if (nom.length < 3) {
      setNomError("Le nom doit contenir plus de 3 caractères")
      formIsValid = false;
    }
    if (!email) {
      setEmailError('Veuillez remplir le champ Email.');
      formIsValid = false;
    } else if (email.length < 3) {
      setEmailError("L'e-mail doit contenir plus de 3 caractères")
      formIsValid = false;
    }
    if (!sujet) {
      setSujetError('Veuillez remplir le champ Sujet.');
      formIsValid = false;
    } else if (sujet.length < 3) {
      setSujetError("Le sujet doit contenir plus de 3 caractères")
      formIsValid = false;
    }
    if (!formIsValid) {
      setShowErrors(true);
      setTimeout(() => {
        setShowErrors(false);
      }, 5000);
    }
    if (formIsValid) {
      event.target.submit();
    }
  };
  
  return (
  <div className="h-full bg-primary/30">
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      {/* text & form */}
      <div className="flex flex-col w-full max-w-[700px]">
        <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-12"
        >
          Connectons <span className="text-accent">nous .</span>
        </motion.h2>

        <motion.form 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col gap-6 w-full mx-auto" 
          id="lessonForm" 
          action="https://formspree.io/f/mzbnlvnw" 
          method="post"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="flex gap-x-6 w-full">
          <input 
            name="Nom" 
            type="text" 
            placeholder="Nom (obligatoire)" 
            className="input" 
            required
          />
          <input 
            name="email" 
            type="email" 
            placeholder="E-mail (obligatoire)" 
            className="input" 
            autoComplete="email" 
            required
            />
          </div>
          <div className={showErrors ? "bg-red-600 py-2" : "hidden"}>
            {nomError && <div className="feedback">{nomError}</div>}
            {emailError && <div className="feedback">{emailError}</div>}
            {sujetError && <div className="feedback">{sujetError}</div>}
          </div>
          <input 
            type="text" 
            name="sujet" 
            placeholder="Sujet (obligatoire)" 
            className="input" 
            required
          />
          <textarea 
            placeholder="Message" 
            className="textarea" 
            name="texte" 
          >
          </textarea>
          <button 
            type="submit"
            className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Discutons</span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all absolute duration-300 text-[22px]"/>
          </button>
        </motion.form>
      </div>
      <Circles />
    </div>
  </div>
)};

export default Contact;
