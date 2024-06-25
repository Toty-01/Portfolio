import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiLinkedinLine, RiBehanceLine, RiPinterestLine } from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-xl lg:mr-10">
    <Link href={'https://www.youtube.com/channel/UC6TS-KBx8eru12q3qyXX8tA'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
    </Link>
    <Link href={'https://www.instagram.com/caucheanthony/'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.facebook.com/profile.php?id=61560382074937'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/anthony-cauche'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
  </div>;
};

export default Socials;
