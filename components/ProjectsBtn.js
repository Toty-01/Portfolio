import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
  <div className="mx-auto xl:mx-0 roar">
    <Link 
      href={'/mes-projets'}
      className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group" 
    >
      <Image 
        src={'/projet.png'}
        width={201}
        height={208}
        alt="text"
        className="animate-spin-slow w-full h-full max-w-[201px] max-h-[208px]"
      />
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-500" />
    </Link>
  </div>
)};

export default ProjectsBtn;
