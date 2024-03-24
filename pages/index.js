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
        {/* Subtitle */}
        <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ducimus! Magni, iusto excepturi? Laudantium sed maiores impedit eveniet! Ullam nobis 
          ex dolorum aperiam asperiores molestiae eligendi iste architecto quaerat consectetur. Distinctio tempore eligendi, architecto modi, 
          totam doloremque molestiae qui, deleniti sed veniam a porro amet sit corporis quo expedita error et nesciunt ex voluptatum. Molestiae beatae ab eos alias dolor?
        </p>
      </div>
    </div>
      { /*image*/ }
    <div className="">image</div>
    </div>;
};

export default Home;
