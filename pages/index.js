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
  return <div className="bg-primary/60 h-full">
    { /*text*/}
    <div className="">
      <div className="">
        {/* title */}
        <h1 className="h1">
          Transformer vos idées <br /> en  <span className="text-accent">Réalité Digitale</span>
          
        </h1>
      </div>
    </div>
    { /*image*/ }
    <div className="">image</div>
    </div>;
};

export default Home;
