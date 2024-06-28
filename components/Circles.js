import Image from "next/image";


const Circles = () => {
  return <div className="circles-bot-right w-[300px] xl:w-[400px] fixed -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
    <Image 
      src={'/circles.png'} 
      width={260}
      height={200}
      alt="vignettes"
      className="w-full h-full"
    />
  </div>;
};

export default Circles;
